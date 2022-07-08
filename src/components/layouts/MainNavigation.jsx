import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext); 
    return ( 
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">All Meetups</Link></li>
                </ul>
                <ul>
                    <li><Link to="/new">Add New Meetup</Link></li>
                </ul>
                <ul>
                    <li><Link to="/favorite">
                        Favorites
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                    </Link></li>
                </ul>
            </nav>
        </header>
     );
}

export default MainNavigation;