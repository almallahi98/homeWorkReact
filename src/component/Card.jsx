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
    <Box p={6}>
      <Box
        minH={330}
        
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
                fontSize={[15,20,15,25]/*"2xl"*/}
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

        <Stack mt={"25px"}>
          <Text noOfLines={3} color={"gray.500"}>{props.text}</Text>
        </Stack>
        
      </Box>
      <Box position={'relative'} bottom={20}>
      <Divider mt={5} orientation="horizontal" />
        <Flex>
          <Box p="4">
            <Text color={"gray.500"}>التفاصيل</Text>
          </Box>
          <Spacer />
          <Box p="4">
            <Text
              color={() => {
                if (props.flag === true) {
                  return "green.500";
                } else {
                  return "gray.500";
                }
              }}
            >
              {props.status}
            </Text>
          </Box>
        </Flex>

      </Box>
      
    </Box>
  );
}
