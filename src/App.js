import TextInput from './components/TextInput/TextInput';
import Menu from './components/menu/Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/menu/About';
import Home from './components/menu/Home';
import Contact from './components/menu/Contact';

function App() {
  return (
    <div>
      {/* <TextInput /> */}
      <BrowserRouter>
      <Menu />  
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
       
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
