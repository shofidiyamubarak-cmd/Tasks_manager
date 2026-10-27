import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TaskForm from "../components/TaskForm";
import type { TaskInput } from "../types";
import { createTask } from "../api";

const emptyTask: TaskInput = { title: "", description: "", tag: "" };

const NewTask = () => {
  const navigate = useNavigate();

  // called by TaskForm when the user clicks "Done"
  const handleCreate = async (values: TaskInput) => {
    await createTask(values);
    navigate("/tasks");
  };
  return (
    <main className="max-w-360 mx-auto px-5 md:px-42.5 py-10 md:py-16.25 flex flex-col items-start gap-10.75">
      <PageHeader title="New Task" />
      <TaskForm
        initialValues={emptyTask}
        submitLabel="Done"
        onSubmit={handleCreate}
      />
    </main>
  );
};

export default NewTask;
