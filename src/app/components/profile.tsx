import React from 'react';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="h-64 w-fill mt-10 ml-10 rounded-lg">
      <h1 className="text-3xl font-bold mb-1">PROFILE</h1>
      <div className="flex items-center mr-10 mb-10 ml-0 space-x-8">
        {/* 画像をラップしているコンテナ */}
        <div className="flex items-center justify-center h-44 w-44 overflow-hidden">
          <Image
            src="/MizukiTaniguchi.jpeg"
            alt="Mizuki Taniguchi"
            className="rounded-full shadow-lg"
            width={192}
            height={192}
          />
        </div>

        {/* プロフィールテキスト */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Mizuki Taniguchi</h1>
          <p className="text-gray-300">
            {/* Web Developer. Orienteer. \n Currently studying at University of Tsukuba. */}
            <span className="block">Web Engineer.</span>
            <span className="block">Orienteer.</span>
            <span className="block">
              Currently studying at University of Tsukuba.
            </span><span className="block">
            Twitter:<a href="https://x.com/t4ni_XP" target="_blank">@t4ni_XP</a> / GitHub:<a href="https://github.com/t4ni-XP" target="_blank">t4ni-XP</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
