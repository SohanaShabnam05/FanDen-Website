import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/loginsignup/Signup'
import Login from './components/loginsignup/Login'
import PastEventPage from './components/pastevent/events'
import Aboutus from './components/aboutus';
import Footer from './components/footer';
import VerticalMode from './components/carousel';
import Event from './components/events/Event';
import Review from './components/Review';
import PreviousNextMethods from './components/pastevent/pastevents';

//import MainContent from './components/article/MainContent';
import News from "./components/news/news";


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
          <Route exact path='/' element={[
            <>
            
               
               <div style={{ marginTop:'80px', marginBottom: '50px' }}>
                <VerticalMode />
              </div>

              <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Event />
              </div>
              <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <PreviousNextMethods />
              </div>
              <div style={{ marginTop: '50px', marginBottom: '50px' }}>
              <Post />
              </div>
              <div style={{ marginTop: '', marginBottom: '50px' }}>
                <Review />
              </div>
              
            </>         
          ]} />
        <Route exact path='/events' element={<PastEventPage />} />
        <Route exact path='/aboutus' element={<Aboutus />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      
      </Routes>
      <Footer /> 
    </BrowserRouter>
 

    </>

  );
}

export default App;
