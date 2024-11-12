import styles from "./NovoFilme.module.css"
import { BsUpload } from "react-icons/bs";
import { PiFilmSlate } from "react-icons/pi";
import { PiCalendarBlank } from "react-icons/pi";
import { CiShoppingTag } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NovoFilme(){
    const [capaUrl,setCapaUrl] = useState('https://m.media-amazon.com/images/I/81arD48HpRL._AC_UF1000,1000_QL80_.jpg')
    const [titulo,setTitulo] = useState("");
    const [ano,setAno] = useState("");
    const [genero, setGenero] = useState("");
    const [descricao,setDescricao] = useState("");
    
    const navigate = useNavigate();

    const handleSalvar = () => {
        const novoFilme = {
            capaUrl,
            titulo,
            ano: parseInt(ano),
            genero,
            descricao
        };

        fetch("https://localhost:7016/api/Filmes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoFilme)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Filme criado:", data);
            navigate("/"); 
        })
        .catch(error => {
            console.error("Erro ao criar filme:", error);
        });
    };

    return(
            <div className={styles.NovoFilmeContainer}>

                    <div className={styles.upload}>
                        <button>
                            <BsUpload />
                            <p>Fazer upload</p>
                        </button>
                    </div>

                    <div className={styles.Formulario}>
                        <h1>Novo Filme</h1>
                            <div className={styles.Titulo}>
                                <PiFilmSlate />
                                <input 
                                type="text" 
                                placeholder="Título"
                                value={titulo}
                                onChange={(e)=>setTitulo(e.target.value)}
                                />
                            </div>

                            <div className={styles.AnoECategoria}>
                                <div className={styles.Ano}>
                                    <PiCalendarBlank />
                                    <input 
                                    type="text" 
                                    placeholder="Ano"
                                    value={ano} 
                                    onChange={(e)=>setAno(e.target.value)}
                                    />
                                </div>
                                <div className={styles.Categoria}>
                                    <CiShoppingTag />
                                    <input 
                                    type="text" 
                                    placeholder="Genero" 
                                    value={genero}
                                    onChange={(e)=>setGenero(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.Descricao}>
                                <input 
                                type="text" 
                                placeholder="Descrição" 
                                value={descricao}
                                onChange={(e)=>setDescricao(e.target.value)}
                                />
                            </div>

                            <div className={styles.Botoes}>
                                <button className={styles.BtnCancelar} >
                                    Cancelar
                                </button>

                                <button className={styles.BtnSalvar} onClick={handleSalvar}>
                                    Salvar
                                </button >
                            </div>
                           
                    </div>
            </div>
    )
}