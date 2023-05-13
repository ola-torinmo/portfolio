import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import "../components/LandingSection.css";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    type: Yup.string().required('Type is required'),
    comment: Yup.string().min(25, "Must be at least 25 characters") .required('Comment is required')
  });
  

  const formik = useFormik({
    initialValues: {
    firstName: '',
    email: '',
    type: '',
    comment: ''
    },
    onSubmit: (values) => { 
      submit('https://john.com/contactme', values); 
    }, 
    
    validationSchema
  });

  const firstNameProps = formik.getFieldProps('firstName');
  const commentProps = formik.getFieldProps('comment');
  const typeProps =formik.getFieldProps('type');
  const emailProps = formik.getFieldProps('email');

  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]); 

 
  const { type: responseType, message: responseMessage } = response || {};

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#ffffff"
      py={16}
      spacing={8}
      color="#000000"
      
    >
      <VStack w="1024px" p={32} alignItems="center" >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
        <form onSubmit={formik.handleSubmit} className="form">
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  // onChange={formik.handleChange}
                  // value={formik.values.comment}
                  {...firstNameProps}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
      
              </FormControl>
              <FormControl isInvalid={!!formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  // onChange={formik.handleChange}
                  // value={formik.values.comment}
                  {...emailProps}
                />
                 <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" color=
                "black" name="type"  {...typeProps}>
                  <option value="blank">...</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                
              </FormControl>
              <FormControl isInvalid={!!formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  // onChange={formik.handleChange}
                  // value={formik.values.comment}
                  {...commentProps}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>

              </FormControl>
              <Button type="submit" backgroundColor="#b38a4c" width="full "  isLoading={isLoading}>
                {isLoading ? 'Submitting' : 'Submit'}
              </Button>
              

              {/* {isLoading && <div>Loading...</div>}
              {response && (
              <div>
              {response.success ? 'Success!' : 'Error: ' + response.error}
              </div>
                  )} */}
            </VStack>
            
            {response && (
              <Alert status={responseType === 'success' ? 'success' : 'error'} mt={4}>
               <AlertIcon />
              {response.message}
             </Alert>
                 )}
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
