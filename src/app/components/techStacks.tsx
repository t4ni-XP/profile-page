import React from 'react';
import Image from 'next/image';

export default function TechStack() {
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold mb-4">TECH</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
        {/* Python */}
        <div className="flex flex-col items-center">
          <Image
            src="/python.svg"
            alt="Python Logo"
            width={200} // 元の画像サイズに合わせた適切な値
            height={100}
            style={{ height: '64px', width: 'auto' }} // 縦幅固定、横幅自動調整
          />
        </div>

        {/* JavaScript */}
        {/* <div className="flex flex-col items-center">
          <Image
            src="/js.png"
            alt="JavaScript Logo"
            width={60}
            height={60}
          />
        </div> */}

        {/* TypeScript */}
        <div className="flex flex-col items-center">
          <Image
            src="/ts-logo.svg"
            alt="TypeScript Logo"
            width={62}
            height={62}
          />
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center">
          <Image
            src="/nextjs-logotype.svg"
            alt="Next.js Logo"
            width={200}
            height={100}
            style={{ height: '40px', width: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}
