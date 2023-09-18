const navBar = document.querySelector('#nav-bar')
const mainContainer = document.querySelector('.main-container')
const menuEmail = document.querySelector('.navbar-email')
const navbarLleft = document.querySelector('.navbar-left')
const navbarRight = document.querySelector('.navbar-right')
const desktopMenu= document.querySelector('.desktop-menu')
const mobileMenu= document.querySelector('.mobile-menu')
const menuHamb = document.querySelector('.menu')
const orderList = document.querySelector('.shoppingcart-detail')
const shoppingCartImg = document.querySelector('.navbar-shopping-cart')
const cardContainer=document.querySelector('.cards-container')
const productDetail=document.querySelector('.product-detail')
const productDetailClose=document.querySelector('.product-detail-close')
const productImageDetail=document.querySelector('#product-detail-img')
const productPriceDetail=document.querySelector('#product-price-detail')
const productnameDetail=document.querySelector('#product-name-detail')
const productInfoDetail=document.querySelector('#product-info-detail')
const myOrderContent=document.querySelector('.my-order-content')
const itemOnCart=document.querySelector('#itemOnCart')
const total=document.querySelector('#total')
const addToCartButton=document.querySelector('#add-to-cart-button')
const all=document.querySelector('#all')
const clothes=document.querySelector('#clothes')
const electronics=document.querySelector('#electronics')
const furniture=document.querySelector('#furnitures')
const toys=document.querySelector('#toys')
const others=document.querySelector('#others')
const allMobile=document.querySelector('#mobile-all')
const clothesMobile=document.querySelector('#mobile-clothes')
const electronicsMobile=document.querySelector('#mobile-electronics')
const furnitureMobile=document.querySelector('#mobile-furnitures')
const toysMobile=document.querySelector('#mobile-toys')
const othersMobile=document.querySelector('#mobile-others')
const signUpButton=document.querySelector('.signup-button')
const createAccountDiv=document.querySelector('.create-account')
const loginDiv=document.querySelector('.login')
const createAccountButton=document.querySelector('#create-account-button')
const signupname=document.querySelector('#signup-name')
const signupEmail=document.querySelector('#signup-email')
const signupPassword=document.querySelector('#signup-password')
const repeatPassword=document.querySelector('#repeat-password')
const logincontainer=document.querySelector('#login-form')
const formCreate=document.querySelector('.form-create')
const formEdit=document.querySelector('.form-edit')
const loginButton=document.querySelector('.login-button')  
const loginEmail=document.querySelector('#login-email')  
const loginPassword=document.querySelector('#login-password')  
const nameAccount=document.querySelector('#name-account')
const emailAccount=document.querySelector('#email-account')
const passAccount=document.querySelector('#pass-account')
const myAccountDiv=document.querySelector('.my-account')
const myAccountButton=document.querySelector('#my-account-button')
const editAccountButton=document.querySelector('#edit-account-button')
const editAccountDiv=document.querySelector('.edit-account')
const changePassButton=document.querySelector('#change-pass-button')
const beforePassword=document.querySelector('#before-password')
const newPassword=document.querySelector('#new-password')
const repeatNewPassword=document.querySelector('#repeat-new-password')
const messagePasswordDiv=document.querySelector('#message-password')
const myaccountLogo=document.querySelector('.image-logo')
const myAccountMobile=document.querySelector('#myaccount-mobile')
const backLoginLogo=document.querySelector('#back-login')
const skipLoginA=document.querySelector('#skipLoginA')
const signoutButton=document.querySelector('#signout-button')
const infoBubble=document.querySelector('.speech-bubble')
const infoDiv=document.querySelector('#info-div')

const allCategories=['Clothes', 'Electronics','Furnitures','Toys','Others']
const productList=[]
const cartList=[]
const errors=[]
let name=[]
let passwords=[]
let emails=[]
let userLogged=[]

const users=[]

