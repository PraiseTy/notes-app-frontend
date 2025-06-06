import { TabsData, TabSection } from './Tabs';
import { ColorThemeData, FeaturesSection, FontThemeData } from './Features';
import { useContext, useState } from 'react';
import { FontContext, useTheme } from '../styles';

export const Body = () => {
  const [activeTab, setActiveTab] = useState<'color' | 'font'>('color');
  const [mode, setMode] = useState<'Light Mode' | 'Dark Mode'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'Dark Mode' ? 'Dark Mode' : 'Light Mode';
  });
  const { font, setFont } = useContext(FontContext);

  useTheme({ mode });


  return (
    <div className="flex flex-row h-full ">
      <div className="flex flex-col mx-2 border-r border-r-neutral-200 h-full max-w-[258px] w-1/2  py-8">
        {TabsData.map((tab, index) => (
          <TabSection
            svg={tab.svg}
            title={tab.title}
            key={index}
            isActive={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          />
        ))}
      </div>
      <div className=" w-1/2 pt-10 pl-8">
        {activeTab === 'color' && (
          <>
            <h1 className="font-semibold">Color Theme</h1>
            <p> Choose your color theme</p>
            <div>
              {ColorThemeData.map((feature, index) => (
                <FeaturesSection
                  svg={feature.svg}
                  mode={feature.mode}
                  text={feature.text}
                  key={index}
                  onClick={() => {
                    const newMode = feature.mode as 'Light Mode' | 'Dark Mode';
                    setMode(newMode);
                    localStorage.setItem('theme', newMode);
                  }}
                  isSelected={feature.mode === mode}
                />
              ))}
            </div>
          </>
        )}
        {activeTab === 'font' && (
          <>
            <h1 className="font-semibold">Font Theme</h1>
            <p> Choose your color theme</p>
            <div>
              {FontThemeData.map((feature, index) => (
                <FeaturesSection
                  style={feature.style}
                  mode={feature.mode}
                  text={feature.text}
                  key={index}
                  onClick={() => setFont(feature.style)}
                  isSelected={font === feature.style}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
