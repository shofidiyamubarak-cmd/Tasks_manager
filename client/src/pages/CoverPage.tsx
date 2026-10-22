import { Link } from "react-router-dom";
import heroImg from "../assets/Component 1.png";
const CoverPage = () => {
  return (
    <main className="max-w-360 mx-auto px-5 md:px-42.5 pt-10 md:pt-16.25 flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between">
      <div className="flex flex-col items-start text-start gap-5 max-w-133.75">
        <h1 className="font-medium text-3xl md:text-[50px] leading-tight text-[#292929]">
          Manage your Tasks on <span className="text-[#974fd0]">TaskDuty</span>
        </h1>

        <p className="text-lg md:text-[24px] font-normal leading-tight text-[#737171]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
          sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
          tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
          semper porttitor. Nec accumsan.
        </p>

        <Link
          to="/tasks"
          className="w-48 h-12 flex items-center justify-center rounded-lg bg-[#974fd0] text-[#faf9fb] text-xl md:text-[24px]"
        >
          Go to My Tasks
        </Link>
      </div>

      <img src={heroImg} alt="" className="w-full max-w-md" />
    </main>
  );
};

export default CoverPage;
