import logo from '../assets/logo.svg';
import logoDark from '../assets/logo-dark.png';
import { useThemeContext } from '../styles';
import { HomeTabsData, TabSection, TagData } from './Tabs';
import { FiTag } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

export const TagSidebar = () => {
  const { mode } = useThemeContext();
  const location = useLocation();
  const navigate = useNavigate();

  const activePath = location.pathname;
  const activeTab = activePath === '/archivedNotes' ? 'archive' : 'home';

  return (
    <div className="w-[277px] h-full py-[12px] px-[16px] border-r border-r-neutral-200 ">
      <div className="border-b border-b-neutral-200">
        <div className="mb-5">
          {mode === 'Light Mode' ? <img src={logo} alt="logo" /> : <img src={logoDark} alt="logo" />}
        </div>
        <div className="space-y-3 pb-5">
          {HomeTabsData.map((tab, index) => (
            <TabSection
              svg={tab.svg}
              title={tab.title}
              key={index}
              isActive={activeTab === tab.key}
              onClick={() => {
                if (tab.key === 'home') navigate('/');
                else if (tab.key === 'archive') navigate('/archivedNotes');
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 mt-1">Tags</p>
        <div className="px-4 mt-5">
          {TagData.map((tag, index) => (
            <div className="flex space-x-2 space-y-8" key={index}>
              <FiTag size={24} />
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
