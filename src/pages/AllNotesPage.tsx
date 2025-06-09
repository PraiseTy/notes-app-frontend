import { FaPlus } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import { FiTag } from 'react-icons/fi';

export const AllNotesPage = () => {
  return (
    <div className="flex h-full">
      <div className="w-[290px] border-r border-r-neutral-200 h-full">
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
      <div className="w-[587px] flex flex-col h-full ">
        <div className="border-b border-b-neutral-200 mx-5 space-y-2 pb-4">
          <input
            type="text"
            placeholder="Enter a title..."
            className=" text-2xl font-semibold pt-3.5 mb-3 focus:outline-none focus:border-b focus:border-b-neutral-200 w-full"
          />
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <FiTag size={22} />
              <p className="font-light">Tags</p>
            </div>
            <input
              type="text"
              placeholder="Add tags separated by commas (e.g. Work, Travel)"
              className="text-sm pt-3.5 mb-3 focus:outline-none focus:border-b focus:border-b-neutral-200 w-full"
            />
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center gap-2">
              <GoClockFill size={22} /> <p className="font-light">Last Edited</p>
            </div>
            <p className="tracking-wider text-neutral-500 text-sm">Not yet saved</p>
          </div>
        </div>
        <div className="flex flex-col h-full max-w-4xl w-full mx-auto p-2 ">
          <div className="flex-grow w-[95%] h-[90%] border-b border-b-neutral-200 mx-auto">
            <textarea
              className="w-full h-[90%] p-4 mt-3 resize-none rounded-lg focus:outline-none focus:border focus:border-neutral-200 placeholder:text-sm"
              placeholder="Start typing your note here..."
            ></textarea>
          </div>
          <div className="w-[95%] flex  gap-2 mt-6 mb-4 mx-auto">
            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg cursor-pointer hover:bg-blue-700/80">
              Save Note
            </button>
            <button className="px-4 py-2 bg-gray-100 text-black rounded-lg cursor-pointer hover:bg-gray-200">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 border-l border-l-neutral-200"></div>
    </div>
  );
};
