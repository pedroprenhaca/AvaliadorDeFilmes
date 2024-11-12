import { FaStar } from "react-icons/fa6";
import styles from ".//Filmes.module.css"

interface FilmeProps {
    titulo: string;
    genero: string;
    ano: number;
    avaliacao: number;
    capa: string; 
  }

export function Filmes({titulo,genero,ano,avaliacao,capa}:FilmeProps){
    console.log(capa)
    return(
        <div className={styles.filmesContainer} 
        >
            <div className={styles.tag}>
                <p>{avaliacao}/5</p>
                <FaStar />
            </div>

            <div className={styles.tituloCategoria}>
                <h1>{titulo}</h1>
                <div className={styles.categoria}>
                    <p>{genero}</p>
                    <p>{ano}</p>
                </div>
            </div>
        </div>
    )
}