import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
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
        
            <Routes>
               
                <Route path="/" element={
                        
                    <div>
                            <Navbar/>
                            <Coverpage/>
                            <Vision/>
                            <Aboutus/>
                            <Initiatives/>
                            <Repository/>
                            <Events/>
                            <NextEvent/>
                            <Announcements/>                          
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
