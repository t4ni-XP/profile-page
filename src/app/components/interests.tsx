export default function Interests() {
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold mb-4 ml-10">INTERESTS</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ml-10">
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">Web Development</div>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">Orienteering</div>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">UI/UX Design</div>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">Cybersecurity</div>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">Music</div>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">Driving</div>
            </div>
        </div>
    );
}