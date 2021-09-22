import './NavBar.css';


const NavBar = () => {
    return(
    <nav>
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">Mochilas Materas </a></li>
            <li><a href="#contact">Mochilas Urbanas</a></li>
            <li><a href="#about">Luncheras</a></li>
        </ul>
    </nav>
    );
};

export default NavBar;
