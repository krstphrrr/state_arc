import './App.css';
import Navbar from '../Nav/navbar'
import {Flex} from '@chakra-ui/react'

import MyBox from '../box/soloBox';
import MyProvider from '../Providers/Provider'



function App({Component, pageProps}) {
  const funcionUno = (datosDeLaCaja) =>{
    const datos = {
      ...datosDeLaCaja,
      algo: "HM"
    }
    console.log(datos)
  }
  return (
    <div className="App">
    {/* <MyProvider > */}
      <Navbar></Navbar>
        <Flex justify='center' align='center' w='100%' h='93vh'>
              {/* <Component {...pageProps} /> */}
              
              <MyBox infoCaja={funcionUno}></MyBox>
        </Flex>
    {/* </MyProvider> */}
    </div>
  );
}

export default App;
