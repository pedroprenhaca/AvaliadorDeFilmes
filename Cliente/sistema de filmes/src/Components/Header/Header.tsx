import Logo from '../../assets/Logo.svg'
import { LuPopcorn } from "react-icons/lu";
import { PiFilmSlate } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";
import styles from '../Header/Header.module.css';
import { useNavigate } from 'react-router-dom';

export function Header(){
    const navigate = useNavigate();
    return(
        <div className={styles.container}>
            <div>
                <img src={Logo} alt="Letra a e letra b em roxo" />
            </div>

            <div className={styles.btnContainer}>
                <div className={styles.btnPopCorn}>
                    <button onClick={()=> navigate("/")}>
                        <LuPopcorn />
                        Explorar
                    </button>
                </div>

                <div className={styles.btnFilmSlate}>
                    <button onClick={()=>navigate("/meusfilmes")}>
                        <PiFilmSlate />
                        Meus Filmes
                    </button>
                </div>
            </div>

            <div className={styles.perfilContainer}>
                <div className={styles.perfil}>
                    <h1>Olá,Pedro</h1>
                    <img src="https://avatars.githubusercontent.com/u/62861100?s=400&u=61d05279c7523873ff338ee78fc7c559caa5bed6&v=4" alt="" />
                </div>

                <div className={styles.sair}>
                    <PiSignOut />
                </div>
            </div>
        </div>
    )
}