import { MdArrowForwardIos } from 'react-icons/md';
import type { IconType } from 'react-icons';

interface TabsProps {
  svg: IconType;
  title: string;
  isActive: boolean;
  onClick: () => void;
}
export const TabSection = ({ svg: Icon, title, isActive, onClick }: TabsProps) => {
  return (
    <div
      className={`flex justify-between items-center mx-auto text-sm cursor-pointer gap-x-16 ${isActive ? 'bg-neutral-200' : 'bg-neutral-0'} px-3 py-2 rounded-lg`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center  space-x-2">
        <Icon size={24} className={`${isActive ? 'text-blue-500' : 'text-text-100'}`} />
        <p>{title}</p>
      </div>
      <MdArrowForwardIos size={15} className={`${isActive ? 'visible' : 'invisible'}`} />
    </div>
  );
};
