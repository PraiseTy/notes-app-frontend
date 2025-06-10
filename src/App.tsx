import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArchivedNotesPage, HomePage, SettingsPage, SignupPage, LoginPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/archivedNotes" element={<ArchivedNotesPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
