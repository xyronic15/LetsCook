import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, About } from "./components";
import Home from "./views/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </Router>
      {/* <About />
      <Footer /> */}
    </div>
  );
}

export default App;
