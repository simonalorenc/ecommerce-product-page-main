const headerMenu = document.querySelector('.header__menu')
const header = document.querySelector('.header__text')

const hamburgerLogo = document.createElement('div')
hamburgerLogo.classList.add('hamburger-logo')

const arrowNext = document.createElement('div')
arrowNext.classList.add('arrow-next')
const arrowPrevious = document.createElement('div')
arrowPrevious.classList.add('arrow-previous')

const bigContainerForPhoto = document.querySelector('.photo__big')

if(window.innerWidth <= 1220) {
    addHamburgerLogo()
}

if(window.innerWidth <= 650) {
    addArrows()
}

const hideMenu = () => {
    if (window.innerWidth <= 1220) {
        addHamburgerLogo()
    } else {
        removeHamburgerLogo()
    }
}

window.addEventListener('resize', hideMenu)

function addHamburgerLogo() {
    headerMenu.style.display = 'none'
    header.insertBefore(hamburgerLogo, header.firstChild)
}

function removeHamburgerLogo() {
    headerMenu.style.display = 'flex'
    header.removeChild(hamburgerLogo)
}

function addArrows() {
    bigContainerForPhoto.append(arrowNext)
    bigContainerForPhoto.append(arrowPrevious)
}

function hideArrows() {
    bigContainerForPhoto.removeChild(arrowNext)
    bigContainerForPhoto.removeChild(arrowPrevious)
}

const addOrHideArrows = () => {
    if (window.innerWidth <= 650) {
        addArrows()
    } else {
        hideArrows()
    }
}

window.addEventListener('resize', addOrHideArrows)

const smallPhotos = document.querySelectorAll('.small')
console.log(smallPhotos)

function unselectedPhoto() {
    smallPhotos.forEach(smallPhoto => smallPhoto.classList.remove('selected-photo'))
}

smallPhotos.forEach(smallPhoto => smallPhoto.addEventListener('click', () => {
    unselectedPhoto()
    smallPhoto.classList.add('selected-photo')
    const bigImage = document.querySelector('.big')
    const selectedImage = document.querySelector('.selected-photo')
    console.log(selectedImage.src)
    const newSelectedImage = selectedImage.src
    bigImage.src = selectedImage.src
    })
)

arrowNext.addEventListener('click', () => {
    const bigImage = document.querySelector('.big')
    //tablica ze zdjeciami
    console.log(bigImage)
    console.log('arrow next clicked')
})