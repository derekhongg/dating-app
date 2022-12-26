import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useCookies} from 'react-cookie'

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
