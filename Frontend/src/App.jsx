import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import PaymentSuccess from './PaymentSuccess';


function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/PaymentSuccess' element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
