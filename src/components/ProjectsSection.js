import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading,useBreakpointValue, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import "../components/LandingSection.css";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/sign-up1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/nft1.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/biker-store1.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/restuarant1.jpg"),
  },
];

const ProjectsSection = () => {
  const columnCount = useBreakpointValue({ base: 1, sm: 2, md: 2 });
  // const columnWidth = useBreakpointValue({ base: "100%", sm: "50%", md: "33.33%" });
  const padding = useBreakpointValue({ base: 4, md: 8 });
  // const maxSectionWidth = useBreakpointValue({ base: "100%", md: "1200px" });
  
  return (
    <Box className="pss">
      <FullScreenSection
      backgroundColor="#4E473A"
      isDarkBackground
      p={padding}
      alignItems="center"
      spacing={8}
      
      
      
      
    >
      <Heading as="h1" id="projects-section" color="#ffffff"  >
        Featured Projects
      </Heading>
      <SimpleGrid
        columns={columnCount}
        spacing={8}
        mt={8}
        width="100%"
        maxWidth="1200px"
        mx="auto"
        
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url="https://github.com/rgommezz/react-native-offline"
            imageSrc={project.getImageSrc()}
            // width={columnWidth}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
    </Box>
  );

}

export default ProjectsSection;
