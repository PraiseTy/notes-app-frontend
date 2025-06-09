import { Navbar, TagSidebar } from '../components';
import { AllNotesPage } from './AllNotesPage.tsx';
import { useLocation } from 'react-router-dom';

export const ArchivedNotesPage = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <div className="w-full flex h-full">
      <TagSidebar />
      <div className="flex-1">
        <Navbar title={activeTab === '/' ? 'All Notes' : 'Archived Notes'} />
        {activeTab === '/' && <AllNotesPage />}
        {activeTab === '/archivedNotes' && (
          <div className="flex h-full">
            <div className="w-1/3 border-r border-r-neutral-200"></div>
            <div className="w-1/3 border-r border-r-neutral-200"></div>
            <div className="w-1/3"></div>
          </div>
        )}
      </div>
    </div>
  );
};
