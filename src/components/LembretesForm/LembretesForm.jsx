//React imports
import React, { useEffect, useState, useRef } from 'react';

//Utils imports
import { fetcher } from '../../utils/fetcher';

//Lib imports
import { PlusIcon } from "@heroicons/react/24/solid"

//Style imports
import { LembretesFormsStyled } from './LembretesForms.style';

//Component imports
import  { useToast } from '../CustomToast/ToastWrapper';


const LembretesForm = ({ setRender }) => {

    const [titulo, setTitulo] = useState('');
    const [dataRaw, setDataRaw] = useState('');
    const [dataMin, setDataMin] = useState('');
    const formRef = useRef();
    const showToast = useToast();

    useEffect(() => {
        setDataMin(handleMinimumDate());
        const interval = setInterval(() => {
            setDataMin(handleMinimumDate())
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, []);


    //Handler para o envio de um novo lembrete
    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = `${Date.parse(dataRaw)}`;
        let lembrete = { titulo, data };
        console.log(JSON.stringify(lembrete));

        try {
            let response = await fetcher.adicionarLembrete(lembrete);
            console.log('Lembrete adicionado com sucesso!', response);
            showToast('Lembrete adicionado com sucesso!', 'sucess');
            setRender(true);

            formRef.current.reset();
        } catch (error) {
            console.error(error.message);
            showToast('Falha ao adicionar lembrete.', 'error')

        }

    };

    //Handler para a data mínima aceitável
    const handleMinimumDate = () => {
        let amanha = new Date();
        amanha.setDate(amanha.getDate() + 1);

        let amanhaFormatada = amanha.toISOString().split('T')[0];
        return amanhaFormatada;
    }

    return (
        
        <LembretesFormsStyled onSubmit={handleSubmit}
            ref={formRef}>
             
            <div >
                <label htmlFor="titulo">Título</label>
                <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    required
                    placeholder="Ex.: Trocar as lâmpadas do corredor"
                    onChange={(e) => setTitulo(e.target.value)}
                    autoComplete='off'
                    pattern='.*\S.*'
                />
            </div>

            <div>
                <label htmlFor="data">Data</label>
                <input
                    type="date"
                    name="data"
                    id="data"
                    required
                    min={dataMin}
                    onChange={(e) => setDataRaw(e.target.value)}
                    autoComplete='off'
                />
            </div>

            <button type='submit'>
                <PlusIcon width={20} />
                <span>Adicionar lembrete</span>
            </button>
        </LembretesFormsStyled>
    );

}

export default LembretesForm