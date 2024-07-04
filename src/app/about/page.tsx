import Description from "@/components/about/description";
import Footer from "@/components/about/footer";
import Location from "@/components/about/location";
import MapBoxLg from "@/components/about/map-box-lg";
import MapBoxSm from "@/components/about/map-box-sm";
import Resume from "@/components/about/resume";
import Skills from "@/components/about/skills";
import { Separator } from "@/components/ui/separator";
import skills from "@/constants/skills";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex-1 flex flex-col justify-between gap-4">
      <div className="flex-1 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-8 justify-between">
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <Description />
            <div className="flex flex-col gap-2 shrink lg:hidden">
              <MapBoxSm />
              <Location />
            </div>
          </div>
          <Skills />
          <div className="flex justify-start">
            <Resume />
          </div>
        </div>
        <div className="hidden flex-col gap-2 shrink lg:flex">
          <MapBoxLg />
          <Location />
        </div>
      </div>
      <Separator className="md:hidden" />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
