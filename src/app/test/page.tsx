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
                <div className="w-full flex flex-row">
                    <div className="w-1/3 md:w-60 h-60 bg-gray-600">
                        がぞう
                    </div>
                    <div className="w-2/3 md:w-60 h-60 bg-gray-200">
                        テキスト
                    </div>
                </div>
            </body>
        </html>
    );
}
