import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  // Catch exceptions from child routes
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error page</h1>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;
