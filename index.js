//informações que serão modificadas em cada click
var informações = [
    {
        id:"tanya",
        nome:"Tanya Sinclair",
        testemunho:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum optio nobis ab, facilis, nulla placeat repellendus soluta, fugiat voluptatum repudiandae consequuntur ea tempore dolor dolores vel voluptate debitis incidunt.",
        foto: "images/image-tanya.jpg",
        job:"Ux designer"
    },
    {
        id:"John",
        nome: "John Tarkpor",
        testemunho:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum optio nobis ab, facilis, nulla placeat repellendus soluta, fugiat voluptatum repudiandae consequuntur ea tempore dolor dolores vel voluptate debitis incidunt.",
        foto: "images/image-john.jpg",
        job:"CEO de empresa"
    }
]

//capturando elementos HTML
var elementNome = document.getElementById("nome")
var elementTestemunho = document.getElementById("texto")
var elementFoto = document.getElementById("imagem")
var elementJob = document.getElementById("job")


addEventListener("click", (e) => {

if(e.target.classList.contains("proximo") || e.target.classList.contains("anterior")){
    if(elementNome.textContent === "Tanya Sinclair"){
        elementNome.textContent = informações[1].nome
        elementTestemunho.textContent = informações[1].testemunho
        elementFoto.setAttribute("src", `${informações[1].foto}`)
        elementJob.textContent = informações[1].job
    } else {
        elementNome.textContent = informações[0].nome
        elementTestemunho.textContent = informações[0].testemunho
        elementFoto.setAttribute("src", `${informações[0].foto}`)
        elementJob.textContent = informações[0].job
    }
}

})

