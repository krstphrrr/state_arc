import './App.css';
import Navbar from '../Nav/navbar'
import {Flex} from '@chakra-ui/react'

import MyBox from '../box/soloBox';




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
 
      <Navbar></Navbar>
    
        <Flex justify='center' align='center' w='100%' h='93vh'>
              {/* <Component {...pageProps} /> */}
              
              <MyBox infoCaja={funcionUno}></MyBox>
        </Flex>

    </div>
  );
}

export default App;
