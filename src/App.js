import { Home, SearchResults, SingleHotel } from './pages';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Filter } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel />} />
      <Route path="/hotels/:address" element={<SearchResults/>}/>
      {/* <Route path="/filters" element={<Filter/>} /> */}
    </Routes>    
  );
} 

export default App;
