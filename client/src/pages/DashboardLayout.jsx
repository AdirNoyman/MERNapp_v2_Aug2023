import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, NavBar, SmallSidebar } from '../components';
import { useState, useContext, createContext } from 'react';

const DashboardContext = createContext();

const DashboardLayout = () => {
  // temp
  const user = { name: 'John' };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDarkTheme = () => {
    setIsDarkTheme('Toggling dark theme');
  };

  const logoutUser = async (loggedUser) => {
    console.log(`Logging out user ${loggedUser}...`);
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSideBar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <NavBar />
            <div className="dashboard-page">
              {/* Outlet renders all of the subroutes of the dashboard route */}
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export default DashboardLayout;
