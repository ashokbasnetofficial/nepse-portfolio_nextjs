import spiral from "../../../public/images/services/landing page imge/spiral.png";
import mobile_view from "../../../public/images/services/landing page imge/mobile app.png";
import Image from "next/image";
import Timeline from "./TimeLine";
const AppInfo = () => {
  return (
    <section className="flex flex-col lg:flex-row  justify-between py-10 px-5 lg:px-20 mt-10">
      {/* Left Side - Images */}

      <div className="relative w-full lg:w-1/2 h-auto mb-10 lg:mb-0">
        <Image
          src={spiral}
          alt="Spiral"
          className="absolute top-0 left-0 w-2/3 lg:w-full opacity-80"
        />
        <Image
          src={mobile_view}
          alt="Mobile View"
          className="relative z-10 w-2/3 lg:w-2/5 mx-auto"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col  text-center lg:text-left">
        <h4 className="text-2xl lg:text-4xl font-bold mb-4 text-blue-950">
          What Are The App Features?
        </h4>
        <Timeline />
      </div>
    </section>
  );
};

export default AppInfo;
