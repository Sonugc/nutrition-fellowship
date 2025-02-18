import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
// import CombinedCoverAbout from './components/CombinedCoverAbout';
import CoverpageLeft from './components/CoverpageLeft';
import CoverpageRight from './components/CoverpageRight';
import Coverpage from'./components/Coverpage';
import Vision from './components/Vision';
import Aboutus from './components/Aboutus';
import Repository from './components/Repository';
import Events from './components/Events';
import NextEvent from './components/NextEvent';
import Announcements from './components/Announcements';
import  Initiatives from './components/Initiatives';
import Thoughts from './components/Thoughts';
import Footer from './components/Footer';
import Profile from './documents/newsletter/Profile';
import Policy2025 from './documents/plans_and_policies/Policy2025';
import AIinNutrition from './documents/research/AIinNutrition';
import Jan17blog from './documents/blogs/Jan17blog';
import NRCintern from './documents/blogs/NRCintern';



function App() {
  return (
    <>
        <Router>
            <Topbar />
            <Navbar />
            
            <Routes>
               
                <Route path="/" element={
                        
                    <div>
                        <div className='flex'>
                            {/* <div className='basis-2/3'><CombinedCoverAbout/></div> */}
                            <div className='basis-2/3'>  <CoverpageLeft/></div>
                            <div className='basis-1/3'><CoverpageRight/></div>                                              
                        </div>
                            {/* <Aboutus/> */}
                            <Initiatives/>
                            <Repository/>
                            <Events/>
                            <div className='flex mt-5'>
                                <NextEvent/>
                                <Announcements/>
                            </div>
                                                      
                            <Thoughts/>
                            <Footer/>
                    </div>
                    
                } />
                <Route path="/profile" element={<Profile />} />
                <Route path='/policy2025' element={<Policy2025/>} />
                <Route path='/aiinnutrition' element={<AIinNutrition/>} />
                <Route path='/nfn2ndmeetblog' element={<Jan17blog/>} />
                <Route path='/nrcinternblog' element={<NRCintern/>} />


            </Routes>
            
        </Router>
        </>
  );
}

export default App;
