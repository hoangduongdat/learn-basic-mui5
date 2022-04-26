import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import SearchAppBar from './components/TopBar';
import Home from "./pages/Home";
import TourDetail from './pages/TourDetail';


function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<TourDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
