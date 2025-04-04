import { SERVER_CFG } from '../appConfig';

class EmprestimoRequest {
    static listarEmprestimo() {
        throw new Error('Method not implemented.');
    }


    private serverURL;
    private routeListaEmprestimo;
    private routeCadastroEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;

    constructor(){

        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaEmprestimo = '/lista/emprestimos';
        this.routeCadastroEmprestimo = '/novo/emprestimo';
        this.routeAtualizaEmprestimo = '/atualiza/emprestimo';
        this.routeRemoveEmprestimo = '/remove/emprestimo';
    }

    async listarEmprestimo() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimo}`);

            if (respostaAPI.ok) {
                const listarDeAluno = await respostaAPI.json();
                return listarDeAluno;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }


    async cadstroEmprestimo() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeCadastroEmprestimo}`);

            if (respostaAPI.ok) {
                const cadastroDeEmprestimo = await respostaAPI.json();
                return cadastroDeEmprestimo;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

    async atualizaEmprestimo() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeAtualizaEmprestimo}`);

            if (respostaAPI.ok) {
                const atualizaDeEmprestimo = await respostaAPI.json();
                return atualizaDeEmprestimo;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

    async removeEmprestimo() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeRemoveEmprestimo}`);

            if (respostaAPI.ok) {
                const removeDeEmprestimo = await respostaAPI.json();
                return removeDeEmprestimo;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

}

export default new EmprestimoRequest();