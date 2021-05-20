import {
  Flex,
  Stack,
  PseudoBox,
  useColorMode,
  IconButton,
  Box,
  Image,
} from "@chakra-ui/react"
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import MContext from '../Providers/Provider'

const hmm = " grr"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'gray.300', dark: 'gray.600' };
	const textColor = { light: 'black', dark: 'gray.100' };


  // const [texty, setTexty ]= useState()
  const [currentState, setCurrentState] = useState({
    link1State: "state 1",
    link2State: "",
    link3State: "state 3"
  })

  const router = useRouter()
  useEffect(()=>{
    // console.log(texty)

    // console.log(router)
    // setTexty("OK")
  },[])

  const clicky=()=>{
    setCurrentState((prevState)=>{
      return {...prevState,link2State:"Link2"}
    })
    
    // setTexty("Link2");

    // console.log()
  }

  const secondClick =()=>{
    setCurrentState((prevState)=>{
      return {...prevState,link2State:""}
    })
    
  }
  return(
    <Flex
			w='100vw'
			bg={bgColor[colorMode]}
			align='center'
			color={textColor[colorMode]}
			justify='center'
			align='center'
			fontSize={['md', 'lg', 'xl', 'xl']}
			h='7vh'
			boxShadow='md'
			p={2}>
      <Flex w={['100vw', '100vw', '80vw', '80vw']} justify='space-around'>
        <Box>
					<Image h='6vh' src='.\JER_logo-wht.png' alt='Jornada' />
				</Box>
        <Stack
					spacing={8}
					color={textColor[colorMode]}
					justify='center'
					align='center'
					isInline>
            <Box>
              <a onClick={clicky}>Link1</a>
            </Box>

          <Box position='relative'>
            <a onClick={secondClick}>{currentState.link2State}</a>
          </Box>
          <Box position='relative'>
            <a>Link3</a>
          </Box>

        </Stack>
        <Box>
					<IconButton
						rounded='full'
						onClick={toggleColorMode}
						icon={colorMode === 'light' ? 'moon' : 'sun'}>
						Change Color Mode
					</IconButton>
				</Box>
      </Flex>

      </Flex>
  )
}
export default Navbar;
