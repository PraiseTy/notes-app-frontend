import { Body, Navbar, TagSidebar } from '../components';

export const SettingsPage = () => {
  return (
    <div className="flex h-screen">
      <TagSidebar />
      <div className="flex flex-col flex-grow">
        <Navbar title="Settings" />
        <div className="flex-grow">
          <Body />
        </div>
      </div>
    </div>
  );
};
