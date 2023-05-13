import React from "react";
import { Avatar, Heading, VStack ,HStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faGit,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
// import myImage from "../images/bam-bam.jpeg";
import "../components/LandingSection.css";


const skill1 = "HTML";
const skill2 = "CSS";
const skill3 = "JAVASCRIPT";
const skill4 = "REACT";
const skill5 = "BOOTSTRAP";
const skill6 = "GIT";


const SkillSection = () => (
  <FullScreenSection
    
    isDarkBackground
    backgroundColor="#ffffff"
    className="skill"
    
    color="#b38a4c"
   
  >
    <Heading as="h1" py={100} color="#b38a4c"  >
        Skills
      </Heading>
    <HStack 
    justifyContent="space-between">
    <VStack  spacing={5} mr="100px">
    
      <Heading as="h4" size="lg" noOfLines={1}>
        {skill1} <FontAwesomeIcon icon={faHtml5} />
      </Heading>
      <Heading as="h1" size="lg" noOfLines={1}>
        {skill2} <FontAwesomeIcon icon={faCss3} />
      </Heading>
      <Heading as="h1" size="lg" noOfLines={1}>
        {skill3} <FontAwesomeIcon icon={faJs} />
      </Heading>
      </VStack>

      <VStack  spacing={5}>
    
      <Heading as="h4" size="lg" noOfLines={1}>
        {skill4} <FontAwesomeIcon icon={faReact} />
      </Heading>
      <Heading as="h1" size="lg" noOfLines={1}>
        {skill5} <FontAwesomeIcon icon={faBootstrap} />
      </Heading>
      <Heading as="h1" size="lg" noOfLines={1}>
        {skill6} <FontAwesomeIcon icon={faGit} />
      </Heading>
      </VStack>
    </HStack>
  </FullScreenSection>
);

export default SkillSection;
