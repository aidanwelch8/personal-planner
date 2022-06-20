import './App.css';
import Sidebar from "./Components/Sidebar"
import Topbar from "./Components/Topbar"
import HomeDashboard from './Components/HomeDashboard';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div id="Main">
        <Topbar />
        <HomeDashboard />
      </div>
    </div>
  );
}

export default App;
