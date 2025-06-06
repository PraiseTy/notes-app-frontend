import type { IconType } from 'react-icons';
import React from 'react';

interface FeaturesProp {
  svg?: IconType;
  style?: React.ReactNode;
  mode: string;
  text: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export const FeaturesSection = ({ svg: Icon, mode, text, style, onClick, isSelected }: FeaturesProp) => {
  return (
    <div className="pt-5 cursor-pointer" onClick={onClick}>
      <div
        className={`flex flex-row justify-between items-center border border-neutral-200 rounded-lg py-3.5 px-4 ${isSelected ? 'bg-neutral-100' : 'bg-neutral-0'}`}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="border border-neutral-200 rounded-xl mr-4 p-2">
            {Icon ? (
              <Icon size={24} />
            ) : (
              <span className={`font-bold text-xl ${style} ${style === 'font-mono' ? 'px-0.5' : 'px-0'}`}>Aa</span>
            )}
          </div>
          <div className="leading-tight">
            <p className="font-bold">{mode}</p>
            <p>{text}</p>
          </div>
        </div>
        <div className={`w-5 h-5 rounded-full border-4 ${isSelected ? 'border-blue-500' : 'border-neutral-200'}`}></div>
      </div>
    </div>
  );
};
