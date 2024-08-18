import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WalletDetails from './pages/WalletDetails';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';

function App() {
  const [mnemonicCreated, setMnemonicCreated] = useState<boolean>(false);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setMnemonicCreated={setMnemonicCreated} />} />
        <Route
          path="/wallet-details"
          element={<ProtectedRoute element={<WalletDetails />} isAuthenticated={mnemonicCreated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
