import { MdLightMode, MdOutlineTextFields, MdOutlineHome } from 'react-icons/md';
import type { IconType } from 'react-icons';
import { RiInboxArchiveLine } from 'react-icons/ri';

type TabKey = 'color' | 'font';

type HomeTabKey = 'home' | 'archive';

interface SettingTabItem {
  svg: IconType;
  title: string;
  key: TabKey;
}

interface HomeTabItem {
  svg: IconType;
  title: string;
  key: HomeTabKey;
}

export const TabsData: SettingTabItem[] = [
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

export const HomeTabsData: HomeTabItem[] = [
  {
    svg: MdOutlineHome,
    title: 'All Notes',
    key: 'home'
  },
  {
    svg: RiInboxArchiveLine,
    title: 'Archived Notes',
    key: 'archive'
  }
];

export const TagData = [
  'Dev',
  'React',
  'Travel',
  'Personal',
  'Cooking',
  'Recipes',
  'Typescript',
  'Fitness',
  'Health',
  'Shopping'
];
