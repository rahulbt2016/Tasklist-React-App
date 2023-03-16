import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import FilterTaskForm from './components/FilterTaskForm';
import Header from './components/Header';
import TaskCategory from './components/TaskCategory';
import TaskTitleContext from './context/TaskTitleContext';


const App = () => {
  //Creating state
  const [tasklist, setTasklist] = useState([
    {
        title: 'Humber',
        tasks: ['Task 1', 'Task 2', 'Task 3'],
        id: '1'
    },
    {
        title: 'MERN',
        tasks: ['Lab', 'Project', 'Quiz'],
        id: '2'
    },
    {
        title: 'Java',
        tasks: ['Group Discussion', 'Exam', 'Assignment'],
        id: '3'
    }
  ]);

  //Function to calculate total number of tasks in the Task list array
  const [totalTasks, setTotalTask] = useState(() => {

    let totalTasks: number = 0;

    tasklist.forEach(taskCategory => {

        totalTasks += taskCategory.tasks.length;
    })

    return totalTasks;
  });

  const [searchString, setSearchString] = useState("None");

  const deleteHandler = (id: string, index: number) => {
    

    let lastTaskFlag = false;

    let newTaskList = tasklist.map(tc => {
      
      if(tc.id != id) {
        return tc;
      }
      else {
        if (tc.tasks.length <= 1)
          lastTaskFlag = true;

        return {
          ...tc,
          tasks: tc.tasks.filter((t, i) => index!==i)
        };
      }
    })

    if (lastTaskFlag) {
      newTaskList = newTaskList.filter((tc) => tc.id !== id);
    }

    setTasklist(newTaskList);
    setTotalTask(totalTasks - 1);
  }

  const addTaskHandler = (taskCategory: string, task: string) => {

    if (taskCategory !== '' && task !== '') {
      
      let hasTaskCategory = false;
      let newTaskList = tasklist.map((tc) => {

        if(tc.title.toLowerCase() !== taskCategory.toLowerCase())
        {
          return tc;
        }
        else {

          hasTaskCategory = true;
          let taskArray = tc.tasks;
          taskArray.push(task);

          return {
            ...tc,
            tasks: taskArray
          };
        }
      });
      
      if(hasTaskCategory){
        setTasklist(newTaskList);
      }
      else {
        setTasklist((curr) => [...curr, { id: uuidv4(), tasks: [task],  title: taskCategory}]);
      }
      
      setTotalTask(totalTasks + 1);
    }
  };

  const filterHandler = (filterString: string) => {
    setSearchString(filterString);
  }


  return (
    <div className='main'>
        <TaskTitleContext.Provider value={tasklist.map((tc) => tc.title)}>
          <div className="formClass row">
            <AddTaskForm addTask={addTaskHandler}/>
            <FilterTaskForm filterTasks={filterHandler} />
          </div>
          
          <Header totalTasks={totalTasks} />
          <div className='task-list-content'>
            {tasklist
              .filter((tc) => tc.title === searchString || searchString === "None")
              .map((tc) => (
                <TaskCategory taskCategory={tc} onDelete={deleteHandler}  key={tc.id}/>
            ))}
          </div>
        </TaskTitleContext.Provider>
    </div>
  );
}

export default App;
