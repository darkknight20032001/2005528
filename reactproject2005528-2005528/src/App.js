import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrainsList from './Train Folders/TrainsList';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Your app goes here */}
        <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/trainslist" element={<TrainsList />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
