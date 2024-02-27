import './App.css'
import Header from './components/Header';
import Title from './components/Title';
import Labels from './components/Labels';
import Footer from './components/Footer';
import Card from './components/Card';
import { FaChevronDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import SignUp from './components/SignUp';
function App() {


  return (
    <div className='bg-[#FBFCFD]'>
      <Header />
      <Title />
   
       <Labels  marks="9.8" tag="Exceptional" hg="256" title="Top Choice">
        <p><span className='font-bold'>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool,
          Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
            <p className='font-bold'>Main Highlights</p>
        <p className='pl-8'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
          an extensive library of widgets and apps, and detailed step-by-step guides.</p>
       <p className='mt-10 text-blue-600 flex'>show more <FaChevronDown className='mt-2' /> </p> 
      </Labels> 
      
       <Labels marks="9.5" tag="Excellent"  hg="256" title="Best Value">
        <p><span className='font-bold'>SiteCraft 68-Inch Ultimate Web Design Studio</span>- Advanced Site Creation Toolkit,
          Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
        <p className='font-bold'>Main Highlights</p>
        <p className='pl-8'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements,
          SEO optimization tools, and e-commerce integrations.</p>
        <p className='mt-10 text-blue-600 flex'>show more <FaChevronDown className='mt-2' /> </p>
      </Labels>

      <Labels  marks="9.3" tag="Exceptional"  hg="256">
        <p><span className='font-bold'>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool,
          Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
        <p className='font-bold'>Main Highlights</p>
        <p className='pl-8'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
          an extensive library of widgets and apps, and detailed step-by-step guides.</p>
        <p className='mt-10 text-blue-600 flex'>show more <FaChevronDown className='mt-2' /> </p>
      </Labels>
      <Labels marks="9.1" tag="VeryGood" className="mt-20" hg="350" >
      <p><span className='font-bold'> CDK Resposive Builder:</span>- An extensive library of widgets and apps,
       and detailed step-by-step guides</p>
       <button className='bg-gray-300 rounded-md px-1 text-blue-700'>20% off</button>
       <p className='font-bold'>Main Highlights</p> 
       <p className='pl-8 '>
        <ul className='bg-orange-200 py-3 rounded-md'>
          <li className='mb-1'>
          <button className='bg-slate-100 rounded-md px-2 text-blue-700'>9.9</button>building responsive
          </li>
          <li className='mb-1'>
          <button className='bg-slate-100 rounded-md px-2 text-blue-700'>9.9</button>Cools
          </li>
          <li className=''>
          <button className='bg-slate-100 rounded-md px-2 text-blue-700'>9.9</button>Docs
          </li>
        </ul>
       </p>
       <div>
        <p>Why we love it?</p>
        <span className='flex'><TiTick className='mt-1' /> Documentation</span>
        <span className='flex'><TiTick className='mt-1' /> Easy Use</span>
        <span className='flex'><TiTick className='mt-1' /> Out of box</span>
       </div>
       <p className='mt-10 text-blue-600 flex'>show more <FaChevronDown className='mt-2' /> </p>
       </Labels>
      


      <p className='max-w-5xl mt-8 py-3.5 m-auto text-3xl'>Related deals you might like for</p>
      <div className='flex max-w-5xl justify-center items-center py-3.5 m-auto  md:flex-row flex-col'>
        <Card />
        <Card />
        <Card />
      </div>
     <SignUp /> 
      <Footer />
    </div>
  )
}

export default App;
