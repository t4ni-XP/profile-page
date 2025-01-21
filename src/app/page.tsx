import DarkModeSwitcher from './components/darkModeSwitcher';
import Profile from './components/profile';
import Interests from './components/interests';
import TechStack from './components/techStacks';
import Career from './components/career';
import Link from 'next/link';

export default function Home() {
  

  return (
    <div className="relative flex flex-col items-center bg-dark-pink text-gray-100 w-full sm:w-2/3 min-h-screen sm:m-24 sm:rounded-lg">
      {/* 右上に言語切替ボタンを絶対配置 */}
      <div className="absolute top-0 right-0 m-4 flex items-center">
        <DarkModeSwitcher />
        <span className="text-gray-400">EN</span>
        <span className="mx-2">/</span>
        <Link href="/jp" className="text-gray-100">
          JP
        </Link>
      </div>

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
