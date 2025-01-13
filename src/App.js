import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Coverpage from'./components/Coverpage';
import Vision from './components/Vision';
import Aboutus from './components/Aboutus';
import Repository from './components/Repository';
import Events from './components/Events';
import Next_event from './components/Next_Event';
import Announcements from './components/Announcements';
import  Initiatives from './components/Initiatives';
import Thoughts from './components/Thoughts';
import Footer from './components/Footer';

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
                            <Repository/>
                            <Events/>
                            <Next_event/>
                            <Announcements/>
                            <Initiatives/>
                            <Thoughts/>
                            <Footer/>
                
                    </div>
                } />
               

               

            </Routes>
            
        </Router>
        </>
  );
}

export default App;
