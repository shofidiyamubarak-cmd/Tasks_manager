import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TaskForm from "../components/TaskForm";
import { useEffect, useState } from "react";
import type { TaskInput } from "../types";
import { getTask, updateTask } from "../api";

const EditTask = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState<TaskInput | null>(null);

  // step 2: runs when the page opens
  useEffect(() => {
    const fetchEachTask = async () => {
      const eachTask = await getTask(id);

      setTask({
        title: eachTask.title,
        description: eachTask.description,
        tag: eachTask.tag,
      });
    };

    fetchEachTask();
  }, [id]);

  // step3: called by TaskForm when the user clicks the button
  const handleUpdate = async (values: TaskInput) => {
    await updateTask(id, values);
    navigate("/tasks");
  };

  return (
    <main className="max-w-360 mx-auto px-5 md:px-42.5 py-10 md:py-16.25 flex flex-col items-start gap-10.75">
      <PageHeader title="Edit Task" />
      {task && (
        <TaskForm
          initialValues={task}
          submitLabel="Update"
          onSubmit={handleUpdate}
        />
      )}
    </main>
  );
};

export default EditTask;
