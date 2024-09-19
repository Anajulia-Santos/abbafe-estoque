document.getElementById("produtoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let fotoInput = document.getElementById("foto");
    let file = fotoInput.files[0];
    
    let reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = function() {
        let produto = {
            nome: document.getElementById("nome").value,
            valorFornecedor: document.getElementById("valorFornecedor").value,
            valorVenda: document.getElementById("valorVenda").value,
            quantidade: document.getElementById("quantidade").value,
            foto: reader.result // A imagem em base64
        };

        let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        produtos.push(produto);
        localStorage.setItem("produtos", JSON.stringify(produtos));

        alert("Produto cadastrado com sucesso!");
        fotoInput.value = ""; // Limpa o campo de upload de imagem
    };

    reader.onerror = function(error) {
        console.log('Erro ao ler a imagem: ', error);
    };
});
