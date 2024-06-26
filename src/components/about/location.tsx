import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <div className="flex flex-row items-center gap-2 lg:justify-end">
      <MapPin className="w-5 h-5 stroke-red-500" />
      <p>based in hyderabad, india</p>
    </div>
  );
};

export default Location;
