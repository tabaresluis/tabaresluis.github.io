
const startX=document.querySelector('#startX')
const startY=document.querySelector('#startY')
const finishX=document.querySelector('#finishX')
const finishY=document.querySelector('#finishY')
const boton=document.querySelector('#button')
const speeds=document.querySelectorAll('.speed-radio')
const pose=document.querySelectorAll('.pose')
const result=document.querySelector('.result')
const form=document.querySelector('.form')
const info_label=document.querySelector('#info-label')
const info_div=document.querySelector('#info-div')

info_label.addEventListener('click', toggle_info_div)

function toggle_info_div(){
    info_div.classList.toggle('hide')
}

const merchantVel=10.4164
const lightVel=5.5554
const fastVel=8.3331
const heavyVel=4.1665
const portaVel=2.7777

let distance=0;
let velocity=0;
let days=0
let hours=0
let min=0 
let sec=0

function validateFields(x1,y1,x2,y2){
    return (x1 && x2 && y1 && y2) ? true : false 
}
function validateRange(x1,y1,x2,y2){
    return (x1>0 && x1<100 && x2>0 && x2<100 && y1>0 && y1<100 && y2>0 && y2<100) ? true : false
}

function calculateDistance(x1,x2,y1,y2){
            let a=x2-x1
            let b=y2-y1
            distance=(Math.sqrt((a*a)+(b*b)))*10000
                if(distance==0){
                        distance=4999.872
                }
        
}

function calculateSpeed(){
    speeds.forEach(speed => {
        if(speed.checked){
            switch (speed.id){
                case 'merchant' : velocity=merchantVel
                break
                case 'fast' : velocity=fastVel
                break
                case 'light' : velocity=lightVel
                break
                case 'heavy' : velocity=heavyVel
                break
                case 'porta' :  velocity=portaVel
                break
            }
            speed.checked=false
        }
    })
    pose.forEach(lvl => {
        if(lvl.checked){
            switch (lvl.id){
                case 'lvl1' : velocity=velocity*1.1
                break
                case 'lvl2' : velocity=velocity*1.3
                break
                case 'lvl3' : velocity=velocity*1.5
                break
                case 'lvl4' : velocity=velocity*1.7
                break
                case 'lvl5' : velocity=velocity*2
                break
            }
            lvl.checked=false
        }
    })

}

function calculateTime(){
    let x1=Number(startX.value)
    let y1=Number(startY.value)
    let x2=Number(finishX.value)
    let y2=Number(finishY.value)
    if(validateFields(x1,x2,y1,y2)){
        if(validateRange(x1,x2,y1,y2)){
            calculateDistance(x1,x2,y1,y2)
            calculateSpeed()
            if(velocity){
                let time= (distance/velocity)
                let showtime=" El tiempo de viaje es: "
                
                if (time>=84400){
                    days=Math.floor(time/84400)
                    showtime=showtime+days+" D "
                    time=time%84400
                }
                if(time>=3600){
                    hours=Math.floor(time/3600)
                    showtime=showtime+hours+" h "
                    time=time%3600
                }
                if(time>=60){
                    min=Math.floor(time/60)
                    time=time%60
                }
                if(time){
                    sec=Math.floor(time)
                }
                showtime=showtime+min+" m "+sec+" s"
                result.innerHTML=showtime
                startX.value=null
                startY.value=null
                finishX.value=null
                finishY.value=null
                days=0
                hours=0
                min=0
                time=0
                distance=0
                velocity=0
            }
    else{
        result.innerHTML="Debe seleccionar un tipo de embarcacion"
    }
}
else{
    result.innerHTML="Las cordenadas deben ser entre 1 y 99"
}
}
else{
result.innerHTML="Las coordenadas son requeridas"
}
}



boton.addEventListener('click', calculateTime)

