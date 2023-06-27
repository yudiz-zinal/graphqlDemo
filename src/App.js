import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import InnerComponent from "./components/InnerComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/inner/:code" element={<InnerComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
