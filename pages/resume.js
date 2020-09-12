import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../components/Sidebar';
import SideMenu from '../components/sidemenu';

import {
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  ButtonGroup,
  Drawer,
  Text
} from '@chakra-ui/core';

const Resume = () => (
  <div id="Website">
    <title>Andrew's Website</title>
    <Sidebar />
      <Box bg="blue.100" h="100vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" padding={["20px", "20px", "100px", "200px"]}>
        <Text fontSize={128} fontFamily="Lexend Deca">
            Resume Page
        </Text>
      </Box>
  </div>
);

export default Resume;