function toggleProductDetail(){
    productDetail.classList.toggle('toggle')
}
function getUsers(){
    if(localStorage.length){
    const namesStorage=(localStorage.getItem('names'))
    const passwordsStorage=(localStorage.getItem('passwords'))
    const emailsStorage=(localStorage.getItem('emails'))
    if(namesStorage.includes(',')){
     name=namesStorage.split(',')
     passwords=passwordsStorage.split(',')
     emails=emailsStorage.split(',')
    }
        if(name.length){
            for (let i=0;i<name.length;i++){
                users.push({
                    name:name[i],
                    email:emails[i],
                    pass:passwords[i]
                })
            }
        }
        else{
            users.push({
                name:namesStorage,
                email:emailsStorage,
                pass:passwordsStorage
            })
        }
    }
}
getUsers()

all.addEventListener('click', showAll)
clothes.addEventListener('click', function(e){
    showCategorie(e.target.innerHTML)})
electronics.addEventListener('click',  function(e){
    showCategorie(e.target.innerHTML)})
furniture.addEventListener('click' , function(e){
    showCategorie(e.target.innerHTML)})
toys.addEventListener('click',  function(e){
    showCategorie(e.target.innerHTML)})
others.addEventListener('click',  function(e){
    showCategorie(e.target.innerHTML)})
allMobile.addEventListener('click', showAll)
clothesMobile.addEventListener('click', function(e){
    showCategorie(e.target.innerHTML)})
electronicsMobile.addEventListener('click',  function(e){
    showCategorie(e.target.innerHTML)})
furnitureMobile.addEventListener('click' , function(e){
    showCategorie(e.target.innerHTML)})
toysMobile.addEventListener('click',  function(e){
    showCategorie(e.target.innerHTML)})
othersMobile.addEventListener('click',  function(e){
    showCategorie(e.target.innerHTML)})

loginButton.addEventListener('click', function(e){
    e.preventDefault()
    login()})
signUpButton.addEventListener('click', function(e){ 
    e.preventDefault()
    signUp()})
menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamb.addEventListener('click', toggleHambMenu)
shoppingCartImg.addEventListener('click', toggleOrderList)
productDetailClose.addEventListener('click', closeProductDetail)
addToCartButton.addEventListener('click',function(e){
    let item= e.target.closest('div').children[1].innerHTML
    let product=selectProduct(item,productList)
    addToCart(product)
})
createAccountButton.addEventListener('click', function(e){
    e.preventDefault()
    createAccount()
})
myAccountButton.addEventListener('click', showMyAccount)
myAccountMobile.addEventListener('click', function(){
    showMyAccount()
    mobileMenu.classList.add('inactive')
})
editAccountButton.addEventListener('click', function(e){
    e.preventDefault()
    editAccount()
})
changePassButton.addEventListener('click', function(e){
    e.preventDefault()
    changePAssword()
})
myaccountLogo.addEventListener('click',backHome)
skipLoginA.addEventListener('click', skipLogin)

infoDiv.addEventListener('mouseover',showInfoDiv)
infoDiv.addEventListener('mouseleave',hideInfoDiv)

function showInfoDiv(){
    infoBubble.classList.remove('inactive')
}
function hideInfoDiv(){
    infoBubble.classList.add('inactive')
}


function backHome(){
    mainContainer.classList.remove('inactive')
    navbarLleft.classList.remove('inactive')
    navbarRight.classList.remove('inactive')
    const array=document.querySelectorAll('.active')
        for(let i=0; i<array.length;i++){
            array[i].classList.add('inactive')
            array[i].classList.remove('active') 
            }
        }
