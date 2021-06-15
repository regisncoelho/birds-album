var pixels = 0

var imgAves = []
imgAves.push("https://s3.amazonaws.com/media.wikiaves.com.br/images/5443/3445653q_a28722531482cb9915d420180197ceb7.jpg")
imgAves.push("https://s3.amazonaws.com/media.wikiaves.com.br/images/5343/3435022q_068044669d301a90b415da128cc35a93.jpg")
imgAves.push("https://s3.amazonaws.com/media.wikiaves.com.br/images/5443/3445209q_712cef17fdb2e712d885b751eccb3764.jpg")
imgAves.push("https://s3.amazonaws.com/media.wikiaves.com.br/images/2683/3862840q_c16b12eb1b40293cc0c60b97e4ccd8aa.jpg")
imgAves.push("https://s3.amazonaws.com/media.wikiaves.com.br/images/2683/3862841q_77c9a6bf3771d7154d220e039eb86a38.jpg")
imgAves.push("https://s3.amazonaws.com/media.wikiaves.com.br/images/5443/3445646q_5eb024c93e003969c27fd55ef9a9f4be.jpg")

var nameBirds = ["pica-pau-verde-barrado","maracanã-verdadeira","choca-de-sooretama","gibão-de-couro","urubu-de-cabeça-amarela","periquito-de-encontro-amarelo"]

var speciesBirds = ["Colaptes melanochloros","Primolius maracana","Thamnophilus ambiguus","Hirundinea ferruginea","Cathartes burrovianus","Brotogeris chiriri"]

var linkWiki = ["https://www.wikiaves.com.br/3445653","https://www.wikiaves.com.br/3435022","https://www.wikiaves.com.br/3445209","https://www.wikiaves.com.br/3862840","https://www.wikiaves.com.br/3862841","https://www.wikiaves.com.br/3445646"]

document.querySelector('.button-arrow.-right').addEventListener('click',function (){
    pixels = pixels - 150
    document.querySelector('.elements').style = `transform: translateX(${pixels}px)`
})

document.querySelector('.button-arrow.-left').addEventListener('click',function (){
    pixels = pixels + 150
    document.querySelector('.elements').style = `transform: translateX(${pixels}px)`
})

document.querySelector(".addBirds").addEventListener("click", addBirds)

function mostrarAves() {
    for (var i = 0; i < imgAves.length; i++){  
        var elementoAves = "<div class='polaroid'>" + "<a href=" + linkWiki[i] +" target='_blank'><img src=" + imgAves[i] +  "></a><br> <p>" + "<b>" + nameBirds[i] + "</b><small><i><br>" + speciesBirds[i] + "<br><small><small>Fonte: " + "<a href=" + linkWiki[i] + "'>" + linkWiki[i] + "</a></small></small></small></i></p></div>"

        document.querySelector(".elements").insertAdjacentHTML("beforeend",elementoAves)
        document.querySelector(".elements").style.transform = 'translateX(200px)'
    }
}
mostrarAves()

function addBirds() {
    let html = document.querySelector(".elements")
    html.innerHTML = ""

    var newImg = document.querySelector("#urlImagem").value
    if (newImg.length > 0) {
        imgAves.push(newImg)
        const inputField = document.querySelector("#urlImagem")
        inputField.value = ""
    }
        
    var newName = document.querySelector("#nomePopular").value
    if (newName.length > 0) {
        nameBirds.push(newName)
        const inputField2 = document.querySelector("#nomePopular")
        inputField2.value = ""
    }

    var newSpecies = document.querySelector("#nomeEspecie").value
    if (newSpecies.length > 0) {
        speciesBirds.push(newSpecies)
        const inputField3 = document.querySelector("#nomeEspecie")
        inputField3.value = ""
    }

    var newUrl = document.querySelector("#urlFonte").value
    if (newUrl.length > 0) {
        linkWiki.push(newUrl)
        const inputField4 = document.querySelector("#urlFonte")
        inputField4.value = ""
    }

    mostrarAves()   
}