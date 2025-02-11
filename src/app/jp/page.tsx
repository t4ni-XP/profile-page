import ProfileJp from '@/app/components/profileJp';
import InterestsJp from '@/app/components/interestsJp';
import TechStack from '@/app/components/techStacks';
import CareerJp from '@/app/components/careerJp';
import Link from 'next/link';

export default function JpHome() {
  return (
    <div className="relative flex flex-col items-center bg-dark-pink text-gray-100 w-full sm:w-2/3 min-h-screen sm:m-24 sm:rounded-lg">
      {/* 右上に言語切替ボタンを絶対配置 */}
      <div className="absolute top-0 right-0 m-4 flex items-center">
        {/* <span className="text-gray-400">EN</span> */}
        <Link href="/" className="text-gray-100">
          EN
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-400">JP</span>
      </div>

      <div className="w-full">
        <ProfileJp />
      </div>
      <div className="w-full">
        <InterestsJp />
      </div>
      <div className="w-full">
        <TechStack />
      </div>
      <div className="w-full">
        <CareerJp />
      </div>
    </div>
  );
}
