import { useEffect, useState } from "react";
import { Filmes } from "../../Components/Filmes/Filmes"
import { Pesquisar } from "../../Components/Pesquisar/Pesquisar"
import styles from "../Home/Home.module.css"

interface filmesprops{
    id: number;
    titulo: string;
    genero: string;
    ano: number;
    avaliacao: number;
    capa: string; 
}

export function Home(){
    const [filmes, setFilmes] = useState<filmesprops[]>([]);

    useEffect(() => {
        fetch("https://localhost:7016/api/Filmes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json()) 
        .then(data => {
            setFilmes(data); 
        })
        .catch(error => {
            console.error("Erro ao fazer a requisição:", error); 
        });
    }, []);

    
    return(
        <div className={styles.homeContainer}>
           <div className={styles.pesquisar}>
                <h1>Explorar</h1>
                <Pesquisar/>
           </div>

           <div className={styles.filmes}>
                {filmes.map((filme)=>{
                    return(
                        <Filmes 
                        key={filme.id} 
                        avaliacao={filme.avaliacao} 
                        ano={filme.ano} 
                        titulo={filme.titulo}
                        genero={filme.genero}
                        capa={filme.capa}
                        />
                    )
                })}
           </div>
        </div>
    )
}