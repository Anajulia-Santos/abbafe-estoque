function carregarProdutos() {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const produtosTable = document.querySelector("#produtosTable tbody");

    produtosTable.innerHTML = ""; // Limpa a tabela

    produtos.forEach((produto, index) => {
        let row = produtosTable.insertRow();

        row.insertCell(0).textContent = produto.nome;
        row.insertCell(1).textContent = produto.valorFornecedor;
        row.insertCell(2).textContent = produto.valorVenda;
        row.insertCell(3).textContent = produto.quantidade;
        
        // A imagem em base64 é usada diretamente no atributo 'src'
        row.insertCell(4).innerHTML = `<img src="${produto.foto}" alt="${produto.nome}" width="150">`;

        let actionsCell = row.insertCell(5);
        actionsCell.innerHTML = `
            <button onclick="editarProduto(${index})">Editar</button>
            <button onclick="excluirProduto(${index})">Excluir</button>
        `;
    });
}

function editarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    let produto = produtos[index];

    document.getElementById("nome").value = produto.nome;
    document.getElementById("valorFornecedor").value = produto.valorFornecedor;
    document.getElementById("valorVenda").value = produto.valorVenda;
    document.getElementById("quantidade").value = produto.quantidade;

    excluirProduto(index); // Exclui para ser adicionado novamente após a edição
}

function excluirProduto(index) {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));

    carregarProdutos(); // Atualiza a tabela
}

document.addEventListener("DOMContentLoaded", carregarProdutos);
