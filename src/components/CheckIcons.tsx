import { MdCheck } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

export const CheckIcons = () => {
  return (
    <div className="flex space-x-2 text-white">
      <MdCheck size={24} className="bg-blue-700 rounded-sm cursor-pointer" />
      <IoMdClose size={24} className="bg-red-500 rounded-sm cursor-pointer" />
    </div>
  );
};
