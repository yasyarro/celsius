import Cartwidget from './Cartwidget';
import './NavBar.css';

const NavBar = () => {
    return(

    <nav>
        
        <ul>
        
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">Mochilas Materas </a></li>
            <li><a href="#contact">Mochilas Urbanas</a></li>
            <li><a href="#about">Luncheras</a></li>
            <li><Cartwidget></Cartwidget></li> 
        </ul>
    </nav>
    );
};



export default NavBar;