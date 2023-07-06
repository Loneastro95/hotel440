import './App.css';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/" element={ <LogIn/> } />
        <Route path="signUp" element={ <SignUp/> } />
      </Routes>

    </div>
  );
}

export default App;
