import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from "./UserPage";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Router>
    <Routes>
      <Route path="/" element={ <App />} />
      <Route path="user/:username" element={ <UserPage />} />
    </Routes>
  </Router>
)
