import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function NotFound (): JSX.Element {
  return (
    <Fragment>
      <img className="not-found" src="img/not-found.jpg" width="700" height="400" alt="Not Found" />
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
