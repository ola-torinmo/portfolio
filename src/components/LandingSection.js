import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myImage from "../images/bam-bam.jpeg";
import "../components/LandingSection.css";


const greeting = "Hello, I am Bam Bam!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#4E473A"
    className="fss"
    // minHeight="100vh" 
  >
    <VStack className="landing-section" spacing={4}>
    <Avatar size="2xl" src={myImage}  />
      <Heading as="h4" size="2xl" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h1" size="lg" noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as="h1" size="lg" noOfLines={1}>
        {bio2}
      </Heading>
      </VStack>
  </FullScreenSection>
);

export default LandingSection;
