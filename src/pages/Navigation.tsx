import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/tasklist'>Task List</NavLink>
        </li>
        <li>
          <NavLink to='/post'>Posts</NavLink>
        </li>
        <li>
          <NavLink to='/todo'>To-do</NavLink>
        </li>

        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
