import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm';
// import About from './components/About1'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About1'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// let name="darshan";
function App() {
  const  [mode, setmode] = useState('light')
  const toggle =()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#0f032f'
      showAlert("the dark made is enables","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
      
    }
  }

  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert(
      {
        msg: message,
        type: type,
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  return (
 <>
 {/* <h1>i am {name}</h1>
 <nav>
  <li>home</li>
  <li>about</li>
  <li>contact</li>
 </nav>
 <div classNameName="container">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, magni. Maiores qui, consequuntur, vel temporibus vero ullam repellat earum saepe, blanditiis nobis porro quisquam dolorem corrupti magnam natus. Ipsum, minus!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur rem cupiditate voluptatem, nihil cum neque quisquam in, nesciunt a accusamus, quia voluptas quam sequi blanditiis ex minus tempora mollitia sint minima optio. Itaque.</p>

 </div> */}
 <Navbar title="TextUtils"  about="Aboutus" mode={mode} toggle={toggle}/>
 <Alert alert={alert}/>
 
 <div className="container mx-10">
  <Routes>
  {/* use the exact just before the path in Route because if we put the exact then the react will match exactly or else the react will match partially */}
    <Route exact path='/about' element={<About/>}/>
    
     <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analise below" mode={mode}/>}/>

  </Routes>
  </div>
  
 </>
  );
}

export default App;
