import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (

        <ul className="nav nav-tabs">           
            <li role="presentation"> 
                <IndexLink to="/" activeClassName="active">
                Home
                </IndexLink>
            </li>
            <li role="presentation"> 
                <Link to="/users" activeClassName="active">
                Users {loading && <LoadingDots interval={100} dots={20}/>}
                </Link>
            </li>          
        </ul>  
  );
};


Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

