"use client";

import { ITask } from "@/types/tasks";
import Task from "./Task";
import useTodoStore from "./Store";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full ">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;