import { MdLightMode, MdOutlineTextFields } from 'react-icons/md';
import type { IconType } from 'react-icons';

type TabKey = 'color' | 'font';

interface TabItem {
  svg: IconType;
  title: string;
  key: TabKey;
}

export const TabsData: TabItem[] = [
  {
    svg: MdLightMode,
    title: 'Color Theme',
    key: 'color'
  },
  {
    svg: MdOutlineTextFields,
    title: 'Font Theme',
    key: 'font'
  }
];
