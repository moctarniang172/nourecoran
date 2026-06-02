import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/public/Accueil";
import Connexion from "../pages/public/Connexion";
import Inscription from "../pages/public/Indscription";
import Contact from "../pages/public/Contact";
import MainLayout from "../layouts/MainLayout";
import Caractéristiques from "../components/Caractéristiques";
import Dashboard from "../pages/eleves/Dashboard";
// import Dashbboard from "../pages/eleves/Dashboard";

function AppRoputes (){
    return(
        <>
        <Routes>
           <Route path="/" element={<MainLayout />}>
            <Route index element={<Accueil />} />
            <Route path="connexion" element={<Connexion />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        </>
    )
}
export default AppRoputes;