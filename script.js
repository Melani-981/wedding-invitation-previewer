
const firstName = document.querySelector('#firstName')
firstName.addEventListener('keyup',(e) => {
    let data1 = document.querySelector('#data1')
    data1.innerHTML = firstName.value
   
    
})

const secondName = document.querySelector('#secondName')
secondName.addEventListener('keyup',(e) => {
    let data2 = document.querySelector('#data2')
    data2.innerHTML = secondName.value

})
const lastName = document.querySelector('#lastName')
lastName.addEventListener('keyup',(e) => {
    let data3 = document.querySelector('#data3')
    data3.innerHTML = lastName.value
    
})
let date = document.querySelector('#date')
date.addEventListener('keyup',(e) => {
    let data4 = document.querySelector('#data4')
    data4.innerHTML = date.value
    
})

let place = document.querySelector('#location')
place.addEventListener('keyup',(e) => {
    let data5 = document.querySelector('#data5')
    data5.innerHTML = place.value
    
})

let time = document.querySelector('#time')
time.addEventListener('keyup',(e) => {
    let data6 = document.querySelector('#data6')
    data6.innerHTML = time.value
    
})
function myReset() {
    location.reload()
}

let img = document.getElementById("myImage")
function image1()
{
    img.src='myImage1.jpg'
    
}
function image2()
{
    img.src='myImage2.jpg'
    
}
function image3()
{
    img.src='myImage5.png.jpg'
    
}

function image4()
{
    img.src='myImage6.png'
    
}
function myReset() {
    location.reload()
}


