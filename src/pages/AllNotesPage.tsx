import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';

export const AllNotesPage = () => {
  return (
    <div className="flex h-full">
      <div className="w-[290px] border-r border-r-neutral-200"></div>
      <div className="w-[457px] border-r border-r-neutral-200"></div>
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
