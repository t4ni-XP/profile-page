import React from 'react';
import Image from 'next/image';

export default function TechStack() {
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold mb-6">SKILLS</h1>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:justify-items-center">
        {/* Next.js */}
        <div className="flex items-start sm:items-center">
          <Image
            src="/nextjs-logotype.svg"
            alt="Next.js Logo"
            width={200}
            height={100}
            style={{ height: '40px', width: 'auto' }}
          />
        </div>

        {/* TypeScript */}
        <div className="flex flex-col sm:items-center">
          <Image
            src="/ts-logo.svg"
            alt="TypeScript Logo"
            width={62}
            height={62}
          />
        </div>
        {/* Python */}
        <div className="flex items-start sm:items-center">
          <Image
            src="/python.svg"
            alt="Python Logo"
            width={200} // 元の画像サイズに合わせた適切な値
            height={100}
            style={{ height: '64px', width: 'auto' }} // 縦幅固定、横幅自動調整
          />
        </div>
      </div>
    </div>
  );
}
