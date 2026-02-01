const button=document.querySelector('button')

button.classList.add('btn')

function message(){
    alert("You have clicked the button")
}

// button.addEventListener('click',message)
// button.removeEventListener('click',message)

// button.addEventListener('keyup',function(event){
//     console.log(event.key)
// })

// const handleSubmit=(event)=>{
//     event.preventDefault()
//     console.log("Form Submitted")

// }

// const form=document.querySelector('form')
// form.addEventListener('submit',handleSubmit)

// const btn=document.querySelector("button")
// const div=document.querySelector("container")
// const div2=document.querySelector("outer")

// btn.addEventListener('click',function(){console.log("button")},true)
// div.addEventListener('click',function(){console.log("Div")},true)
// div.addEventListener('click',function(){console.log("Div2")},true)

// console.log("First line")
// setTimeout(()=>{
//     console.log("After 2 sec")
// },2000)
// console.log("Second line")

// setTimeout(()=>{
//     alert("After 3 sec")
// },3000)

// const timerId=setInterval(()=>{
//     console.log("Hello Bachooooo")
// },1000)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10000)

// let count=1;

// const id=setInterval(()=>{
//     if(count==10)clearInterval(id)
//      console.log(count)
//     count+=1
// },1000)

console.log("First line")
setTimeout(()=>{
    console.log("After 2 sec")
},0)
console.log("Second line")
