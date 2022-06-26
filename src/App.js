import "./App.css"
import "./Components/Shell.css"
import Shell from "./Components/Shell"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Shell />
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
  );
}

export default App;
