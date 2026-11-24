/*=========================== 
1)pegar os elementos no html
  ===========================*/

// Onde os cars vão aparecer
const listaCursos = document.querySelector("#listaCursos");

// Campo de busca
const buscaCursos = document.querySelector("#buscaCursos");

/*=========================== 
2) Criar uma variável para guarda os cursos
  ===========================*/
let cursos =[]; // aqui vai ficar a lista carregada do JSON

/*=========================== 
3)Funcão para carregar o JSON
  ===========================*/
function carregarCursos(){
    // busca o arquivo cursos.json (como se fosse uma mini API)
    const resposta = fetch("../DATA/cursos.json")

    // transforma o JSON em dados que o JS entende
    cursos = resposta.json();

    //depois de carregar, já renderiza na tela
    renderizarCursos(cursos);
} 

/*=========================== 
4) Função para criar os cards na tela (DOM)
  ===========================*/
  function renderizarCursos(lista){
    //limpa o conteúdo antes de desenhar de novo 
    listaCursos.innerHTML = ""

    //para cada curso da lista, cria um card
    lista.array.forEach((curso)=> {
        //  cria um elemento HTML <div>
        const card = document.cvreatElement("div");

        //coloca uma classe (para o CSS estelizar)
        card.classList.add("card-curso");

        //coloca o conteúdo dentro do CARD DE CURSO
        card.innerHTML = `
        <h3>${curso.titulo}</h3>
        <img src="${curso.img}">
        <p>${curso.descricao}</p>
        <p>${curso.cargaHoraria}h</p>
        `

        //COLOCA O CARD EDENTRO DA LISTA DE CURSOS
        listaCursos.appendChild(card);
        
        // evento do botão "Ver detalhes"
        const btn = card.querySelector("#btn-detalhes");
        btn.addEventListener("click", function(){
            alert("Voce escolheu: "+curso.titulo)
        })

    })
}

/*=========================== 
5) Busca: Filtrar qa lista quando digitar
  ===========================*/
  buscaCursos.addEventListener("input", function(){
    //pega o que a pessoa digitou no campo busca e guarda variável
    const texto = buscaCursos.Value.toLowerCase();

    const filtrados = cursos.filter((texto)=>
    curso.titulo.toLowerCase().includes(texto)
    );

    renderizarCursos(filtrados);
  })

  /*=========================== 
6) chama a função para iniciar tudo
  ===========================*/
carregarCursos();