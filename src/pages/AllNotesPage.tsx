import { Navbar, TagSidebar } from '../components';

export const AllNotesPage = () => {
  return (
    <div className="w-full flex">
      <TagSidebar />
      <div>
        <Navbar title="All Notes" />
      </div>
    </div>
  );
};
