// Importa o componente de cabeçalho da aplicação
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormAluno from "../../components/Formularios/FormAluno/FormAluno";
import FormLivro from "../../components/Formularios/FormLivro/FormLivro";

// Importa o componente que contém o formulário de login
import LoginForm from "../../components/Loginform/LoginForm";


// Importa o componente de rodapé da aplicação
import Rodape from "../../components/Rodape/Rodape";

// Componente funcional que representa a página de login
function PLogin() {
    return (
        <div className="pagina-grid">
            {/* Renderiza o cabeçalho da página */}
            <Cabecalho />

            {/* Renderiza o formulário de login */}
            <FormLivro />

            {/* Renderiza o rodapé da página */}
            <Rodape />
        </div>
    );
}

// Exporta o componente para que possa ser usado em outras partes da aplicação
export default PLogin;
