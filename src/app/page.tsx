import Profile from './components/profile';

export default function Home() {
  return (
    // <div className='bg-gray-100 text-gray-800'>
    //   <Profile />
    // </div>
    // <div className="bg-gray-100 text-gray-800">
    //   <div className="bg-gray-200 p-6 rounded">
    //     <h1 className="text-gray-800">プロフィールページ</h1>
    //     <p className="text-gray-700">ここに内容を記載します。</p>
    //     <button className="bg-gray-500 text-white px-4 py-2 rounded">詳細を見る</button>
    //   </div>
    // </div>
    <div className="bg-black text-gray-100">
      <div className="bg-gray-900 p-6 rounded">
        <h1 className="text-gray-100">プロフィールページ</h1>
        <p className="text-gray-400">ここに内容を記載します。</p>
        <button className="bg-gray-600 text-white px-4 py-2 rounded">詳細を見る</button>
      </div>
    </div>
  );
}
