const headerMenu = document.querySelector('.header__menu')
const header = document.querySelector('.header__text')

const hamburgerLogo = document.createElement('div')
hamburgerLogo.classList.add('hamburger-logo')

const closeMenu = document.createElement('div')
closeMenu.classList.add('close-menu')

const arrowNext = document.createElement('div')
arrowNext.classList.add('arrow-next')
const arrowPrevious = document.createElement('div')
arrowPrevious.classList.add('arrow-previous')

const menuOptions = document.querySelectorAll('.header__menu-option')

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
    if (header.contains(hamburgerLogo)) {
        header.removeChild(hamburgerLogo);
    }
    headerMenu.style.display = 'flex';
}

hamburgerLogo.addEventListener('click', () => {
    headerMenu.classList.add('mobile-menu')
    headerMenu.style.display = 'flex'
    menuOptions.forEach((option) => {
        option.style.color = 'black'
        option.style.fontWeight = '700'
    })
    headerMenu.appendChild(closeMenu)
})

closeMenu.addEventListener('click', () => {
    if (headerMenu.contains(closeMenu)) {
        headerMenu.removeChild(closeMenu)
    }
    menuOptions.forEach((option) => {
        option.style.color = 'var(--color-text)'
        option.style.fontWeight = '400'
    })
    headerMenu.classList.remove('mobile-menu')
    headerMenu.style.display = 'none'
})

function addArrows() {
    bigContainerForPhoto.append(arrowNext)
    bigContainerForPhoto.append(arrowPrevious)
}

function hideArrows() {
    if (bigContainerForPhoto.contains(arrowNext)) {
        bigContainerForPhoto.removeChild(arrowNext)
    }
    if (bigContainerForPhoto.contains(arrowPrevious)) {
        bigContainerForPhoto.removeChild(arrowPrevious)
    }
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

const slidesContainer = document.querySelector('.photo__small')
const slides = [...slidesContainer.children]
const slidesArray = Array.from(slides).map(slide => slide.src)

function currentIndexOfPhoto() {
    const activeSlide = document.querySelector('.big')
    const bigSlide = activeSlide.src
    let currentIndex = slidesArray.indexOf(bigSlide)
    return currentIndex
}

arrowNext.addEventListener('click', () => {
    let activeSlide = document.querySelector('.big')
    let index = currentIndexOfPhoto() + 1
    activeSlide.src = slidesArray[index]
    if (index > 3) {
        index = 0
        activeSlide.src = slidesArray[index]
    }
})

arrowPrevious.addEventListener('click', () => {
    let activeSlide = document.querySelector('.big')
    let index = currentIndexOfPhoto() - 1
    activeSlide.src = slidesArray[index]
    if (index < 0) {
        index = 3
        activeSlide.src = slidesArray[index]
    }
})

const popup = document.querySelector('.popup')
const bigPhoto = document.querySelector('.big')

const arrowNextPopup = document.createElement('div')
arrowNextPopup.classList.add('arrow-next')
const arrowPreviousPopup = document.createElement('div')
arrowPreviousPopup.classList.add('arrow-previous')

const activePopupPhoto = document.querySelector('.popup-big')

function addArrowsForPopup() {
    popup.appendChild(arrowNextPopup)
    popup.appendChild(arrowPreviousPopup)
}

bigPhoto.addEventListener('click', () => {
    popup.classList.remove('hidden')
    addArrowsForPopup()
})

arrowNextPopup.addEventListener('click', () => {
    const bigPopupPhoto = activePopupPhoto.src
    let currentIndex = slidesArray.indexOf(bigPopupPhoto)
    let index = currentIndex + 1
    activePopupPhoto.src = slidesArray[index]
    if (index > 3) {
        index = 0
        activePopupPhoto.src = slidesArray[index]
    }
})

arrowPreviousPopup.addEventListener('click', () => {
    const bigPopupPhoto = activePopupPhoto.src
    let currentIndex = slidesArray.indexOf(bigPopupPhoto)
    console.log(currentIndex)
    let index = currentIndex - 1
    console.log(index)
    if (index < 0) {
        index = 3
        activePopupPhoto.src = slidesArray[index]
        console.log(index)
    }
    activePopupPhoto.src = slidesArray[index]
})


