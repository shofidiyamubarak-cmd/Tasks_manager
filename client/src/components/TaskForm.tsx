const labelClass =
  "absolute text-[#9c9c9c] bg-[#faf9fb] text-xl md:text-[30px] -top-5 left-5 px-1";

const fieldClass =
  "w-full px-5 py-4 border border-[#b8b6b6] rounded-[5px] text-lg bg-transparent";
const TaskForm = () => {
  return (
    <form className="pt-10 flex flex-col items-start gap-8 w-full">
      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Task Title
        </label>
        <input
          type="text"
          className={fieldClass}
          placeholder="E.g project Defence, Assignment"
        />
      </div>
      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Description
        </label>
        <input
          type="text"
          className={fieldClass}
          placeholder="Briefly describe your task"
        />
      </div>
      <div className="relative w-full">
        <label htmlFor="" className={labelClass}>
          Tag
        </label>
        <select name="" id="" className={fieldClass}></select>
      </div>

      <button className="w-full bg-[#974fd0] py-4 text-[#faf9fb] font-medium text-2xl md:text-[35px] rounded-lg disabled:opacity-60">
        Done
      </button>
    </form>
  );
};

export default TaskForm;
