import Profile from './components/profile';
import Interests from './components/interests';

export default function Home() {
  return (
    <div className="flex-col items-center min-h-screen bg-gray-800 text-gray-100 w-2/3 mt-24">
      <div className="w-fill">
        <Profile />
      </div>
      <div className="w-fill">
        <Interests />
      </div>
    </div>
  );
}
