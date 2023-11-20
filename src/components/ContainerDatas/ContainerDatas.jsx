//React imports
import React from 'react'

//Component imports
import CardLembretes from '../CardLembrete/CardLembrete'

//Style imports
import { ContainerDatasStyled } from './ContainerDatas.style';

const ContainerDatas = ({ data, lembretes, handleDelete }) => {
    let dataMs = new Date(data);
    let dataTituloContainer = `${dataMs.getDate() + 1}/${dataMs.getMonth() + 1}/${dataMs.getFullYear()}`;
    return (

        <ContainerDatasStyled key={data}>
            <h3>{dataTituloContainer}</h3>

            <div>
                {
                    lembretes[data].map((lembrete) => {
                        return (
                            <CardLembretes lembrete={lembrete} handleDelete={handleDelete} />
                        );
                    })
                }
            </div>
        </ContainerDatasStyled>
    );
}

export default ContainerDatas

