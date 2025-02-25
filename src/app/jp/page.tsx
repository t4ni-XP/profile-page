'use client';

import ProfileJp from '@/app/components/profileJp';
import InterestsJp from '@/app/components/interestsJp';
import TechStack from '@/app/components/techStacks';
import CareerJp from '@/app/components/careerJp';
import { useDarkTheme } from '../contexts/darkThemeContext';
import Link from 'next/link';
import DarkModeSwitcher from '../components/darkModeSwitcher';

export default function JpHome() {
  const { darkTheme } = useDarkTheme();
  return (
    <html lang="en" className={`${darkTheme == 'dark' ? 'dark' : 'light'}`}>
      <body className="flex justify-center">
        <div
          className={`relative flex flex-col items-center w-full sm:w-2/3 min-h-screen sm:m-24 sm:rounded-lg 
      ${
        darkTheme == 'dark'
          ? 'bg-dark-pink text-foreground-primary' // ダークテーマの場合
          : 'bg-pink-horizon text-foreground-primary' // ライトテーマの場合
      }
      `}
        >
          {/* 右上に言語切替ボタンを絶対配置 */}
          <div className="absolute top-0 right-0 m-4 flex items-center">
            <DarkModeSwitcher />
            <div className="ml-2 mb-2">
              <Link href="/" className="text-gray-100">
                EN
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-400">JP</span>
            </div>
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
      </body>
    </html>
  );
}
