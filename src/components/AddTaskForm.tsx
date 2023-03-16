import React, { useState } from 'react';
type Props = {
  addTask: (taskCategory: string, task: string) => void;
};

const AddTaskForm = ({ addTask }: Props) => {
  const [taskCategoryName, setTaskCategoryName] = useState('');
  const [taskName, setTaskName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    (e.target.name === 'task-category') ? setTaskCategoryName(e.target.value) : setTaskName(e.target.value)  
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTask(taskCategoryName, taskName);

    setTaskCategoryName('');
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-form col-md-6' >
      <fieldset>
        <legend>Add Task</legend>
        {/* <two way data binding with value attribute /> */}
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            name='task-category'
            value={taskCategoryName}
            onChange={handleChange}
            placeholder='Enter Task Category'
          />
        </div>

        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            name='task'
            value={taskName}
            onChange={handleChange}
            placeholder='Enter Task'
          />
        </div>
        
        
        <input type='submit' className='btn btn-primary' value='Add Task' />

      </fieldset>
    </form>
  );
};

export default AddTaskForm;
