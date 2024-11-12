import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "../Pesquisar/Pesquisar.module.css"

export function Pesquisar(){
    return(
        <div className={styles.pesquisar}>
            <HiMagnifyingGlass />
            <input type="text" placeholder="Pesquisar Filme" />
        </div>
    )
}