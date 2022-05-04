import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// === Components ===
import Header from "./components/Header/Header";
// === Pages ===
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
