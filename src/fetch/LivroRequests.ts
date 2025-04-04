import { SERVER_CFG } from '../appConfig';

class LivroRequest {
    static listarLivro() {
        throw new Error('Method not implemented.');
    }


    private serverURL;
    private routeListaLivro;
    private routeCadastroLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor(){

        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livro';
        this.routeCadastroLivro = '/novo/livro';
        this.routeAtualizaLivro = '/atualiza/livro';
        this.routeRemoveLivro = '/remove/livro';
    }

    async listarLivro() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if (respostaAPI.ok) {
                const listarDeAluno = await respostaAPI.json();
                return listarDeAluno;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }


    async cadstroLivro() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeCadastroLivro}`);

            if (respostaAPI.ok) {
                const cadastroDeLivro = await respostaAPI.json();
                return cadastroDeLivro;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

    async atualizaLivro() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeAtualizaLivro}`);

            if (respostaAPI.ok) {
                const atualizaDeLivro = await respostaAPI.json();
                return atualizaDeLivro;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

    async removeLivro() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeRemoveLivro}`);

            if (respostaAPI.ok) {
                const removeDeLivro = await respostaAPI.json();
                return removeDeLivro;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null
        }
    }

}

export default new LivroRequest;