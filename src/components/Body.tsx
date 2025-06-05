import { TabsData, TabSection } from './Tabs';
import { MdLightMode } from 'react-icons/md';

export const Body = () => {
  return (
    <div className="flex flex-row h-full ">
      <div className="flex flex-col mx-2 border-r border-r-neutral-200 h-full max-w-[258px] w-1/2 space-y-7 py-8">
        {TabsData.map((tab, index) => (
          <TabSection svg={tab.svg} title={tab.title} key={index} />
        ))}
      </div>
      <div className=" w-1/2 pt-10 pl-8">
        <h1 className="font-semibold">Color Theme</h1>
        <p> Choose your color theme</p>
        <div className="pt-5">
          <div className="flex flex-row justify-between items-center border border-neutral-200 rounded-lg w-3/5 py-3.5 px-4">
            <div className="flex flex-row justify-between items-center">
              <div className="border border-neutral-200 rounded-xl mr-4 p-2">
                <MdLightMode size={24} />
              </div>
              <div className="leading-tight">
                <p className="font-bold">Light Mode</p>
                <p>Pick a clean and classic light theme</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border-4 border-neutral-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
