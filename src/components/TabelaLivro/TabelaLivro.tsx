import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/dataTable'
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import LivroRequests from '../../fetch/LivroRequests';

function TabelaLivro() {
    const [livros, setLivro] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await LivroRequests.listarLivro();
                setLivro(listaDeLivros);
            } catch (error) {
                console.error(`Erro ao buscar livro: ${error}`);
            }
        };
        fetchLivros();
    }, [livros])


    return (
        <>
            <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="titulo" header="nome do aluno" style={{ width: '25%' }}></Column>
                <Column field="autor" header="nome do livro" style={{ width: '25%' }}></Column>
                <Column field="editora" header="data de emprestimo" style={{ width: '25%' }}></Column>
                <Column field="isbn" header="data de devolução" style={{ width: '25%' }}></Column>
                <Column field="statusEmprestimo" header="status do livro" style={{ width: '25%' }}></Column>
            </DataTable>
        </>
    );
}

export default TabelaLivro;