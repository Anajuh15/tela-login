import { SERVER_CFG } from '../appConfig';

class AlunoRequests {

    private serverURL;
    private routeListaAluno;
    private routeCadastraAluno;
    private routeAtualizaAluno;
    private routeRemoveAluno;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaAluno = '/lista/alunos'; //Rota configurada
        this.routeCadastraAluno = '/novo/aluno'; // Rota cofigurada
        this.routeAtualizaAluno = '/atualiza/aluno'; // Rota configurada
        this.routeRemoveAluno = '/remove/aluno';// Rota configurada
    }
    /**
     * Função que busca a lista de alunos na API
     */
    async listarAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);

            if (respostaAPI.ok) {
                const listaDeAlunos = await respostaAPI.json();
                return listaDeAlunos;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: $(error)`);
            return null;
        }
    }
   
    async CadastroAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeCadastraAluno}`);

            if (respostaAPI.ok) {
                const CadastroAlunos = await respostaAPI.json();
                return this.CadastroAlunos;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: $(error)`);
            return null;
        }
    }


}

export default new AlunoRequests();