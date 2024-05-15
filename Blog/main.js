const content1 = document.querySelector('.first-content')
const content2 = document.querySelector('.second-content')
const content3 = document.querySelector('.third-content')
const content = document.querySelectorAll('section')
const heartIcon = document.querySelectorAll('.heart-icon')


function contentActiveRemove(){
    content.forEach((event) => {
        event.classList.remove('section-active')
    })
}

content1.addEventListener('click', () => {
    contentActiveRemove()
    content1.classList.toggle('section-active')
})

content2.addEventListener('click', () => {
    contentActiveRemove()
    content2.classList.toggle('section-active')
})

content3.addEventListener('click', () => {
    contentActiveRemove()
    content3.classList.toggle('section-active')
})

heartIcon.forEach((event) => {
    event.addEventListener('click', () => {
        event.classList.toggle('icon-active')
    })
})