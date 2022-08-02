import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Payment"
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Payment />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
