import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Welcome from "../../components/welcome/Welcome";
import Rodape from "../../components/Rodape/Rodape";
import TabelaAluno from "../../components/TabelaAluno/TabelaAluno";
import TabelaEmprestimo from "../../components/TabelaEmprestimo/TabelaEmprestimo";


function PHome() {
    return (
        <>
            <Cabecalho />
            <TabelaAluno/>
            <Rodape />
        </>
     );

}

export default PHome;