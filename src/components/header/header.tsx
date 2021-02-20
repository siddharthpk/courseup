import { Box, Button, Flex, Heading, Input, Select } from "@chakra-ui/react"
import React from "react"

export const Header = () => {
  return (
    <Box as="header" width="100%" minHeight="5vh" bg="green.400" position="fixed" px="4" boxShadow="10px 0px 5px gray">
      <Flex justifyContent="space-between" alignItems="center" minHeight="5vh">
        <Box><Heading as="h1" size="md" color="white">Clockwork</Heading></Box>
        <Box minWidth="500px">
          <Input bg="white" placeholder="eg. CSC 100" />
        </Box>
        {/* TODO: implement properly */}
        <Flex>
          <Select bg="white" placeholder="Select Term" mx="2">
            <option value="option1">Fall 2020</option>
            <option value="option2">Winter 2021</option>
            <option value="option3">Summer 2021</option>
          </Select>
          {/* TODO: implement */}
          <Button mx="2">Login</Button>
        </Flex>
      </Flex>
    </Box>
  )
}