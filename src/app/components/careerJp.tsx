import React from 'react';

export default function CareerJp() {
  const experiences = [
    // {
    //     year: "2025/4",
    //     title: "Admitted to University of Tsukuba.",
    //     description: "Worked on building modern web applications using Next.js.",
    // },
    {
      year: '2025/4',
      title: '筑波大学大学院進学',
      description: 'インタフェースに関する研究を予定',
    },
    {
      year: '2024/11',
      title: 'スタートアップ企業でのインターン開始',
      description: 'Next.jsを用いたwebアプリケーションの開発',
    },
    {
      year: '2024/04',
      title: 'システムセキュリティ研究室に配属',
      description: 'マルウェア検知について研究',
    },
    {
      year: '2021/04',
      title: '筑波大学入学',
      description: '情報学群情報科学類',
    },
    {
      year: '2002/04/15',
      title: 'つくばにて誕生',
      //   description: "Pursued a degree in Computer Science, focusing on web technologies.",
    },
  ];

  return (
    <div className="flex flex-col items-start m-10 h-auto">
      <h1 className="text-3xl mb-6">経歴</h1>
      <div className="relative w-full pl-12">
        {/* 縦線 */}
        <div className="absolute left-7 top-0 w-1 h-full bg-timeline-line"></div>
        {/* タイムラインの各項目 */}
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center mb-5 relative">
            {/* 丸 */}
            {/* <div className="absolute -left-7 w-5 h-5 bg-timeline-node rounded-full z-10 flex items-center justify-center"> */}
            {/* <div className="w-4 h-4 bg-gray-800 rounded-full"></div> */}
            {/* </div> */}
            <div className="absolute -left-7 w-5 h-5 bg-timeline-node-outer rounded-full z-10 flex items-center justify-center">
              {/* 内側が小さい丸 */}
              <div className="w-3 h-3 bg-timeline-node-inner rounded-full" />
            </div>
            {/* テキスト */}
            <div className="ml-12">
              <h2 className="text-md">{exp.year}</h2>
              <h3 className="text-md">{exp.title}</h3>
              <p className="text-sm text-foreground-secondary">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
