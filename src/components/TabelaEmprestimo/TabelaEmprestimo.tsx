import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/dataTable'
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import EmprestimoRequests from '../../fetch/EmprestimoRequests';

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimo] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const listaDeEmprestimos = await EmprestimoRequests.listarEmprestimo();
                setEmprestimo(listaDeEmprestimos);
            } catch (error) {
                console.error(`Erro ao buscar emprestimo: ${error}`);
            }
        };
        fetchEmprestimos();
    }, [emprestimos]);


    return (
        <>
            <DataTable value={emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="nome" header="nome do aluno" body={(rowData) => rowData.aluno.nome} style={{ width: '25%' }}></Column>
                <Column field="titulo" header="nome do livro" body={(rowData) => rowData.livro.titulo} style={{ width: '25%' }}></Column>
                <Column field="dataEmprestimo" header="data de emprestimo" body={(rowData) => new Date(rowData.dataEmprestimo).toLocaleDateString('pt-BR')} style={{ width: '25%' }}/>
                <Column field="dataDevolucao" header="data de devolução" body={(rowData) => new Date(rowData.dataDevolucao).toLocaleDateString('pt-BR')} style={{ width: '25%' }}/>
                <Column field="statusEmprestimo" header="status do livro" style={{width: '25%'}}></Column>
            </DataTable>
        </>
    );
}

export default TabelaEmprestimo;