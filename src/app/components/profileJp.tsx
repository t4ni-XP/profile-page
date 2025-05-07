import React from 'react';
import Image from 'next/image';

export default function ProfileJp() {
  return (
    <div className="h-56 w-fill mt-14 ml-10 rounded-lg">
      {/* <h1 className="text-3xl mb-3">PROFILE</h1> */}
      <div className="flex items-center mr-10 mb-10 ml-0 space-x-8">
        {/* 画像をラップしているコンテナ */}
        <div className="flex items-center justify-center h-32 w-1/2 max-w-32 sm:w-40 overflow-hidden ">
          <div className="flex items-center justify-center max-h-full aspect-square sm:w-full sm:h-full">
            <Image
              src="/MizukiTaniguchi.jpeg"
              alt="Mizuki Taniguchi"
              className="rounded-full"
              width={192}
              height={192}
            />
          </div>
        </div>

        {/* プロフィールテキスト */}
        <div className="flex flex-col w-1/2 sm:w-full">
          <h1 className="sm:text-3xl mb-1 sm:mb-4">谷口 瑞樹</h1>
          <p>
            {/* Web Developer. Orienteer. \n Currently studying at University of Tsukuba. */}
            <span className="block">Web Engineer</span>
            <span className="block">Orienteer</span>
            {/* <span className="block">筑波大学 情報学群情報科学類</span> */}
            <span className="hidden md:block">
              筑波大学 リスク・レジリエンス工学学位プログラム
            </span>
            <span className="block md:hidden">筑波大学</span>
            <span>認知システムデザイン研究室</span>
            <span className="hidden md:block">
              Twitter :{' '}
              <a href="https://x.com/t4ni_XP" target="_blank">
                @t4ni_XP
              </a>{' '}
              / GitHub :{' '}
              <a href="https://github.com/t4ni-XP" target="_blank">
                t4ni-XP
              </a>
            </span>
            <span className="block visible md:hidden">
              Twitter :{' '}
              <a href="https://x.com/t4ni_XP" target="_blank">
                @t4ni_XP
              </a>
            </span>
            <span className="block visible md:hidden">
              GitHub :{' '}
              <a href="https://github.com/t4ni-XP" target="_blank">
                t4ni-XP
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
