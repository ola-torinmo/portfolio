import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [scrollDirection, setScrollDirection] = useState("none");
  // const prevScrollPositionRef = useRef(0);

  const headerRef = useRef(null); 

  useEffect(() => { 
    let prevScrollPos = window.scrollY; 
  
    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(0)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#f7f7f7"
      
      boxShadow="md"
      // transition="transform 0.3s ease"
      // transform={
      //   scrollDirection === "down" ? "translateY(-200px)" : "translateY(0)"
      // }
      // zIndex="999"
      ref={headerRef}
    >
      <Box color="#000000" maxWidth="1280px" margin="0 auto">
        <HStack
          px={26}
          py={4}
          justifyContent="space-around"
          alignItems="center"
        >


          <nav> 
           <HStack spacing={8}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a> 
             ))} 
           </HStack> 
         </nav> 

          <nav>
            {/* Add social media links based on the `socials` data */
            // <HStack ml={100} spacing='40px'>
            //   <a href="hello@example.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            //   <a href="https://github.com" ><FontAwesomeIcon icon={faGithub} size="2x"  /></a>
            //   <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            //   <a href="https://medium.com"><FontAwesomeIcon icon={faMedium}  size="2x"/></a>
            //   <a href="https://stackoverflow.com"><FontAwesomeIcon icon={faStackOverflow} size="2x" /></a>
            // </HStack>
            
            }
          </nav>

          

          <nav>
            <HStack >
              {/* Add links to Projects and Contact me section */
              <HStack spacing={10}>
               
                <a href="#contactme-section" onClick={(event) => handleClick('contactme-section', event)}> Contact</a>
                <a href="#projects-section" onClick={(event) => handleClick('projects-section', event)}> Projects</a>

              </HStack>
              
              

              
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
