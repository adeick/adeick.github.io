import React, { useState, useEffect } from 'react';
import Sidebar from '../../src/components/Sidebar';
import Footer from '../../src/components/Footer';
import Link from 'next/link';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { RiPagesLine } from 'react-icons/ri'

import { AiOutlineWarning } from 'react-icons/ai'
import { DiGit } from 'react-icons/di'

import { ArrowBackIcon  } from '@chakra-ui/icons'


import {
  Image,
  Box,
  Flex,
  IconButton,
  Button,
  ButtonGroup,
  Drawer,
  Text,
  useColorMode,
  useColorModeValue, Stack, 
  VStack, HStack, Spacer, Icon,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  useBreakpointValue, 
  Alert, AlertIcon, AlertTitle, AlertDescription,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  Divider,
} from '@chakra-ui/react';
//import UncontrolledLottie from '../components/UncontrolledLottie';

const BotDescription = () => {
  const sourcesModal = useDisclosure();

  return(
  <div id="Website">
    <Sidebar />
      <Flex bg={useColorModeValue("blue.100", "gray.900")} justifyContent="center" flexDirection="column"
      w="85vw" right="0" position="absolute" className="Background" minHeight={window.innerHeight * 1.2}
      backgroundImage={
        useColorModeValue(
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%234072fb' fill-opacity='0.09'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E")`,        
        `url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23151313' fill-opacity='0.35' fill-rule='evenodd'/%3E%3C/svg%3E")`
        )}
      //px={["20px", "20px", "40px", "80px"]} py="4%">
      >
        <VStack>
        <Flex w="100%" alignItems="center" justifyContent="center" flexDirection="column"
        px={["20px", "20px", "40px", "80px"]} pt="4%">
        
        <Text as="b" fontSize={[25, 25, 30, 60]} textAlign="center" fontFamily="Lexend Deca" mb="20px">
        On the Topic of Discord Bots
        </Text>
        <Text fontSize={[15, 15, 20, 20]} as="i" pl="30px" textAlign="center" fontFamily="Newsreader">
            A Technical Description for New Programmers or Curious Hobbyists
        </Text>
        </Flex>
        <VStack w="100%" h="100%" spacing="0px" maxW="750px">
            <Image src="/images/description/K2SOtalk.jpg" alt="K2SO" borderRadius="20px" my="30px"/>
            {/* Intro */}
            <Box bg={useColorModeValue("blue.300", "gray.600")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px" px="10px">
            <HStack spacing="24px" w="100%">
              <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" pl="25px" textAlign={["center", "left"]} fontFamily="Lexend Deca">
            Introduction
            </Text>
            </HStack>
            
            <Text fontSize={[15, 15, 20, 20]} pl="30px" fontFamily="Newsreader" sx={{ "text-indent": "30px" }}>
              This is a description for novice programmers or non-programmers, about <b>how </b>bots
              (specifically discord bots) work. This is <b>not</b> a
              guide on how to make such a bot (you can find such a guide <u><a href="https://www.writebots.com/how-to-make-a-discord-bot/" target="_blank">here</a></u>.)
              Instead, we will discuss what a bot is, what is does, and the underlying mechanics behind how it works.
              By the end of this description, you should have an understanding of how bots communicate with third parties
              (such as Discord) and the benefits associated with this type of network.
            </Text>
          </Box>

          <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px" px="10px">
            <HStack spacing="24px" w="100%">
              <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" pl="25px" textAlign={["center", "left"]} fontFamily="Lexend Deca">
            What is Discord?
            </Text>
            <Image src="/images/description/discord.webp" alt="DiscordLogo" borderRadius="20px" w={["40px", "50px", "80px", "80px"]}/>
            </HStack>
            
            <Text fontSize={[15, 15, 20, 20]} pl="30px" fontFamily="Newsreader" sx={{ "text-indent": "30px" }}>
                Discord is a social media platform that was released in 2015. It was originally marketed as a way to play games cooperatively.
                Since then, it has broadened its appeal and is widely used by all sorts of people, ranging from study groups to book clubs 
                to programming teams. (Pierce) There are a few complexities to Discord, but mostly we are concerned with Discord's text channels,
                which is the primary way to interact with Discord bots.
            </Text>
            <Image borderRadius="10px" src="/images/description/DiscordExample.png" alt="Discord Example"/>
            <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 1</Text>: <Text fontFamily="Newsreader" as="i">Example of a text conversation</Text>
            </Text>
          </Box>

          <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px" px="10px">
            <HStack spacing="24px" w="100%">
              <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" pl="25px" textAlign={["center", "left"]} fontFamily="Lexend Deca">
            What do Discord Bots Do? 🤖
            </Text>
            {/* <Image src="/images/description/discord.webp" alt="DiscordLogo" borderRadius="20px" w={["40px", "50px", "80px", "80px"]}/> */}
            </HStack>
            
            <Text fontSize={[15, 15, 20, 20]} pl="30px" fontFamily="Newsreader" sx={{ "text-indent": "30px" }}>
                Discord bots have a variety of functions. Some bots are built with the purpose of running their own games,
                like trivia bots or the popular PokeCord bot. Others fill administrative functions, such as language moderating or muting
                users on command. There are bots that can play music off of YouTube or Spotify, and bots that perform other helpful functions.
            </Text>
            <Image borderRadius="10px" src="/images/description/DiscordBotExample.png" alt="Discord Bot Example"/>
            <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 2</Text>: <Text fontFamily="Newsreader" as="i">Example of a bot interaction</Text>
            </Text>
          </Box>

          <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px" px="10px">
            <HStack spacing="24px" w="100%">
            <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" pl="25px" textAlign={["center", "left"]} fontFamily="Lexend Deca">
            Pieces of the Puzzle 🧩
            </Text>
            </HStack>
            <Stack direction={["column", "row"]}>
            <Box bg={useColorModeValue("blue.300", "gray.600")} minW="40%" borderRadius="10px" my="30px" border="3px solid" py="5px" px="10px">
            <Text as="b" fontSize={[21, 21, 25, 25]} px="8px"pt="5px" textAlign="center" fontFamily="Lexend Deca">
              Client-Server Model</Text> 
              <Image borderRadius="10px" src="/images/description/ClientServerModel.png" alt="Client-Server Model"/>
              <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 3</Text>: <Text fontFamily="Newsreader" as="i">The Client-Server Model</Text>
            </Text>
            </Box>
            <Text fontSize={[15, 15, 20, 20]} fontFamily="Newsreader" p="10px">
                All Discord bots (and almost all bots in general) communicate according to the same model.
                <br/><br/>
                This model, known as the Client-Server Model (Figure 3) is a relationship between two computers. The first computer, known as the <b>client</b>,
                makes requests to the second computer, (the <b>server</b>). The server responds based on what 
                was requested. (Dixit)
            </Text> 
            </Stack>
            
            <Divider my="10px" />
            <HStack>
            <Text fontSize={[15, 15, 20, 20]} fontFamily="Newsreader" px="10px" py="18px" sx={{ "text-indent": "30px" }}>
                Your device always acts as a client in the client-server relationship.
                When you send a message or use a search engine, you are telling your 
                device to create a request. The appropriate server will respond to 
                your request and provide the pertinent data. 
            </Text> 
            <VStack>
            <Image borderRadius="10px" src="/images/description/laptop.webp" alt="Client"/>
            <Text as="b" fontSize={[21, 21, 25, 25]} px="8px"pt="5px" textAlign="center" fontFamily="Lexend Deca">Device</Text> 
            </VStack>           
            </HStack>

            <Divider my="10px" />
            <HStack>
            <VStack>
            <Image borderRadius="10px" src="/images/description/discord.webp" alt="Discord"/>
            <Text as="b" fontSize={[21, 21, 25, 25]} px="8px"pt="5px" textAlign="center" fontFamily="Lexend Deca">Discord</Text> 
            </VStack>
            <Text fontSize={[15, 15, 20, 20]} fontFamily="Newsreader" sx={{ "text-indent": "30px" }}>
                Discord always acts as the server in the client-server model.
                Clients (like your device) will send an 'update' request, and
                Discord will send the data (for example, new messages) to the Discord app 
                on your device, which will decipher the data and display it to you. 
            </Text>            
            </HStack>

            <Divider my="10px" />
            <HStack>
            <Text fontSize={[15, 15, 20, 20]} fontFamily="Newsreader" sx={{ "text-indent": "30px" }}>
                The Hosting Service is the computer where your bot lives, and is 
                the most complex system. Although you can host a bot on your device,
                most bots are hosted on an external
                server that runs 24/7. In this regard, the hosting service acts as 
                a server that you can access from your device.  
<br/>
                On the other hand, the hosting service acts as a client to Discord.
                The hosting service makes requests to Discord, and Discord responds
                to those requests. For this reason, a bot is sometimes called 
                an <i>automated client</i>.
            </Text>  
            <VStack>
            <Image borderRadius="10px" src="/images/description/server.png" alt="Hosting Service"/>
            <Text as="b" fontSize={[21, 21, 25, 25]} px="8px"pt="5px" textAlign="center" fontFamily="Lexend Deca">Hosting Service</Text> 
            </VStack>          
            </HStack>
          </Box>

          <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px" px="10px">
            <HStack spacing="24px" w="100%">
              <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" pl={["10px", "10px", "25px", "25px"]} textAlign="left" fontFamily="Lexend Deca">
            The Big Picture 🖼️
            </Text>
            </HStack>
            
            <Text fontSize={[15, 15, 20, 20]} pl="30px" fontFamily="Newsreader" sx={{ "text-indent": "30px" }}>
                Client-Server Relationships are the backbone of almost all digital communications. Figure 4 
                shows a simple model containing three systems.
            </Text>
            <Image borderRadius="10px" src="/images/description/DescriptionCombined.png" alt="Combined Representation"/>
            <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 4 </Text> (above): <Text fontFamily="Newsreader" as="i">A simple communication network</Text>
            </Text>
            <Text fontSize={[15, 15, 20, 20]} pl="30px" mt="30px" fontFamily="Newsreader">
                In reality, bots can communicate with dozens of such systems.
            </Text>
            <Image borderRadius="10px" src="/images/description/DescriptionExpanded.png" alt="Expanded Representation"/>
            <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 5</Text>: <Text fontFamily="Newsreader" as="i">A realistic communication network</Text>
            </Text>
          </Box>

          <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px" px="10px">
            <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" pl="25px" textAlign={["center", "left"]} fontFamily="Lexend Deca">
              Application ⚙️
            </Text>
            <VStack>
            <Image borderRadius="10px" src="/images/description/DiscordMathExample.png" alt="Combined Representation"/>
            <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 6 </Text>: <Text fontFamily="Newsreader" as="i">A Discord bot helping with math</Text>
            </Text>
            <Text fontSize={[15, 15, 20, 20]} pl="30px" fontFamily="Newsreader" sx={{ "text-indent": "30px" }}>
                Let's break this down. George, the user, sends a message in the discord channel.
                The Discord app on George's computer sends a request to the Discord server, asking
                to post a new message. Discord responds to the request by updating its servers.
                When IG-88 (the bot), sends an update request to the Discord server, the
                server lets IG-88 know that George posted a message.
              <br/><br/>
                IG-88 looks at the content of the new message, and determines that this message is a 
                command. He breaks down the command into simple components, and calculates
                the answer. Then, he sends a request to the Discord servers to post his own message.
                Discord accepts the request and updates its servers. Then, on George's next update
                request, Discord will load IG-88's message on George's computer.
            </Text>
            </VStack>
          </Box>

          <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px" px="10px">
            <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" pl="25px" textAlign={["center", "left"]} fontFamily="Lexend Deca">
            Recap 📚
            </Text>
            <VStack>
            <Text fontSize={[15, 15, 20, 20]} pl="30px" fontFamily="Newsreader" sx={{ "text-indent": "30px" }}>
                Almost all network services rely on client-server communications. A 
                client makes a request, and the server will respond appropriately. Setting up an
                automated client (a bot) can centralize a user experience and boost productivity.
                <br/><br/>
                Client-Server communications describe the mechanisms by which computers communicate.
                If you're still interested in digital communications, I encourage you to read up on 
                APIs (Application Programming Interfaces). APIs describe the <i>languages</i> by which computers
                communicate. Learn More in the Sources popup!
            </Text>
            <Button bg={useColorModeValue("blue.300","gray.800")} onClick={() => {
              sourcesModal.onOpen()
            }}> 
            Sources
            </Button>

            <Modal isOpen={sourcesModal.isOpen} onClose={sourcesModal.onClose}>
              <ModalOverlay />
              <ModalContent> 
                <ModalHeader>
                  Sources
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>     
                <Tabs isFitted variant="enclosed">
                  <TabList mb="1em">
                    <Tab>MLA</Tab>
                    <Tab>URLs</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                    <Text color="black" pl="30px" sx={{ "text-indent": "-30px" }}>
                    “API Docs for Bots and Developers.” Discord Developer Portal, Discord, discord.com/developers/docs/intro. 
         <br/><br/></Text><Text color="black" pl="30px" sx={{ "text-indent": "-30px" }}>
Davis, Thomas. “What Is An API and How Does It Work?” Medium, Towards Data Science, 31 Dec. 2019, towardsdatascience.com/what-is-an-api-and-how-does-it-work-1dccd7a8219e.
         <br/><br/></Text><Text color="black" pl="30px" sx={{ "text-indent": "-30px" }}>
            Dixit, Shubhang. “Beginners Guide to Client Server Communication.” Medium, Medium, 30 July 2019, medium.com/@subhangdxt/beginners-guide-to-client-server-communication-8099cf0ac3af. 
         <br/><br/></Text><Text color="black" pl="30px" sx={{ "text-indent": "-30px" }}>
            Pierce, David. “How Discord (Somewhat Accidentally) Invented the Future of the Internet.” Protocol, Protocol - The People, Power and Politics of Tech, 1 Nov. 2020, www.protocol.com/discord. 
         <br/><br/></Text><Text color="black" pl="30px" sx={{ "text-indent": "-30px" }}>
            “What Are Bots? How Do Chatbots Work?” BotsCrew, 22 Mar. 2021, botscrew.com/blog/what-are-bots/.
                    </Text>
                    </TabPanel>
                    <TabPanel>
                    <Text color="blue.500">
                        -	<a target="_blank" href="https://discord.com/developers/docs/intro">Introduction to Discord Developer Documentation </a>
              <br/><br/>-	<a target="_blank" href="https://towardsdatascience.com/what-is-an-api-and-how-does-it-work-1dccd7a8219e">What is an API and how does it work?</a>
              <br/><br/>-	<a target="_blank" href="https://medium.com/@subhangdxt/beginners-guide-to-client-server-communication-8099cf0ac3af">Beginner's Guide to Client Server Communication</a>
              <br/><br/>-	<a target="_blank" href="https://www.protocol.com/discord">How Discord (somewhat accidentally) invented the future of the internet </a>
              <br/><br/>-	<a target="_blank" href="https://botscrew.com/blog/what-are-bots/">What are Bots? How Do Chatbots Work?</a>

                    </Text>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
                
                </ModalBody>
              </ModalContent>
            </Modal>
            </VStack>
          </Box>
          <Text as="b" fontSize={[25, 25, 30, 40]} pt="10px" textAlign="center" fontFamily="Lexend Deca" w="100%">
          🎉🎉🎉
          </Text>

          <Box w="100%">
          <Link passHref href="../blog">
          <Button as="a" variant="ghost" leftIcon={<ArrowBackIcon/>} ml="20px">
            Back to Blog
          </Button>
          </Link>
        </Box>
        </VStack>
        </VStack>
        <Footer text="Made by Andrew Deick"/>
      </Flex>
      
  </div>
)};

export default BotDescription;
