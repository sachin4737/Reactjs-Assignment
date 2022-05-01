import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { ScreenOne, ScreenTwo } from './Components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenOne />} />
          <Route path="/home" element={<ScreenTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
