import {
    Modal,
    ModalOverlay,
    Button,
    Input,
    FormLabel,
    FormControl,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
  import { useDisclosure } from '@chakra-ui/react';
  import React, { useState } from 'react';
  

function ModelLogin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [User,setUser]=useState();
    const[Password,setPassword]=useState();
    const[Valid,setValid]=useState();
    const validatior=()=>{
        if(User.length!== 0 && Password.length!== 0)
        {
            setValid(true);
            console.log(Valid);
        }
        else
        {
            setValid(false);
            console.log(Password);
        }
    }


  
    return (
      <>
        <Button onClick={onOpen}>Sign in</Button>
      

  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>sign in</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>User Name</FormLabel>
                <Input type={"email"} onChange={(e)=>{setUser(e.target.value)}} ref={initialRef} placeholder='Email' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type={"password"} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' mr={3} onClick={validatior} >
                sign in
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            <p>{Valid}</p>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModelLogin