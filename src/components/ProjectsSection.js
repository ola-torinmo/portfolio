import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading,useBreakpointValue, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import "../components/LandingSection.css";

const projects = [
  {
    title: "Sign Up Form",
    description:
      "A Responsive Sign Up Form built using HTML, CSS and using Javascript to validate the sign-up details.",
    getImageSrc: () => require("../images/sign-up1.jpg"),
    url: "https://forval21.netlify.app/",
  },
  {
    title: "NFT Card",
    description:
      "An NFT Card built using HTML,CSS to show an ethereum coin portfolio .🔥️",
    getImageSrc: () => require("../images/nft1.jpg"),
    url: "https://ola-torinmo.github.io/nft-preview-card-component-main/",
  },
  {
    title: "Biker Repair Store ",
    description:
      "A Landing page built using HTML,CSS for a local Biker Repair Shop business. For Large screens only ",
    getImageSrc: () => require("../images/biker-store1.jpg"),
    url: "https://ola-torinmo.github.io/biker-store-website/",
  },
  {
    title: "Restuarant Landing Page",
    description:
      "A Landing Page built using HTML and CSS for Adare Restuarant.For Large screens only  ",
    getImageSrc: () => require("../images/restuarant1.jpg"),
    url: "https://ola-torinmo.github.io/adare-restuarant/",
  },
  {
    title:"Maternal-Health blog Landing Page",
    description:
    "A responsive Landing Page built using React.js ,React-Bootstrap,Css for Reprolife. ",
    getImageSrc: () => require("../images/reproplp.jpg"),
    url: "https://reprolp.vercel.app",
  },
  {
    title: "Health/Home-Care Provider Agency Website",
    description:
      "A responsive multi-page website built using React.js ,React-Bootstrap,Css for Momentum. ",
    getImageSrc: () => require("../images/momentum.jpg"),
    url: "https://moment-vert.vercel.app",
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
            url={project.url}
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
