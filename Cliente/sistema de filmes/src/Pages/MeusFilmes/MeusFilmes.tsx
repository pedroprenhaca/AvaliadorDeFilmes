    import { Pesquisar } from "../../Components/Pesquisar/Pesquisar";
    import { FiPlus } from "react-icons/fi";
    import styles from "./MeusFilmes.module.css"
    import { useNavigate } from "react-router-dom";
   



    export function MeusFilmes(){
    

        const navigate = useNavigate();

        
        return(
            <div className={styles.MeusFilmesContainer}>
                <div className={styles.TituloEPesquisar}>
                    <div className={styles.titulo}>
                        <h1>Meus Filmes</h1>
                    </div>

                    <div className={styles.pesquisar}>
                        <Pesquisar/>
                        <button onClick={() => navigate("/novofilme")} className={styles.button} > 
                            <FiPlus className={styles.iconePlus} />
                            Novo
                        </button>
                    </div>
                </div>

                <div className={styles.FilmesContainer}>
               
                        <p>Nenhum filme encontrado</p>

                </div>
            </div>
        )
    }