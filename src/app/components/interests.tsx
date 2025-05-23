export default function Interests() {
  return (
    <div className="m-10">
      <h1 className="text-3xl mb-4">INTEREST</h1>
      {/* スマホではフレックス、PCではグリッド */}
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-4">
        <div className="bg-tile-bg p-4 rounded-lg">Web Development 💻</div>
        <div className="bg-tile-bg p-4 rounded-lg">UI/UX Design 🎨</div>
        <div className="bg-tile-bg p-4 rounded-lg">HMI 🕹️</div>
        <div className="bg-tile-bg p-4 rounded-lg">Orienteering 🗺️</div>
        <div className="bg-tile-bg p-4 rounded-lg">Music 🎵</div>
        <div className="bg-tile-bg p-4 rounded-lg">Anime/Comics 📚</div>
      </div>
    </div>
  );
}
