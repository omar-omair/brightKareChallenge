import './style/App.css'
import { useUserStore } from './indexes/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard'

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App
