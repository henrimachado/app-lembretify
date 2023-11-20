//React imports
import { useEffect, useState } from 'react';

//Utils imports
import { fetcher } from '../../utils/fetcher';
import { agruparLembretes } from '../../utils/helpers';

//Component imports
import ContainerDatas from '../ContainerDatas/ContainerDatas';

//Style imports
import { LembretesFeedStyled } from './LembretesFeed.style';

//Lib imports
import  { useToast } from '../CustomToast/ToastWrapper';

const LembretesFeed = ({ render, setRender }) => {

    const [lembretes, setLembretes] = useState([]);
    const showToast = useToast();

    //Coleta os itens quando o componente é construído
    useEffect(() => {
        async function fetchLembretes() {
            try {
                const dadosLembretes = await fetcher.selecionarLembretes();
                setLembretes(agruparLembretes(dadosLembretes));
            } catch (error) {
                console.error('Falha ao carregar lembretes', error);
                showToast('Falha ao carregar lembretes', 'error')
            }
        }
        fetchLembretes();
    }, []);

    //Re-render useEffect
    useEffect(() => {
        if (render) {
            async function fetchLembretes() {
                try {
                    const dadosLembretes = await fetcher.selecionarLembretes();
                    setLembretes(agruparLembretes(dadosLembretes));
                } catch (error) {
                    console.error('Falha ao carregar lembretes', error);
                    showToast('Falha ao carregar lembretes.', 'error')
                }
            }
            fetchLembretes();
            setRender(false);
        }
    }, [render]);


    const handleDelete = async (id) => {
        try {
            let response = await fetcher.deletarLembrete(id);
            console.log('Lembrete excluído com sucesso!', response);
            showToast('Lembrete excluído com sucesso!', 'sucess')
            setRender(true);
        } catch (error) {
            console.error(error.message);
            showToast('Falha ao excluir lembrete.', 'error')
        }

    };


    let datasGerais = Object.keys(lembretes);
    let datasOrdenadas = [];

    datasGerais.map((data) => { datasOrdenadas.push(Number(data)) });
    datasOrdenadas = datasOrdenadas.sort();

    return (
        <LembretesFeedStyled>
            <h2>Meus lembretes</h2>
            {
                datasOrdenadas.length === 0 ? (
                    <p className='sem-lembretes'>Nenhum lembrete cadastrado.</p>
                ) : (
                    <div className='lembretes'>
                        {
                            datasOrdenadas.map((data) => {
                                return (
                                    <ContainerDatas data={data} lembretes={lembretes} handleDelete={handleDelete} />
                                )
                            })
                        }
                    </div>
                )
            }

        </LembretesFeedStyled>

    )

}

export default LembretesFeed


