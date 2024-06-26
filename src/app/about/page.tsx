import Description from "@/components/about/description";
import Footer from "@/components/about/footer";
import Location from "@/components/about/location";
import MapBox from "@/components/about/map-box";
import Resume from "@/components/about/resume";
import Skills from "@/components/about/skills";
import { Separator } from "@/components/ui/separator";
import skills from "@/constants/skills";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="p-2 mt-8 flex-1 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-8 justify-between">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <Description />
          <div className="flex flex-col gap-2 shrink">
            <MapBox />
            <Location />
          </div>
        </div>
        <Skills />
      </div>
      <Separator className="md:hidden" />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
