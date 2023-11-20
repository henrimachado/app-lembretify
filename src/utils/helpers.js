export const agruparLembretes = (lembretes) => {
    
    let lembretesAgrupados = {};

    lembretes.forEach(lembrete => {
        const data = lembrete.data;

        if (!lembretesAgrupados[data]){
            lembretesAgrupados[data] = [];
        }

        lembretesAgrupados[data].push(lembrete);
    });

    return lembretesAgrupados;
}

