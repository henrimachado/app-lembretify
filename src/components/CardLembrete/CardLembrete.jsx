//React imports
import React from 'react'

//Style imports
import { CardLembreteStyled } from './CardLembrete.style'

//Lib imports
import { TrashIcon } from '@heroicons/react/24/solid'

const CardLembretes  = ({ lembrete, handleDelete }) => {
    return (
        <CardLembreteStyled

            key={lembrete.id}>
            
            <p>{lembrete.titulo} </p>
            <a href="#" className='delete-btn' onClick={(event) => {
                    if (!confirm("Tem certeza de que deseja excluir esse lembrete?")) {
                        event.preventDefault();
                    }
                    else {
                        handleDelete(lembrete.id);

                    }
                }} ><TrashIcon width={20} className='icon' /></a>
            

        </CardLembreteStyled>
    )
}

export default CardLembretes 