function changePAssword(){
    if (validateChangePass()){
        let stringPasswords=localStorage['passwords']
        if (stringPasswords.includes(',')){
        passwords=stringPasswords.split(',')
        let index=passwords.indexOf(beforePassword.value)
        passwords.splice(index,1,newPassword.value)
        userLogged[0].pass=newPassword.value
        localStorage.setItem('passwords', passwords)
        }
        else{
            userLogged[0].pass=newPassword.value
            localStorage.setItem('passwords', newPassword.value)
        }
        beforePassword.value=""
        newPassword.value=""
        repeatNewPassword.value=""
        createMessage(messagePasswordDiv,'Contraseña cambiada con exito')
        passwords=[]
    }
    else{
        while(errors.length){
            createErrorMessage(formEdit, errors.pop())
        }
    }
}
function validateChangePass(){
    
    if(!userLogged.length){
        errors.push('Esta opción esta disponible sólo haciendo login')
    }
    else if(!beforePassword.value || !newPassword.value || !repeatNewPassword.value){
        errors.push('Debe llenar todos los campos')
    }
     else if(beforePassword.value!=userLogged[0].pass || newPassword.value!= repeatNewPassword.value){
        errors.push('Datos incorrectos')
    }
    if(errors.length){
        return false
    }
    else{
        return true
    }
}

function editAccount(){
    editAccountDiv.classList.remove('inactive')
    editAccountDiv.classList.add('active')
    myAccountDiv.classList.add('inactive')
}


function showMyAccount(){
    if(userLogged.length){
        desktopMenu.classList.add('inactive')
        nameAccount.innerHTML=userLogged[0].name
        emailAccount.innerHTML=userLogged[0].email
        navbarLleft.classList.add('inactive')
        navbarRight.classList.add('inactive')
        mainContainer.classList.add('inactive')
        myAccountDiv.classList.remove('inactive')
        myAccountDiv.classList.add('active')
        
    }
    else{
        nameAccount.innerHTML='Yard Sale'
        emailAccount.innerHTML='yardsale@example.com'
        desktopMenu.classList.add('inactive')
        navbarLleft.classList.add('inactive')
        navbarRight.classList.add('inactive')
        mainContainer.classList.add('inactive')
        myAccountDiv.classList.remove('inactive')
        myAccountDiv.classList.add('active')
    }
    
}

function validateLogin(){
        
    if(!loginEmail.value || !loginPassword.value){
        errors.push('Debe llenar todos los campos')
    }
    else{
        let user=users.map(user => user.email)
        let index=user.indexOf(loginEmail.value)
        if(!(users[index].pass===loginPassword.value)){
            errors.push('Datos incorrectos')
        }
        else{
            userLogged.push(users[index])
        }
    }
    
    
    if(errors.length){
        return false
    }
    else{

        return true
    }
    
}
function skipLogin(){
        navBar.classList.remove('inactive')
        mainContainer.classList.remove('inactive')
        loginDiv.classList.add('inactive')
        menuEmail.innerHTML='yardsale@example.com'
}
function login(){
    if(validateLogin()){
        navBar.classList.remove('inactive')
        mainContainer.classList.remove('inactive')
        loginDiv.classList.add('inactive')
        menuEmail.innerHTML=userLogged[0].email
    }
    else{
        while(errors.length){
            createErrorMessage(logincontainer, errors.pop())
        }
    }

}
function validateCreateAccount(){
    
    let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    
    if(!signupname.value || !signupEmail.value || !signupPassword.value
     || !repeatPassword.value){
        errors.push('Debe llenar todos los campos')
    }
    if(emails.includes(signupEmail.value)){
        errors.push('Correo ya registrado')
    }
    if(!validarEmail.test(signupEmail.value)){
        errors.push('Formato de correo incorrecto')
    }
    if(repeatPassword.value!=signupPassword.value){
        errors.push('La contraseña no coincide')   
    }
    if(errors.length){
        return false
    }
    else{
        return true
    }
}
function createAccount(){
    
    if(validateCreateAccount()){
        
        createMessage(logincontainer,'Su cuenta se agrego correctamente')
        createAccountDiv.classList.add('inactive')
        loginDiv.classList.remove('inactive')
        
        users.push({
            name:signupname.value,
            email:signupEmail.value,
            pass:signupPassword.value
        })
        emails.push(signupEmail.value)
        localStorage.clear()
        localStorage.setItem('names', users.map(user => user.name))
        localStorage.setItem('emails', users.map(user => user.email))
        localStorage.setItem('passwords', users.map(user => user.pass))
    }
    else{
        while(errors.length){
                createErrorMessage(formCreate, errors.pop())
        }
    }
}
function createMessage(node, message){
    let newMessage= document.createElement('div')
    newMessage.classList.add('message')
    newMessage.innerHTML=message
    node.appendChild(newMessage)
    setTimeout(function(){
    node.children[0].remove()}, 3000)
}
function createErrorMessage(node, message){
    let newMessage= document.createElement('div')
    newMessage.classList.add('error-message')
    newMessage.innerHTML=message
    node.appendChild(newMessage)
    setTimeout(function(){
    node.children[0].remove()
    }, 3000)
}
   
   


