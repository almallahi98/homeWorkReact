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
  import React from 'react';
  

function ModelLogin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
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
                <Input type={"email"} ref={initialRef} placeholder='Email' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type={"password"} placeholder='Password' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' mr={3}>
                sign in
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModelLogin