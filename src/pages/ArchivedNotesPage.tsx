import { CheckIcons, Navbar, TagSidebar } from '../components';
import { AllNotesPage } from './AllNotesPage.tsx';
import { useLocation } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';
import { GoClockFill } from 'react-icons/go';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';

export const ArchivedNotesPage = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <div className="w-full flex h-full">
      <TagSidebar />
      <div className="flex-1 flex flex-col min-h-0">
        <Navbar title={activeTab === '/' ? 'All Notes' : 'Archived Notes'} />
        {activeTab === '/' && <AllNotesPage />}
        {activeTab === '/archivedNotes' && (
          <div className="flex flex-1 min-h-0">
            <div className="w-[290px] border-r border-r-neutral-200">
              <div className="pt-5 flex justify-center mb-8">
                <button className="flex items-center text-white bg-blue-700 hover:bg-blue-700/80 cursor-pointer px-14 gap-2 py-3 rounded-lg">
                  <FaPlus /> <span className="text-sm pl-2">Create New Note</span>
                </button>
              </div>
              <div className="mx-6">
                <div className="border-b border-b-neutral-200 cursor-pointer hover:bg-neutral-200 rounded-md space-y-2.5 px-2 pt-1.5">
                  <h2 className="font-semibold tracking-wide text-lg leading-tight ">React Performance Optimization</h2>
                  <div className="flex flex-wrap gap-2">
                    <p className="bg-neutral-600 rounded-md inline-flex px-2 py-0.5 text-sm">Praise</p>
                    <p className="bg-neutral-600 rounded-md inline-flex px-2 py-0.5 text-sm">wubalubabadub</p>
                    <p className="bg-neutral-600 rounded-md inline-flex px-2 py-0.5 text-sm">Hope</p>
                  </div>
                  <p className="text-neutral-950 font-thin text-sm tracking-wide mb-2">08 June 2025</p>
                </div>
                <div className="border-b border-b-neutral-200 cursor-pointer hover:bg-neutral-200 rounded-md space-y-2.5 px-2 pt-1.5">
                  <h2 className="font-semibold tracking-wide text-lg leading-tight">React Performance Optimization</h2>
                  <div>
                    <p className="bg-neutral-600 rounded-md inline-flex px-2 py-0.5 text-sm">Hope</p>
                  </div>
                  <p className="text-neutral-950 font-thin text-sm tracking-wide mb-2">08 June 2025</p>
                </div>
              </div>
            </div>
            <div className="w-[457px] border-r border-r-neutral-200">
              <div className="border-b border-b-neutral-200 mx-8 space-y-2 pb-4">
                <h1 className="font-bold text-2xl tracking-wider py-3">Test</h1>
                <CheckIcons />
                <div className="flex items-center space-x-16">
                  <div className="flex items-center gap-2">
                    <FiTag size={22} />
                    <p className="font-light">Tags</p>
                  </div>
                  <p className="tracking-wider">Praise</p>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="flex items-center gap-2">
                    <GoClockFill size={22} /> <p className="font-light">Last Edited</p>
                  </div>
                  <p className="tracking-wider">08 June 2025 </p>
                </div>
              </div>
              <div className="mx-auto p-2  flex justify-center">
                <textarea
                  className="w-[90%] h-[500px] p-4 mt-3 border border-neutral-200 rounded-lg resize-none focus:outline-none focus:border-neutral-200 placeholder:text-sm"
                  placeholder="Start typing your note here..."
                ></textarea>
              </div>
            </div>
            <div className="flex-1 border-r border-r-neutral-200">
              <div className="flex flex-col items-start pt-5 space-y-3 w-full px-5">
                <button className="w-full text-sm cursor-pointer gap-2 flex items-center px-4 py-2 border border-neutral-200 rounded-md">
                  <RiInboxArchiveLine size={20} />
                  <span>Archive Note</span>
                </button>
                <button className="w-full text-sm cursor-pointer gap-2 flex items-center px-4 py-2 border border-neutral-200 rounded-md">
                  <MdDeleteOutline size={20} />
                  <span>Delete Note</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
