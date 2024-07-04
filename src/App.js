import './App.css';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm';
import About from './components/About1'

// let name="darshan";
function App() {
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
 
<Navbar title="TextUtils"  about="Aboutus"/>
<div className="container mx-10">
    <TextForm heading="Enter the text to analise below"/>
</div>
{/* <About/> */}
 </>
  );
}

export default App;
