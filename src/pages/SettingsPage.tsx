import { Navbar, TagSidebar } from '../components';

export const SettingsPage = () => {
  return (
    <div className="flex">
      <TagSidebar />
      <div>
        <Navbar title="Settings" />
      </div>
    </div>
  );
};
