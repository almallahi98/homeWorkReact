import React from 'react'
import { Grid, GridItem, Img } from '@chakra-ui/react';


function GridByChakra() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem w="100%" minH={"250px"} bg="blue.500">
        <Img w={"95%"} h={"95%"} mx={"2.5%"} my={"2.5%"}
         src={window.location.origin+'/images/img1.png'}></Img>
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
}

export default GridByChakra