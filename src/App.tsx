import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MacbookPro } from './screens/MacbookPro/MacbookPro';
import { Pricing } from './screens/Pricing/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MacbookPro />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App; 