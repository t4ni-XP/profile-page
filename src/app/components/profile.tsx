import React from 'react';
import Image from 'next/image';

export default function Profile() {
    return (
        <div className='h-64 w-fill mt-10 rounded-lg'>
            <h1 className='text-3xl font-bold ml-10 mb-1'>PROFILE</h1>
            <div className="flex items-center ml-10 mr-10 mb-10 justify-center ml-0 space-x-8">
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
                        Software Developer specializing in web development and artificial intelligence. Passionate about building efficient and scalable solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}
