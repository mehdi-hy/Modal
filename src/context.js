import React, { useState, useContext } from 'react';
import { links, social } from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState(links);
  const [icons, setIcons] = useState(social);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        icons,
        setIcons,
        closeOpenModal,
        closeOpenSidebar,
        isModalOpen,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
