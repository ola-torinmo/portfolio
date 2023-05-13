import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import "../components/LandingSection.css";

const Footer = () => {

  
  return (
    <Box backgroundColor="#f7f7f7" className="footer">
      <footer className="footer">
        <Flex
          margin="0 auto"
          px={2}
          color="#000000"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Adebayo • © 2022</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
