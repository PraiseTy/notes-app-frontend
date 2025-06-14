import { Navbar, TagSidebar } from '../components';
import { ArchivedNotesPage } from './ArchivedNotesPage.tsx';
import { AllNotesPage } from './AllNotesPage.tsx';
import { useLocation } from 'react-router-dom';

export const HomePage = () => {
  const location = useLocation();

  const activeTab = location.pathname;

  return (
    <div className="w-full flex ">
      <TagSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title={activeTab === '/' ? 'All Notes' : 'Archived Notes'} />
        {activeTab === '/' && <AllNotesPage />}
        {activeTab === '/archivedNotes' && <ArchivedNotesPage />}
      </div>
    </div>
  );
};
