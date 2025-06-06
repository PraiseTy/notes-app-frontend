import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AllNotesPage, SettingsPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllNotesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
