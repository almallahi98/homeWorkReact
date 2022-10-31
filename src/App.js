import './App.css';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import ModelLogin from './component/body/ModelLogin';
import GridByChakra from './component/body/GridByChakra'

//import Body from './component/body/Body';
import BodyF from './component/body/BodyF';

function App() {
 
  return (
    <>
    <NavBar/>
    <BodyF/>
    {/* <GridByChakra/> */}
    <Footer/>
    <ModelLogin/>
    </>
  );
}

export default App;
