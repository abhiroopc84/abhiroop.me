import Location from "./location";
import MapBox from "./map-box";
import MapBoxLg from "./map-box-lg";

const Background = () => {
  return (
    <div className="flex flex-col gap-2 shrink lg:flex">
      <MapBoxLg />
      <MapBox />
      <div
        className="absolute top-0 right-0 h-screen w-screen -z-40 lg:flex hidden"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse, #0000 0%, rgba(0, 0, 0, 0.9) 70%)",
          backdropFilter: "blur(5px)",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 h-screen w-screen -z-40 flex lg:hidden"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at bottom, #0000 0%, rgba(0, 0, 0, 0.9) 50%)",
          backdropFilter: "blur(5px)",
        }}
      ></div>
      <Location />
    </div>
  );
};

export default Background;
