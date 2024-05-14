const focoButton = document.querySelector('.app__card-button--foco')
const curtoButton = document.querySelector('.app__card-button--curto')
const longoButton = document.querySelector('.app__card-button--longo')
const html = document.querySelector('html')
const titulo = document.querySelector('.app__title')
const imagem = document.querySelector('.app__image')
const buttons = document.querySelectorAll('.app__card-button') 
let seconds = 1500

function changeDataContexto(context) {
    html.setAttribute('data-contexto', context)
    imagem.setAttribute('src', `imagens/${context}.png`)
    buttons.forEach((context) => {
        context.classList.remove('active')
    })

    switch (context) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade <br> <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
    
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície <br> <strong class="app__title-strong">Faça uma pausa longa!</strong>`
            break;
    }
}

focoButton.addEventListener('click', () => {
    changeDataContexto('foco')
    focoButton.classList.add('active')
    seconds = 1500
})

curtoButton.addEventListener('click', () => {
    changeDataContexto('descanso-curto')
    curtoButton.classList.add('active')
    seconds = 300
})

longoButton.addEventListener('click', () => {
    changeDataContexto('descanso-longo')
    longoButton.classList.add('active')
    seconds = 900
})

