import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Home = () => {
  const { closeOpenModal, closeOpenSidebar } = useGlobalContext();
  return (
    <main>
      <button onClick={closeOpenSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={closeOpenModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;
