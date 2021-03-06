import React from 'react';
import NextLink from 'next/link';
import AstronautLottie from '../src/components/AstronautLottie';


import {
  Flex,
  Stack,
  Text
} from '@chakra-ui/react';

function Custom404() {
        return(
        <Flex bg="blue.900" h="150vh" w="100%" alignContent="center" justifyContent="center" p="0" m="0">
          <Stack shouldWrapChildren align="center">
            <Flex w={["65vw", "65vw", "35vw", "35vw"]} justifyContent="center">
              <AstronautLottie display="block" w="100%"/>
            </Flex>
            <Text color="white" fontSize={[60, 60, 80, 80]} fontFamily="Lexend Deca" display="block" pt="0" mt="0">
                You look lost.
            </Text>
            <NextLink href="/">
            <a>
              <Text as="u" color="blue.600" fontSize={[30, 30, 40, 40]} fontFamily="Lexend Deca" display="block">
                  Take me back home
              </Text>  
            </a>
            </NextLink>
          </Stack>
            
        </Flex>
        );
  }
  
  export default Custom404;