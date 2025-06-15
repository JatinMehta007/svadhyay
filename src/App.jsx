
import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import WelcomeScreen from './components/WelcomeScreen';
import { EmotionCheckin } from './components/EmotionCheckin';
import { AngerEmotion } from './components/AngerEmotion';
import { SadEmotion } from './components/SadEmotion';
import { NeutralEmotion } from './components/NeutralEmotion';
import { ContentEmotion } from './components/ContentEmotion';
import { HappytEmotion } from './components/HappyEmotion';
import { AweEmotion } from './components/AweEmotion';
import { InputEmotion } from './components/inputEmotion';
import { SelectEmotion } from './components/Select';
import EndScreen from './components/EndScreen';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomeScreen/>}> </Route>
      <Route path='/checkin' element={<EmotionCheckin></EmotionCheckin>} ></Route>
      <Route path='/anger' element={<AngerEmotion/>} ></Route>
      <Route path='/sad' element={<SadEmotion/>} ></Route>
      <Route path='/neutral' element={<NeutralEmotion/>} ></Route>
      <Route path='/content' element={<ContentEmotion/>} ></Route>
      <Route path='/happy' element={<HappytEmotion/>} ></Route>
      <Route path='/awe' element={<AweEmotion/>} ></Route>
      <Route path='/input' element={<InputEmotion/>} ></Route>
      <Route path='/select' element={<SelectEmotion/>} ></Route>
      <Route path='/end' element={<EndScreen/>} ></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
