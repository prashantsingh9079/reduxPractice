import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authAction } from '../store';

const Header = () => {
  const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
  const dispatch = useDispatch()
  function logoutHandler()
  {
    dispatch(authAction.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && <li>
            <a href='/'>My Products</a>
          </li>}
          {isAuthenticated && <li>
            <a href='/'>My Sales</a>
          </li>}
          {isAuthenticated && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
