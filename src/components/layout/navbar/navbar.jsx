import styles from './navbar.module.css'
import Logo from '../../../img/Logo.png'

function Navbar(){
    return(
        <>
        <header className={styles.header}>
            <a href="https://discord.gg/leagueofhu3br"><img src={Logo} alt="League of HU3"/></a>
            <section>
                <ul>
                    <li>Fichas</li>
                    <li>Livro do Jogador</li>
                    <li>Mesas</li>
                </ul>
            </section>
            </header>
        </>
    )
}

export default Navbar;