import Profile from './components/profile';
import Interests from './components/interests';
import TechStack from './components/techStacks';
import Career from './components/career';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-gray-100 w-full sm:w-2/3 min-h-screen sm:m-24 sm:rounded-lg">
      <div className="w-full">
        <Profile />
      </div>
      <div className="w-full">
        <Interests />
      </div>
      <div className="w-full">
        <TechStack />
      </div>
      <div className="w-full">
        <Career />
      </div>
    </div>
  );
}
