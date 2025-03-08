"use client"

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (value != "") {
      const task = {
        id: uuidv4(),
        value: value
      }

      setList([...list, task]);
      setValue("");
    }
  }

  const deleteTask = (id) => {
    const newList = list.filter(task => task.id !== id);
    setList(newList);
  }

  useEffect(() => {
    const localList = localStorage.getItem("list");
    if (localList) setList(JSON.parse(localList));
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="lg:h-screen flex lg:justify-center lg:items-center font-[family-name:var(--font-open-sans)] p-4 text-xl">
      <div className="w-screen lg:w-1/3 shadow-[0px_0px_10px_-7px_#000000] rounded-xl p-4">
        <form onSubmit={addTask} className="flex items-center gap-4">
          <input className="p-2 outline-none flex-1 shadow-[0px_0px_10px_-7px_#000000] rounded-md" type="text" placeholder="Задача..." value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="h-10 w-10 cursor-pointer shadow-[0px_0px_10px_-7px_#000000] rounded-md">+</button>
        </form>
        
        <ul>
          {list.map((task) => (
            <li className="flex gap-4 mt-4" key={task.id}>
              <span className="p-2 flex-1 shadow-[0px_0px_10px_-7px_#000000] rounded-md">{task.value}</span>
              <button className="h-10 w-10 cursor-pointer shadow-[0px_0px_10px_-7px_#000000] rounded-md" onClick={() => deleteTask(task.id)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
