import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      {/* Display the child route's component */}
      <Outlet />
    </div>
  );
};

export default HomeLayout;
