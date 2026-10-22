import PageHeader from "../components/PageHeader";
import TaskForm from "../components/TaskForm";

const EditTask = () => {
  return (
    <main className="max-w-360 mx-auto px-5 md:px-42.5 py-10 md:py-16.25 flex flex-col items-start gap-10.75">
      <PageHeader />
      <TaskForm />
    </main>
  );
};

export default EditTask;
