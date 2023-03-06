import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NotFound (): JSX.Element {
  return (
    <Fragment>
      <h1>
        404.
        <br />
        <small>Page not Found</small>
      </h1>
      <Link to ="/">Go to main page</Link>
    </Fragment>
  );
}

export default NotFound;
