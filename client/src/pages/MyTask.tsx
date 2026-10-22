import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const MyTask = () => {
  return (
    <main className="max-w-360 mx-auto px-5 md:px-42.5 py-8 md:py-13.25 flex flex-col items-start gap-7.25">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between gap-4">
        <h1 className="font-medium text-3xl md:text-[50px] text-[#292929]">
          My Tasks
        </h1>
        <Link to="/new" className="flex items-center gap-2">
          <FaPlus className="text-lg md:text-[24px] font-medium text-[#974fd0]" />
          <span className="text-lg md:text-[24px] font-medium text-[#974fD0]">
            Add New Task
          </span>
        </Link>
      </div>

      <div className="flex flex-col items-start gap-8 w-full">
        <div className="border-[0.5] border-[#B8B6B6] rounded-[10px] flex flex-col pt-5 pb-10 px-3 items-start w-full text-start">
          <div className="pb-5 flex flex-col md:flex-row md:items-end justify-between w-full gap-4 border-b-[0.5px] border-b-[#b8b6b6]">
            <p className="font-normal text-xl md:text-[24px] text-[#f38383]">
              Urgent
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/edit"
                className="w-31.5 h-12.5 flex justify-center items-center gap-2.5 bg-[#974fd0] rounded-lg"
              >
                <FaRegEdit className="text-[24px] font-medium text-[#faf9fb]" />
                <span className="text-[24px] font-medium text-[#faf9fb]">
                  Edit
                </span>
              </Link>

              <button className="border border-[#974fd0] w-37.75 h-12.5 flex justify-center items-center gap-2.5 rounded-lg">
                <FaRegTrashCan className="text-[24px] font-medium text-[#974fd0]" />
                <span className="text-[24px] font-medium text-[#974fd0]">
                  Delete
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start mt-4">
            <h2 className="font-normal text-2xl md:text-[35px] text-[#292929]">
              FinTech Website Update
            </h2>
            <p className="text-[#737171] font-normal text-base md:text-[24px] leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyTask;
