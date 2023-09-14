const mobilemenu = document.querySelector('.mobile')
const mobilemenuDiv = document.querySelector('.mobile-menu')
const inputSpanish = document.querySelector('.lenguage')
const aboutme_es = document.querySelector('.aboutMe_es')
const aboutme_en = document.querySelector('.aboutMe_en')

 inputSpanish.addEventListener('click' , selectLanguage )

mobilemenu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu(){
    mobilemenuDiv.classList.toggle('toggle')

}

    function selectLanguage(){
        aboutme_en.classList.toggle('hide')
        aboutme_es.classList.toggle('hide')
       
}