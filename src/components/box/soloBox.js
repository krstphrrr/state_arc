import {
	Flex,
  Box,
	ThemeProvider,
	CSSReset,
	ColorModeProvider,
  useColorMode
} from '@chakra-ui/react';
import { useState} from 'react'


function MyBox(props){
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' };
  const [ttext, setTtext] = useState("original text")
  let testObj = {
    item1:"msg1"
  }
  const testFun =() =>{
    setTtext(testObj.item1)
    props.infoCaja(testObj.item1)
  }
  // props.infoCaja()
  return(

        <Flex>
          <Box
            w='400px'
            rounded='20px'
            overflow='hidden'
            boxShadow='sm'
            onDoubleClick={testFun}
            bg={bgColor[colorMode]}>
            {ttext}
          </Box>
        </Flex>

  )
}

export default MyBox