import styles from './navbar.module.css'
import Logo from '../../../img/Logo.png'

function Navbar(){
    return(
        <>
        <header className={styles.header}><a href="https://discord.gg/leagueofhu3br"><img src={Logo} alt="League of HU3"/></a></header>
        </>
    )
}

export default Navbar;