import { FaGear } from 'react-icons/fa6';
import search from '../assets/magnifying-glass-solid.svg';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  title: string;
}

export const Navbar = ({ title }: NavbarProps) => {
  const navigation = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === '/settings';
  return (
    <div className="px-4 py-6 border-b border-b-neutral-200">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">{title}</h1>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center border border-neutral-200 hover:border-blue-500 rounded w-auto min-w-96 px-5 py-2">
            <img src={search} alt="search" width={20} height={20} />
            <input
              type="text"
              className="outline-none px-2 py-1 w-full"
              placeholder="Search by title, content or tags..."
            />
          </div>
          <div className={`px-3 py-3 ${isActive ? 'bg-neutral-100' : 'bg-white'}`}>
            <FaGear
              size={25}
              onClick={() => {
                navigation('/settings');
              }}
              className={`cursor-pointer ml-2 transition-colors duration-300 ${
                isActive ? 'text-blue-600' : 'text-black'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
