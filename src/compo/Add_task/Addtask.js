import React, { useState } from "react";
import "./Add_task.css";
import { useDispatch } from "react-redux";

import { addTask } from "../../redux/Action/Listtask";

const Addtask = () => {
  const [text, setText] = useState(" ");
  const dispatch = useDispatch();

  const handlechange = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addTask({ id: Math.random(), text: text, isDone: false }));
      setText("");
    } else {
      alert("cant add an empty task");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlechange}>ADD</button>
    </div>
  );
};

export default Addtask;
