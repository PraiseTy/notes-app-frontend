import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArchivedNotesPage, HomePage, SettingsPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/archivedNotes" element={<ArchivedNotesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
