import { useState } from 'react';
import estilo from './FormAluno.module.css';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';

function FormEmprestimo() {
    const [formData, setFormData] = useState({
        idAluno: '',
        idLivro: '',
        dataEmprestimo: '',
        dataDevolucao: '',
        statusEmprestimo: '',
        
    });
    

    // Função para atualizar o state
    const handleChange = (nome: string, valor: string) => {
        setFormData({ ...formData, [nome]: valor });
    };
//função para recuparar dados do formulário e enviar
    const handleSubmit = async (formData: { idAluno: number; idLivro: number; dataEmprestimo: Date; dataDevolucao: Date; statusEmprestimo: string; }) => {
        const resposta = await EmprestimoRequests.enviaFormularioEmprestimo(JSON.stringify(formData));
        if(resposta) {
            alert('Emprestimo cadastrado com sucesso.');
        } else {
            alert('Erro ao cadastrar emprestimo.');
        }
    }

    return (
        <section className={estilo['sec-form-emprestimo']}>
            <h1>Cadastro Emprestimo</h1>
            <form action="post" onSubmit={(e) => { e.preventDefault(); handleSubmit(formData); }}
                    className={estilo['form-emprestimo']}
                >
                    <label htmlFor="">
                        idAluno
                        <input
                            type="number"
                            name="idAluno"
                            id="idAluno"
                            required
                            minLength={0}
                            onChange={(e) => handleChange("idAluno", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        idLivro
                        <input
                            type="number"
                            name="idLivro"
                            id="idLivro"
                            required
                            minLength={0}
                            onChange={(e) => handleChange("idLivro", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Data do Emprestimo
                        <input
                            type="date"
                            name="dataEmprestimo"
                            id="dataEmprestimo"
                            onChange={(e) => handleChange("dataEmprestimo", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Data Devolução
                        <input
                            type="date"
                            name="dataDevolucao"
                            id="dataDevolucao"
                            minLength={6}
                            onChange={(e) => handleChange("dataDevolucao", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Status do Emprestimo
                        <input
                            type="email"
                            name="email"
                            id="email"
                            minLength={11}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Celular
                        <input
                            type="number"
                            name="celular"
                            id="celular"
                            minLength={10}
                            maxLength={13}
                            onChange={(e) => handleChange("celular", e.target.value)}
                        />
                    </label>
                <input type="submit" value="ENVIAR" />
            </form>
        </section>
    );
}

export default FormEmprestimo;