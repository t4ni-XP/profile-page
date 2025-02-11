import ProfileJp from '@/app/components/profileJp';
import InterestsJp from '@/app/components/interestsJp';
import TechStackJp from '@/app/components/techStacksJp';
import CareerJp from '@/app/components/careerJp';

export default function JpHome() {
  return (
    <div className="flex flex-col items-center bg-dark-pink text-gray-100 w-full sm:w-2/3 min-h-screen sm:m-24 sm:rounded-lg">
      <div className="w-full">
        <ProfileJp />
      </div>
      <div className="w-full">
        <InterestsJp />
      </div>
      <div className="w-full">
        <TechStackJp />
      </div>
      <div className="w-full">
        <CareerJp /> 
      </div>
    </div>
  );
}
