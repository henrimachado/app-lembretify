const BASE_URL = env.BASE_URL;

//Objeto fetcher
export const fetcher = {
    async adicionarLembrete(lembrete) {
        try {
            const response = await fetch(`${BASE_URL}/lembrete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(lembrete)
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao cadastrar lembrete');
            }
        } catch (error) {
            throw new Error(`Erro ao enviar dados para o servidor: ${error.message}`);
        }
    },

    async selecionarLembretes() {
        try {
            const response = await fetch(`${BASE_URL}/lembrete`, {
                method: 'GET',
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao obter lembretes');
            }

        } catch (error) {
            throw new Error(`Erro ao obter dados do servidor: ${error.message}`);
        }
    },

    async deletarLembrete(id) {
        try {
            const response = await fetch(`${BASE_URL}/lembrete/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao excluir lembrete');
            }

        } catch (error) {
            throw new Error(`Erro ao excluir dados do servidor: ${error.message}`);
        }
    }
};

