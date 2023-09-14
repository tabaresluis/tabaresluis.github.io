const bloque1= document.querySelector('.bloque1')
const bloque2= document.querySelector('.bloque2')
const bloque3= document.querySelector('.bloque3')
const buyButton= document.querySelector('#comprar')
const divSubtotal= document.querySelector('.subtotal')
const date=document.querySelector('#date')
const today= new Date()
const cashier = document.querySelector('#cashier').innerHTML
const billCashier= document.querySelector('#bill-cashier')
const billBody=document.querySelector(".bill-body")
const printButton=document.querySelector(".print-button")
const infoDiv=document.querySelector('#info-div')
const infoBubble=document.querySelector('.speech-bubble')

let OrderCounter=1
let counter =1
let startPosition
let finalPosition
let nodeItem = []
let productList = []
let shopList=[]
let deleteItem
let subtotalArray = []



infoDiv.addEventListener('mouseover',showInfoDiv)
infoDiv.addEventListener('mouseleave',hideInfoDiv)

function showInfoDiv(){
  infoBubble.classList.remove('inactive')
}
function hideInfoDiv(){
  infoBubble.classList.add('inactive')
}
function subtotalCalc(array){
  let subtotal=0
  for(i=0;i<array.length;i++){
    subtotal=subtotal+array[i]
  }
  return subtotal
}

function twoDecimals(num) {
  let numberTwoDecimals
  if (Number.isInteger(num)) {
  return num
  }
  
  const cadena1= num.toString().split('.')[1]
  if(cadena1.length>2){
  const cadena2 = num.toString().split('.')[0]
  const cadena3 = (num.toString().split('.')[1]).split('')
  if(Number(cadena3[2]) >5 && Number(cadena3[1]) <9){
    cadena3[1]= (Number(cadena3[1])+1).toString()
  }
  else if(Number(cadena3[2]) >5 && Number(cadena3[1])==9){
    cadena3[1]= (Number(cadena3[0]+cadena3[1])+0.01).toString()
  }
  numberTwoDecimals=Number(cadena2+'.'+cadena3[0]+cadena3[1])
  return numberTwoDecimals
  }
  else return num
}

class Product{
    constructor(name,price,id){
        this.name=name
        this.price=price
        this.id=id
    }
}

function addProduct(product){
        
        const list= document.getElementById("lista")
        const li= document.createElement("li")
        li.setAttribute("id", "draggable"+counter)
        li.setAttribute('data-index', counter)
        li.className="lista-item"
        li.setAttribute("draggable", true)
        li.innerHTML=`<p>Item: </p><p>${product.name}</p><p> Price: </p><p>${product.price} </p>
        <div class="separador"></div><a href="#" name="delete"}" > Delete </a>
        ` 
        nodeItem.push(product)
        list.appendChild(li)
        addEventsList(counter)
        
}

function dragStart(){
  startPosition=this
}
function dragDropList(){
      counter++
      const li= document.createElement("li")
      li.setAttribute("id", "draggable"+counter)
      li.setAttribute('data-index', counter)
      li.className="lista-item"
      li.setAttribute("draggable", true)
      let thisname, thisprice
      let index=Number(startPosition.getAttribute('data-index'))
      for(i=0; i<nodeItem.length ;i++){
        if(nodeItem[i].id==index){
          thisname= nodeItem[i].name
          thisprice=nodeItem[i].price
        }
        }
      li.innerHTML=`<p>Item: </p><p id="name">${thisname}</p><p> Price: </p><p id="thisprice">${thisprice}</p>
       `  
      if(startPosition.parentElement.id=='lista'){
      this.appendChild(li)
      subtotalArray.push(thisprice)
      let sub=subtotalCalc(subtotalArray)
      sub=twoDecimals(sub)
      divSubtotal.innerHTML="Subtotal: "+sub
      addEventsBuyList(counter)
      shopList.push(li)
      this.classList.remove('over')

      }
  }
  function dragDropTrash(){
    if(startPosition.parentElement.id=='lista-compra'){
    let indexLi=Number(startPosition.getAttribute('data-index'))
    for(i=0;i<shopList.length;i++){
      if(shopList[i].dataset.index==indexLi){
        shopList.splice(i,1)
      }
    }
    let deletePrice=Number(startPosition.children.thisprice.innerHTML)
    let index=subtotalArray.indexOf(deletePrice)
    subtotalArray.splice(index,1)
    let sub=subtotalCalc(subtotalArray)
    sub=twoDecimals(sub)
    divSubtotal.innerHTML="Subtotal: "+sub.toFixed(2)
    startPosition.remove()
    this.classList.remove('overTrash')
    }
}
function dragOver(e){
  e.preventDefault()
}
function dragLeave(){
  this.classList.remove('over')
}
function dragEnter(){
  this.classList.add('over')

}
function dragEnterTrash(){
  this.classList.add('overTrash')

}

