//React
import { useState } from "react";

//Component imports
import LembretesForm from "../components/LembretesForm/LembretesForm";
import LembretesFeed from "../components/LembretesFeed/LembretesFeed";
import ToastWrapper from "../components/CustomToast/ToastWrapper";

//Style imports
import { DashboardStyled } from "../components/Dashboard/Dashboard.style";

//Assets import
import imagem from '../assets/lembretify.svg'

const Dashboard = () => {

    const [render, setRender] = useState(false);

    return (
        
        <ToastWrapper>
            <DashboardStyled>
                <h1 className="logo"><img src={imagem} alt="lembretify-logo" /></h1>
                <h2>Novo lembrete</h2>
                <LembretesForm setRender={setRender} />
                <LembretesFeed render={render} setRender={setRender} />
            </DashboardStyled>
        </ToastWrapper>
    )
}

export default Dashboard