import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Spacer,
  Divider,  
} from "@chakra-ui/react";




export default function Card(props) {
  
  return (
    
    <Center py={6}>
      <Box
        maxW={"445px"}
        minH={"270px"}
        maxH={"300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        pb={0}
        overflow={"hidden"}
      >
        <Stack direction="row" spacing={2}>
          <Box w={"70%"}>
            <Center>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {props.title}
              </Heading>
            </Center>
          </Box>
          <Box
            h={"80px"}
            w={"30%"}
            bg={"white.100"}
            mt={-6}
            mx={0}
            mb={6}
            pos={"relative"}
          >
            <img src={props.imgHolder} alt="" layout={"fill"} />
          </Box>
        </Stack>

        <Stack>
          <Text color={"gray.500"}>{props.text}</Text>
        </Stack>
        {/* <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}

<Divider mt={5} orientation='horizontal' />
        <Flex mb={-10}>
        
          <Box p="4">
          <Text color={"gray.500"}>التفاصيل</Text>  
          </Box>
          <Spacer />
          <Box p="4">

          <Text color={()=>{if(props.flag===true)
            {
              return "green.500"
              }
              else
              {
                return "gray.500"
                }}}>{props.status}</Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
