function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //se campoPesquisa for uma string vazia
  if (campoPesquisa == "") {
    section.innerHTML = `
      <div class="item-resultado">
        <p style="text-align: center">
          Campo vazio! <br> Digite o nome de algum atleta no campo acima!
        </p>
      </div>
    `
    return
  }
  //transforma o que for digitado no campo pesquisa em letra minúscula
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";
  
  // Inicializa uma string vazia para armazenar os resultados do título, da descrição e tags.
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada item (dado) no array de dados.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // se titulo includes camposPequisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado da pesquisa, formatando os dados do item.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <div class="item-detalhe">
            <div class="imagem-perfil">
              <img src="${dado.imagem}" alt="Foto de ${dado.titulo}">
            </div>
            <div class="item-dados">
              <p class="descricao-meta">${dado.descricao}</p>
              <a class="link-ext" href="${dado.link}" target="_blank">Saiba mais &#8599</a>
            </div>
          </div>
        </div>
      `;
    }

    // se resultado não encontrar nada
    if (!resultados) {
      resultados = `
        <div class="item-resultado">
          <p style="text-align: center">
            Nada foi encontrado! <br>Faça sua pesquisa novamente.
          </p>
        </div>
      `
    }
  }

  // Atribui o HTML gerado para a seção de resultados.
  section.innerHTML = resultados;
}