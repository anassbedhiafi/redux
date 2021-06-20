import React, { useState } from "react";
import { useSelector } from "react-redux";

import Task from "../Task/Task";

const Listtask = () => {
  const [status, setstatus] = useState("all");
  const listtasks = useSelector((state) => state.task.listTasks);
  return (
    <div>
      <button>All</button>
      <button>Done</button>
      <button>UnDone</button>
      {status == "done"
        ? listtasks
            .filter((el) => el.isDone == true)
            .map((el) => <Task task={el} key={el.id} />)
        : status == "undone"
        ? listtasks
            .filter((el) => el.isDone == false)
            .map((el) => <Task task={el} key={el.id} />)
        : listtasks.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default Listtask;
