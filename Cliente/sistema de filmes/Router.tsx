import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./src/Layouts/DefaultLayout";
import { Home } from "./src/Pages/Home/Home";
import { MeusFilmes } from "./src/Pages/MeusFilmes/MeusFilmes";
import { NovoFilme } from "./src/Pages/NovoFilme/NovoFilme";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/meusfilmes" element={<MeusFilmes/>}/>
                <Route path="/novofilme"  element={<NovoFilme/>}/>
            </Route>
        </Routes>
    )
}