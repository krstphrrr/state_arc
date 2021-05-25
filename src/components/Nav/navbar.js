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
import React, {useEffect, useState, useReducer, useContext} from 'react'


const ACTIONS = {
  APARECER: "aparecer",
  BORRAR:"borrar"
}

const reducer = (state,action) => {
  switch(action.type){
    case ACTIONS.APARECER:
      return {val: "Tile Change 2"}
    case ACTIONS.BORRAR:
      return {val: ""}
    default:
      return state
  }

}

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'gray.300', dark: 'gray.600' };
	const textColor = { light: 'black', dark: 'gray.100' };

  // const ctx = useContext(testContext)
  const [mainState, dispatch] = useReducer(reducer, {
    val:"default value"
  })

  const router = useRouter()
  

  useEffect(()=>{
    const timerID = setTimeout(()=>{
      console.log("small wait")
    },500)
    return ()=>{
      console.log("CLEANUP")
      clearTimeout(timerID)
    }

  },[mainState])

  const clicky=()=>{
    dispatch({type:ACTIONS.APARECER})
  }

  const secondClick =()=>{
    dispatch({type:ACTIONS.BORRAR})
    
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
              <a onClick={clicky}>Tile Change 1</a>
            </Box>

          <Box position='relative'>
            <a onClick={secondClick}>{mainState.val}</a>
          </Box>
          <Box position='relative'>
            <a>Tile Change 3</a>
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
