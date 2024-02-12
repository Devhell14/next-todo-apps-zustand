"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEvent, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import useTodoStore from "./Store";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo(newTaskValue);
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div className="container mx-auto px-4">
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Add new task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input w-full "
            />
            <button type="submit" className="btn btn-accent">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;