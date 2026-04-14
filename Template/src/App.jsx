import { Routes, Route, Navigate } from "react-router-dom";
import Catalogue from "./Catalogue";
import Saved from "./Saved";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/catalogue" />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/saved" element={<Saved />} />
    </Routes>
  );
}

export default App;