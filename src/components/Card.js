import { Heading, HStack, Image, Text, VStack, Box, useBreakpointValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../components/LandingSection.css";
import React from "react";

const Card = ({ title, description, url, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="xl"
      textAlign="left"
    >
      <Image borderRadius="xl" src={imageSrc} alt={title} />
      <VStack spacing={4} p={4} alignItems="flex-start" className="card_text" textAlign="left">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg" >
          {description}
        </Text>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <HStack spacing={2} alignItems="center">
              <Text textAlign="left">See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </a>
        )}
      </VStack>
    </VStack>
  );
};

export default Card;