function signUp(){
    createAccountDiv.classList.remove('inactive')
    loginDiv.classList.add('inactive')
}
function closeProductDetail(){
    productDetail.classList.remove('toggle')
}
function showAll(){
    allCategories.forEach((categorie)=>{
        const showallcategories=document.querySelectorAll(`.${categorie}`)
        showallcategories.forEach((item)=>{
            item.classList.remove('inactive')
        })
        mobileMenu.classList.add('inactive')
    })
}
function showCategorie(categorie){
        
    const categorieSelected=document.querySelectorAll(`.${categorie}`)
    const index=allCategories.indexOf(categorie)
    allCategories.splice(index,1)
    
    categorieSelected.forEach((item) => 
        item.classList.remove('inactive'))

        allCategories.forEach((categorie) => {
            const categorieInactive = document.querySelectorAll(`.${categorie}`)
            categorieInactive.forEach((item)=>{
                item.classList.add('inactive')})
            })
      
    allCategories.push(categorie)
    mobileMenu.classList.add('inactive')
                
}

//todos los toggle sin condicional, hacen toggel del elemnto deseado y agrega la clase inactive a las demas
//si el elemento no tiene la clase, se la agrega, y si ya la tiene no pasa nada
function toggleOrderList(){
    orderList.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
   
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    orderList.classList.add('inactive')
    productDetail.classList.add('inactive')
    
}
function toggleHambMenu(){
    mobileMenu.classList.toggle('inactive')
    orderList.classList.add('inactive')
    productDetail.classList.add('inactive')
}
function selectProduct(item,list){
    let porductSelected= list.find(product => product.name===item)
        return porductSelected
    
}

function addToCart(product){
    cartList.push({
        name: product.name,
        price: product.price,
        image: product.image
    })
    
    const divShoppingCart= document.createElement('div')
    divShoppingCart.classList.add('shopping-cart')
    const figure=document.createElement('figure')
    const img=document.createElement('img')
    img.setAttribute('src', `${product.image}`)
    const pname=document.createElement('p')
    pname.innerHTML=product.name
    const pPrice=document.createElement('p')
    pPrice.innerHTML="$"+product.price.toFixed(2)
    const imgClose=document.createElement('img')
    imgClose.setAttribute('src', "/src/icons/icon_close.png")
    imgClose.addEventListener('click', function(e){ 
        deleteItem(e.target)})
    figure.appendChild(img)
    divShoppingCart.append(figure, pname,pPrice,imgClose)
    myOrderContent.appendChild(divShoppingCart)
    itemOnCart.innerHTML=cartList.length
    itemOnCart.classList.remove('inactive')
    total.innerHTML="$"+calculateTotal(cartList).toFixed(2)

}
function calculateTotal(lista){
    let total = 0
    for(item of lista){
        total += item.price
    }
    
    return total
}
function deleteItem(node){
    let item=node.closest('div').children[1].innerHTML
    node.closest('div').remove()
    let product = selectProduct(item,cartList)
    let index=cartList.indexOf(product)
    cartList.splice(index,1)
    itemOnCart.innerHTML=cartList.length
    if(!cartList.length){
        itemOnCart.classList.add('inactive')
    }
    total.innerHTML="$"+calculateTotal(cartList).toFixed(2)
    
}


