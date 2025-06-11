import { MdOutlineEmail } from 'react-icons/md';
import { IoIosLock } from 'react-icons/io';

export const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-white items-center justify-center p-8">
        <h1 className="text-blue-500 text-4xl md:text-5xl font-bold text-center">Welcome Back...</h1>
      </div>

      <div className="w-full md:w-1/2 bg-blue-500 text-white flex items-center mt-[40%] rounded-md md:mt-0 md:rounded-none  justify-center p-4 py-14 md:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Sign in to Continue</h1>
          </div>

          <form className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Email</label>
              <div className="flex items-center border-b border-blue-400 pb-2">
                <MdOutlineEmail className="mr-2 text-blue-300" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none py-1 w-full placeholder-blue-300 text-white"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Password</label>
              <div className="flex items-center border-b border-blue-400 pb-2">
                <IoIosLock className="mr-2 text-blue-300" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-transparent outline-none py-1 w-full placeholder-blue-300 text-white"
                />
              </div>
            </div>

            <div className="mt-6 sticky bottom-4 md:static">
              <button
                type="submit"
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
