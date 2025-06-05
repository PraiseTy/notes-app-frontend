import { MdArrowForwardIos } from 'react-icons/md';
import type { IconType } from 'react-icons';

interface TabsProps {
  svg: IconType;
  title: string;
}
export const TabSection = ({ svg: Icon, title }: TabsProps) => {
  return (
    <div className="flex items-center mx-auto text-sm cursor-pointer  gap-x-16">
      <div className="flex flex-row items-center  space-x-1">
        <Icon size={24} />
        <p>{title}</p>
      </div>
      <MdArrowForwardIos size={15} />
    </div>
  );
};
