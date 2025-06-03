import settingsIcon from '../assets/gear-solid.svg';
import search from '../assets/magnifying-glass-solid.svg';
export const Navbar = () => {
  return (
    <div>
      <p>Navbar</p>
      <img src={settingsIcon} alt="logo" />
      <img src={search} alt="logo" />
    </div>
  );
};
