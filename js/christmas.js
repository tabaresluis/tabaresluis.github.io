const mes=document.getElementById('mes')
const sem=document.getElementById('sem')
const dia=document.getElementById('dia')
const hora=document.getElementById('hora')
const min=document.getElementById("min")
const sec=document.getElementById("sec")

let mesfaltante=0
let semfaltante=0
let diafaltante=0
let horafaltante=0
let minfaltante=0
let secfaltante=0
let intervalo



function cambiarTiempo(){
intervalo= setInterval(cambiarTiempo,1000)
const hoy = new Date()
const navidad= new Date(2022,11,25)



if(hoy.getDate()<25){
    mesfaltante=navidad.getMonth()-hoy.getMonth()
    if((navidad.getDate()-hoy.getDate())%7!=0){
    semfaltante=Math.floor((navidad.getDate()-hoy.getDate())/7)
    }else{
        semfaltante=((navidad.getDate()-hoy.getDate())/7)-1
    }
    let diaMasSemana=hoy.getDate()+(semfaltante*7)
    if(hoy.getHours() ==0 && hoy.getMinutes()==0 && hoy.getSeconds()==0){
        diafaltante=navidad.getDate()-diaMasSemana
    }
    else{
        diafaltante=navidad.getDate()-diaMasSemana-1
        horafaltante=23-hoy.getHours()
        minfaltante=59-hoy.getMinutes()
        secfaltante=59-hoy.getSeconds() 
    }
}
else{
    if(hoy.getMonth()==11){
        mesfaltante=11
    }
    else{
    mesfaltante=navidad.getMonth()-hoy.getMonth()-1
    }
    semfaltante=Math.floor((55-hoy.getDate())/7)
    if(hoy.getHours() ==0 && hoy.getMinutes()==0 && hoy.getSeconds()==0){
    diafaltante=30+navidad.getDate()-hoy.getDate()-(semfaltante*7)
    }
    else{
        diafaltante=30+navidad.getDate()-hoy.getDate()-(semfaltante*7)-1
        horafaltante=23-hoy.getHours()
        minfaltante=59-hoy.getMinutes()
        secfaltante=59-hoy.getSeconds()
    }
}

mes.innerHTML=""+mesfaltante
sem.innerHTML=""+semfaltante
dia.innerHTML=""+diafaltante
hora.innerHTML=""+horafaltante
min.innerHTML=""+minfaltante
sec.innerHTML=""+secfaltante
}

cambiarTiempo()





