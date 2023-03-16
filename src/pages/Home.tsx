import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/tasklist');
  };

  return (
    <div className='page-style'>
      <h1>Home</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Home;
