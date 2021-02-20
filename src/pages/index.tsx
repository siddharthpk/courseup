import React from "react"
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"
import { Course } from "../components/course/course"
import { CourseCard } from "../components/course/courseCard"
import { Header } from "../components/header/header"
import { Section } from "../components/schedule/section"

export const Home = () => {
  return (
    <Box>
      <Header />
      <Box minHeight="100vh" maxWidth="100%" pt="5vh">
        <Grid
          minHeight="94vh"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem colSpan={1} bg="whiteAlpha.600" p="4" overflow="auto" height="95vh">
            <Heading as="h2" size="lg">Sidebar</Heading>
            {/* TODO: remove, it's a placeholder till we populate with actual content */}
            {[...Array(15)].map((x, i) =>
              <CourseCard key={i} />
            )}
          </GridItem>
          <GridItem colSpan={4} borderLeft="1px solid gray" p="4" overflow="auto" height="95vh">
            <Heading as="h3" size="lg">Main Content</Heading>
            <Course />
            {[...Array(10)].map((x, i) =>
              <Section key={i} />
            )}
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}