function addEventsList(index){
  const draggable=document.getElementById(`draggable${index}`)
  const droppable=document.querySelector('#lista-compra')
  
  draggable.addEventListener('dragstart', dragStart)
  droppable.addEventListener('drop', dragDropList )
  droppable.addEventListener('dragover',dragOver)  
  droppable.addEventListener('dragleave',dragLeave )
  droppable.addEventListener('dragenter',dragEnter )
}
function addEventsBuyList(index){
  
  const draggable2=document.getElementById(`draggable${index}`)
  const droppable2=document.querySelector('#trash')
  droppable2.addEventListener('drop', dragDropTrash )
  draggable2.addEventListener('dragstart', dragStart)
  droppable2.addEventListener('dragover',dragOver )
  droppable2.addEventListener('dragleave',dragLeave )
  droppable2.addEventListener('dragenter',dragEnterTrash )
}



    document.getElementById("input").addEventListener("submit", function(e){
    e.preventDefault()
    let productName, productPrice
    if(document.getElementById('name').value!='' && document.getElementById('price').value!='' ){
    productName=document.getElementById('name').value
    productPrice=Number(document.getElementById('price').value)
    if(isNaN(productPrice)){
      alert('Incorrect price format, please use 0.00')
      document.getElementById('price').value=""
    }
    else{
      productPrice=twoDecimals(productPrice)
      let product = new Product(productName, productPrice, counter)
      addProduct(product)
      document.getElementById('input').reset()
      counter++
    }
    }
    else {
      alert('Must enter name and price')}
    
    })

    document.getElementById("lista").addEventListener("click", function(e){
      if(e.target.name=='delete'){
        e.target.parentElement.remove()}
    })
    
    
    productList.push(['Top Sirloin Steak', 6.19])
    productList.push(['Chicken Leg Quarters', 0.99])
    productList.push( ['Ground Chuck', 4.49])
    productList.push(['Apple', 3.49])
    productList.push(['Orange', 2.99])
    productList.push(['Whole Milk', 3.79])
    productList.push(['Eggs', 4.79])
    productList.push(['Gouda Cheese', 4.49])
    
    
  for (i=0;i<8;i++){
  let product = new Product(productList[i][0],productList[i][1],counter)
  addProduct(product)
  counter++
  }

  function buy(){
      if(shopList.length>0){
      date.innerHTML=today.toISOString().split('T')[0]
      billCashier.innerHTML="Cashier: "+cashier
      bloque1.style.display='none'
      bloque2.style.display='none'
      bloque3.style.display='flex'
      for(i=0;i<shopList.length;i++){
        let divName=document.createElement('div')
        let divPrice=document.createElement('div')
        divName.className='left'
        divPrice.className='right'
        divName.innerHTML=""+shopList[i].children.name.innerHTML
        divPrice.innerHTML=""+shopList[i].children.thisprice.innerHTML
        billBody.appendChild(divName)
        billBody.appendChild(divPrice)
      }
      let total = document.createElement('div')
      let amount=document.createElement('div')
      total.className='left total'
      amount.className='right total'
      total.innerHTML="TOTAL: "
      let subamount = subtotalCalc(subtotalArray)
      subamount=twoDecimals(subamount)
      amount.innerHTML=""+subamount.toFixed(2)
      billBody.appendChild(total)
      billBody.appendChild(amount)
    }
    else{
      alert('Please drag any item')
    }
    
  }
  function refresh(){
    document.location.reload()
  }
  buyButton.addEventListener('click', buy)
  printButton.addEventListener('click', refresh)