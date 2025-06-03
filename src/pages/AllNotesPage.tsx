import { Navbar, TagSidebar } from '../components';

export const AllNotesPage = () => {
  return (
    <div className="flex">
      <TagSidebar />
      <div>
        <Navbar />
      </div>
    </div>
  );
};
