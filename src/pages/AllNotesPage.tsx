import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import { FiTag } from 'react-icons/fi';

export const AllNotesPage = () => {
  return (
    <div className="flex h-full">
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
              <p className="bg-neutral-200 rounded-md inline-flex px-2 py-0.5 text-sm">Praise</p>
              <p className="bg-neutral-200 rounded-md inline-flex px-2 py-0.5 text-sm">wubalubabadub</p>
              <p className="bg-neutral-200 rounded-md inline-flex px-2 py-0.5 text-sm">Hope</p>
            </div>
            <p className="text-neutral-950 font-thin text-sm tracking-wide mb-2">08 June 2025</p>
          </div>
          <div className="border-b border-b-neutral-200 cursor-pointer hover:bg-neutral-200 rounded-md space-y-2.5 px-2 pt-1.5">
            <h2 className="font-semibold tracking-wide text-lg leading-tight">React Performance Optimization</h2>
            <div>
              <p className="bg-neutral-200 rounded-md inline-flex px-2 py-0.5 text-sm">Hope</p>
            </div>
            <p className="text-neutral-950 font-thin text-sm tracking-wide mb-2">08 June 2025</p>
          </div>
        </div>
      </div>
      <div className="w-[457px] border-r border-r-neutral-200">
        <div className="border-b border-b-neutral-200 mx-8">
          <h1>Test</h1>
          <div className="flex items-center">
            <FiTag />
            <p>Tags</p>
            <p>Praise</p>
          </div>
          <div className="flex items-center">
            <GoClockFill /> <p>Last Edited</p>
            <p>08 June 2025 </p>
          </div>
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
  );
};