productList.push({
    name: 'Bike', price:120 ,
    image:"https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?cs=srgb&dl=pexels-timea-kadar-2130611.jpg&fm=jpg&_gl=1*w4hmwp*_ga*MTYzMDc5MzAzNy4xNjY2NjI4MDIy*_ga_8JE65Q40S6*MTY2NjYyODAyNC4xLjEuMTY2NjYyODA1Ni4wLjAuMA..",
    info: "Hermosa bicicleta azul turqueza tipo playera con su cesta en buen estado, frenos y cambios ajustados recientemente, cauchos nuevos, tiene timbre tipo campana",
    categorie: 'Toys'
})
productList.push({
    name: 'Laptop', price:400 ,
    image:"https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: `Laptop Dell Inspiron 3505 gris 15.6", AMD Ryzen 5 3450U 16GB de RAM 1TB HDD 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 60 Hz 1366x768px Windows 10 Home`,
    categorie: 'Electronics'
})
productList.push({
    name: 'Monitor', price:220 ,
    image:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    info: "Apple Thunderbolt Display 27 Pulgadas - A1407",
    categorie: 'Electronics'
})
productList.push({
    name: 'Juego de recibo', price:160 ,
    image:"https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Furnitures'
})
productList.push({
    name: 'Sofa dos plazas', price:70 ,
    image:"https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Furnitures'
})
productList.push({
    name: 'Librería de pared', price:110 ,
    image:"https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Furnitures'
})
productList.push({
    name: 'Zapatos de caballero', price:60 ,
    image:"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Clothes'
})
productList.push({
    name: 'Sudadera de dama', price:35 ,
    image:"https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Clothes'
})
productList.push({
    name: 'Camisas de caballero', price:40 ,
    image:"https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Clothes'
})
productList.push({
    name: 'Uinicornio de felpa', price:30 ,
    image:"https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Toys'
})
productList.push({
    name: 'Soldados de juguete', price:20 ,
    image:"https://images.pexels.com/photos/9643181/pexels-photo-9643181.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Toys'
})
productList.push({
    name: 'Rodillos de pintura', price:30 ,
    image:"https://images.pexels.com/photos/5583115/pexels-photo-5583115.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Others'
})
productList.push({
    name: 'Juego de llaves', price:180 ,
    image:"https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: "",
    categorie: 'Others'
})

function fillCardContainer(arr){
    for(product of arr){
        const productCard=document.createElement('div')
        productCard.classList.add("product-card")
        productCard.classList.add(`${product.categorie}`)
        const productImg=document.createElement('img')
        productImg.setAttribute('src', `${product.image}`)
        productImg.setAttribute('id', 'product-image')
        productImg.addEventListener('click', function(e){   
            openProductDetail(e.target) //el listener de la imagen envia el target como argumento a la funcion openProductDetail
        })
        const shoppingcartInfo=document.createElement('div')
        shoppingcartInfo.setAttribute('class',"shoppingcart-info")
        const div1=document.createElement('div')
        const p1=document.createElement('p')
        const p2=document.createElement('p')
        const figure=document.createElement('figure')
        const img1=document.createElement('img')
        img1.addEventListener('click', function(e){
            let productname = e.target.closest('div').children[0].children[1].innerHTML
            let product= selectProduct(productname, productList)
            addToCart(product)
        })
        p1.innerHTML='$'+(product.price).toFixed(2)
        p2.innerHTML=product.name
        img1.setAttribute('src', "/src/icons/shopping_cart2.png")

        figure.appendChild(img1)
        shoppingcartInfo.append(div1,figure)
        div1.append(p1,p2)
        productCard.append(productImg,shoppingcartInfo)
        cardContainer.appendChild(productCard)
        
       
    }
}

fillCardContainer(productList)


function openProductDetail(arg){
    // se utiliza find para crear un nuevo array donde coincida el url obtenido del target
    let findDetails= productList.find(function(product){ 
        return product.image===arg.src
    })
    productImageDetail.setAttribute('src', findDetails.image)
    productPriceDetail.innerHTML='$'+findDetails.price.toFixed(2)
    productnameDetail.innerHTML=findDetails.name
    productInfoDetail.innerHTML=findDetails.info
    desktopMenu.classList.add('inactive')
    orderList.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.add('toggle')
}





