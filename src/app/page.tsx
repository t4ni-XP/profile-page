'use client';

import { useDarkTheme } from './contexts/darkThemeContext';
import DarkModeSwitcher from './components/darkModeSwitcher';
import Profile from './components/profile';
import Interests from './components/interests';
import TechStack from './components/techStacks';
import Career from './components/career';
import Link from 'next/link';

export default function Home() {
  // ① useDarkTheme からダークテーマフラグを取得
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
          <div className="absolute top-0 right-0 m-4 flex flex-col items-end md:flex-row md:items-center">
            <DarkModeSwitcher />
            <div className="ml-2 mb-2">
              <span className="text-foreground-secondary">EN</span>
              <span className="mx-2">/</span>
              <Link href="/jp" className="text-foreground-primary">
                JP
              </Link>
            </div>
          </div>

          <div className="w-full">
            <Profile />
          </div>
          <div className="w-full">
            <TechStack />
          </div>
          <div className="w-full">
            <Interests />
          </div>
          <div className="w-full">
            <Career />
          </div>
        </div>
      </body>
    </html>
  );
}
