import { Link as RouterLink, Outlet } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Link, extendTheme } from "@chakra-ui/react";
import '../quiz/Quiz.css'


const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: "linear-gradient(#d8cece, #0000ff)",
        height: "100vh",
        margin: 0,
        padding: 0,
      },
      fonts: {
        
        
      },
    },
  },
});



const Navigation = () => {
  return (
    <>
    <ChakraProvider theme={theme}>
      <Box >
        {/* Barre de navigation */}
        <Box bg="blue.300" p={4}>
          <Flex justify="space-around" align="center">
            <Link
              as={RouterLink}
              to="/withNavbar/quiz"
              color="white"
              _hover={{ color: "blue" }}
            >
              Vers page quizz
            </Link>
            <Link
              as={RouterLink}
              to="/withNavbar/leaderboard"
              color="white"
              _hover={{ color: "blue" }}
            >
              Vers page leaderboard
            </Link>
            <Link
              as={RouterLink}
              to="/withNavbar/about"
              color="white"
              _hover={{ color: "blue" }}
            >
              Vers page about
            </Link>
          </Flex>
        </Box>

        
      </Box>
    </ChakraProvider>
        
          <Outlet />
    </>
    
        
  );
}

export default Navigation;
