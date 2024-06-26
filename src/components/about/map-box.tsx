/* eslint-disable @next/next/no-img-element */
"use client";

import { Circle, CircleDot, Minus, Plus } from "lucide-react";
import Map, { Marker, Source } from "react-map-gl";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import type { MapRef } from "react-map-gl";
import { useTheme } from "next-themes";
import Image from "next/image";

const MapBox = () => {
  const mapRef = useRef<MapRef>(null);
  const coords = {
    long: 78.47267012382946,
    lat: 17.339170880404538,
  };
  const [mapLoad, setMapLoad] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mapControls, setMapControls] = useState({ in: false, out: true });

  const handleMapLoad = () => {
    setMapLoad(() => true);
  };

  const handleZoomOut = () => {
    if (mapRef && mapRef.current) {
      const newZoom =
        mapRef.current.getZoom() === 10
          ? 5
          : mapRef.current.getZoom() === 5
          ? 3
          : 3;
      mapRef.current.flyTo({
        center: [coords.long, coords.lat],
        zoom: newZoom,
        duration: 3000,
      });
      if (newZoom === 3) {
        setMapControls((prev) => ({ ...prev, in: true, out: false }));
      } else if (newZoom === 5) {
        setMapControls((prev) => ({ ...prev, in: true, out: true }));
      }
    }
  };

  const handleZoomIn = () => {
    if (mapRef && mapRef.current) {
      const newZoom =
        mapRef.current.getZoom() === 3
          ? 5
          : mapRef.current.getZoom() === 5
          ? 10
          : 10;
      mapRef.current.flyTo({
        center: [coords.long, coords.lat],
        zoom: newZoom,
        duration: 3000,
      });
      if (newZoom === 10) {
        setMapControls((prev) => ({ ...prev, in: false, out: true }));
      } else if (newZoom === 5) {
        setMapControls((prev) => ({ ...prev, in: true, out: true }));
      }
    }
  };

  return (
    <div className="flex rounded-xl">
      <div className="flex rounded-xl relative overflow-hidden w-fit justify-items-center items-center">
        <Map
          mapboxAccessToken="pk.eyJ1IjoiYWJoaXJvb3BjIiwiYSI6ImNseHQwY3cwbDAwOWoycXNjZzJwaTlpMGYifQ.EQCzNJpB_ZrfqXVeKtNrjg"
          initialViewState={{
            longitude: 78.47267012382946,
            latitude: 17.339170880404538,
            zoom: 10,
          }}
          style={{
            width: 450,
            height: 300,
            borderRadius: "0.75rem",
            fontFamily: "var(--font-jetbrains-mono)",
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
              className="w-8 h-8 fill-red-500"
              color="rgb(239 68 68)"
            />
          </Marker>
          <Marker
            longitude={78.47267012382946}
            latitude={17.339170880404538}
            anchor="center"
          >
            <Circle className="fill-current" />
          </Marker>
        </Map>
        <Image
          src="/cloud.png"
          width={0}
          height={0}
          alt="cloud"
          draggable="false"
          className={`animate-cloud-bounce blur-sm brightness-50 opacity-20 absolute top-0 right-0 w-80 h-auto`}
        />
        <div>
          <Button
            size="icon"
            className={`absolute bottom-2 left-2 ${
              mapLoad && mapControls.out ? "flex" : "hidden"
            }`}
          >
            <Minus className="w-4 h-4" onClick={handleZoomOut} />
          </Button>
          <Button
            size="icon"
            className={`absolute bottom-2 right-2 ${
              mapLoad && mapControls.in ? "flex" : "hidden"
            }`}
          >
            <Plus className="w-4 h-4" onClick={handleZoomIn} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapBox;
