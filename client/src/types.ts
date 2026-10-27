// The tags a user can pick. Must match TASK_TAGS on the server.
export const TASK_TAGS = ["Urgent", "Important"];

// what the user types into the form
export interface TaskInput {
  title: string;
  description: string;
  tag: string;
}

// A task that came back from the server (it now has an _id)
export interface Task extends TaskInput {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
