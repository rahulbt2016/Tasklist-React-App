import React, { useContext, useState } from 'react';
import TaskTitleContext from '../context/TaskTitleContext';
type Props = {
  filterTasks: (filterString: string) => void; 
}


const FilterTaskForm = (props: Props) => {

  const taskTitles = useContext(TaskTitleContext);

  const [filterString, setFilterString] = useState("None");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterString(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    props.filterTasks(filterString);
  };

  return(
      <form onSubmit={handleSubmit} className='filter-form col-md-6'>
    <fieldset>
      <legend>Filter Task</legend>
      
      <select name="filterTaskSelect"
        className='form-control'
        onChange={handleChange}>
          <option>None</option>
        {taskTitles.map((t) => (
          <option>{t}</option>
        ))}
      </select>
      <br />
      <input type='submit' className='btn btn-primary' value='Filter Tasks' />

    </fieldset>
  </form>
  );
};

export default FilterTaskForm;
