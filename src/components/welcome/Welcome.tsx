import estilo from './Welcome.module.css';
import { useEffect, useState } from 'react';
import AlunoRequests from '../../fetch/AlunoRequests';

function Welcome() {
  const [alunos, setAlunos] = useState('');

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const listadeAlunos = await AlunoRequests.listarAlunos();
        setAlunos(listadeAlunos);
        console.table(alunos);
      } catch (error) {
        console.error('Erro ao buscar alunos: ', error);

      }
    };
    fetchAlunos();
  }, [alunos]);

  return (
    <main className={estilo.principal}>
      <p>Seja bem-vindo(a)á biblioteca</p>
      <p>Para ter uma melhor experiência, faça o login no sistema</p>
    </ main>


  );
}
export default Welcome;
