import React from 'react';

export default function Career() {
    const experiences = [
        // {
        //     year: "2025/4",
        //     title: "Admitted to University of Tsukuba.",
        //     description: "Worked on building modern web applications using Next.js.",
        // },
        {
            year: "2024/11-",
            title: "Web Developer Intern at Yard corp.",
            description: "Worked on building modern web applications using Next.js.",
        },
        {
            year: "2024/04",
            title: "Joined System Security Research Group.",
            description: "Started research on web security and privacy.",
        },
        {
            year: "2021/04",
            title: "Admitted to University of Tsukuba.",
            description: "Started studying Computer Science.",
        },
        {
            year: "2002/04/15",
            title: "Born in Tsukuba.",
            //   description: "Pursued a degree in Computer Science, focusing on web technologies.",
        },
    ];

    return (
        <div className="flex flex-col items-start m-10 h-auto">
            <h1 className="text-3xl font-bold mb-6">Career</h1>
            <div className="relative w-full pl-10">
                {/* 縦線 */}
                <div className="absolute left-6 top-0 w-2 h-full bg-gray-300"></div>
                {/* タイムラインの各項目 */}
                {experiences.map((exp, index) => (
                    <div key={index} className="flex items-center mb-5 relative">
                        {/* 丸 */}
                        <div className="absolute -left-7 w-8 h-8 bg-gray-300 rounded-full z-10 flex items-center justify-center">
                            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                        </div>
                        {/* テキスト */}
                        <div className="ml-12">
                            <h2 className="text-md">{exp.year}</h2>
                            <h3 className="text-md">{exp.title}</h3>
                            <p className="text-sm text-gray-500">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
