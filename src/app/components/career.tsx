import React from 'react';

export default function Career() {
    const experiences = [
        // {
        //     year: "2025/4",
        //     title: "Admitted to University of Tsukuba.",
        //     description: "Worked on building modern web applications using Next.js.",
        // },
        {
            year: "2024/11 - Present",
            title: "Web Developer Internship at Start-up.",
            description: "Developing modern web applications using Next.js.",
        },
        {
            year: "2024/04",
            title: "Joined the System Security Research Group.  ",
            description: "Began research on web security and privacy.",
        },
        {
            year: "2021/04",
            title: "Admitted to the University of Tsukuba.",
            description: "Started pursuing a degree in Computer Science.",
        },
        {
            year: "2002/04/15",
            title: "Born in Tsukuba.",
            //   description: "Pursued a degree in Computer Science, focusing on web technologies.",
        },
    ];

    return (
        <div className="flex flex-col items-start m-10 h-auto">
            <h1 className="text-3xl font-bold mb-6">EXPERIENCES</h1>
            <div className="relative w-full pl-12">
                {/* 縦線 */}
                <div className="absolute left-7 top-0 w-1 h-full bg-gray-500"></div>
                {/* タイムラインの各項目 */}
                {experiences.map((exp, index) => (
                    <div key={index} className="flex items-center mb-5 relative">
                        {/* 丸 */}
                        <div className="absolute -left-7 w-5 h-5 bg-gray-400 rounded-full z-10 flex items-center justify-center">
                            {/* <div className="w-4 h-4 bg-gray-800 rounded-full"></div> */}
                        </div>
                        {/* テキスト */}
                        <div className="ml-12">
                            <h2 className="text-md">{exp.year}</h2>
                            <h3 className="text-md">{exp.title}</h3>
                            <p className="text-sm text-gray-400">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
