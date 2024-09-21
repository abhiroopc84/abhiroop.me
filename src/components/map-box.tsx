"use client";

import { Circle, CircleDot } from "lucide-react";
import Map, { Marker } from "react-map-gl";
import { useRef, useState } from "react";
import type { MapRef } from "react-map-gl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const MapBox = () => {
  const mapRef = useRef<MapRef>(null);
  const [mapLoad, setMapLoad] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleMapLoad = () => {
    setMapLoad(() => true);
  };

  return (
    <div className="flex h-dvh absolute right-0 top-0 -z-50 lg:hidden">
      <div className="flex relative overflow-hidden w-fit justify-items-center items-center">
        <Skeleton className={`absolute top-0 left-0 w-full h-full z-50 ${mapLoad?"hidden":""}`}/>
        <Map
          mapboxAccessToken="pk.eyJ1IjoiYWJoaXJvb3BjIiwiYSI6ImNseHQwY3cwbDAwOWoycXNjZzJwaTlpMGYifQ.EQCzNJpB_ZrfqXVeKtNrjg"
          initialViewState={{
            longitude: 78.470205,
            latitude: 17.495100,
            zoom: 10,
          }}
          style={{
            width: "100vw",
            height: "100vh",
            opacity: `${mapLoad? 1:0}`
          }}
          mapStyle={
            resolvedTheme === "dark"
              ? "mapbox://styles/abhiroopc/clxufk6l900fa01r08srm3bho"
              : "mapbox://styles/abhiroopc/clxuene5r00sh01qqf2bj8mpc"
          }
          attributionControl={false}
          ref={mapRef}
          light={{ anchor: "map" }}
          interactive={false}
          onLoad={handleMapLoad}
        >
          <Marker
            longitude={78.47267012382946}
            latitude={17.339170880404538}
            anchor="center"
          >
            <Circle className="w-8 h-8 animate-ping-slow fill-current" />
          </Marker>
          <Marker
            longitude={78.47267012382946}
            latitude={17.339170880404538}
            anchor="center"
          >
            <CircleDot
              className="w-8 h-8 dark:fill-[yellow] fill-[purple]"
            />
          </Marker>
          <Marker
            longitude={78.47267012382946}
            latitude={17.339170880404538}
            anchor="center"
          >
            <Circle className="fill-current w-5 h-5" />
          </Marker>
        </Map>
        <Image
          src="/cloud.png"
          width={0}
          height={0}
          alt="cloud"
          draggable="false"
          className={`animate-cloud-bounce blur-sm brightness-50 absolute top-0 right-0 w-80 h-auto ${mapLoad?"flex opacity-20":"hidden"}`}
        />
      </div>
    </div>
  );
};

export default MapBox;
