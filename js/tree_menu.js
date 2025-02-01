const radios = document.getElementsByTagName('input')

for (i=0;i<radios.length;i++){
    radios[i].addEventListener('click', toggle)
}

function toggle (){
    let folder=this.parentNode
    
    folder.children[1].children[0].classList.toggle('rotate')

    
    for (let i=0; i<folder.childElementCount; i++){
            if(folder.children[i].classList.contains('folder')){
            folder.children[i].classList.toggle('toggle')
            folder.children[i].classList.toggle('margin')
        }
    }

}

