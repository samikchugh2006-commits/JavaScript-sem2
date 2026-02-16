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

// console.log("First line")
// setTimeout(()=>{
//     console.log("After 2 sec")
// },0)
// console.log("Second line")

// function print(name){  //Callback fn
//     console.log("Hello Students", name)
// }

// function greet(num){  //higher oreder fn
//     console.log("Welcome to my class")
//     setTimeout(() => {
//         console.log("Wait for 2 sec")
//         let firstName="Samik"
//         num(firstName)
//     }, 2000);
    
// }

// greet(print)


// console.log("Starting Homework....");

// setTimeout(() =>{
//     console.log("Homework Done!");
//     console.log("Starting Dinner");

//     setTimeout(() =>{
//     console.log("Dinner Done!");
//     console.log("Getting Ready to go Out...");

//     setTimeout(() =>{
//     console.log("Going to playground!");
//     },1000); // after dinner

//   },1500); // dinner time

// }, 2000);  // homework done


// function finishHomework(callback) {
//     console.log("Starting Homework....");
//     setTimeout(() => {
//         console.log("Homework Done!");
//         callback();

//     },2000);

// }


// function eatDinner(callback) {
//     console.log("Starting dinner....");
//     setTimeout(() => {
//         console.log("Dinner  Done!");
//         callback();

//     },1500);
// }   

// function goToPlayground() {
//     console.log("Going to playground!!!");
// }

// finishHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     });
// });

// const input=document.querySelector("#task")
// const btn=document.querySelector('#button')
// const list=document.querySelector('#list')

// btn.addEventListener('click', (e) => {
//   e.preventDefault();

//   const li = document.createElement('li');
//   const deleteButton = document.createElement('button');

//   deleteButton.innerText = "Delete";
//   li.innerText = input.value;

//   li.appendChild(deleteButton);
//   lists.appendChild(li);

//   deleteButton.addEventListener('click', () => {
//     lists.removeChild(li);
//   });

//   input.value = "";
// });


// console.log("First line")
// setTimeout(()=>{
//   console.log("Inside Timeout")
// },0)
// const p=new Promise((resolve,reject)=>{
//   resolve()
// })

// p.then(()=>{
//   console.log("Inside Promise")
// }).catch(()=>{
//   console.log("Inside Catch")
// })
// console.log("Last Line")
// const p2=new Promise((resolve,reject)=>{
//   resolve()
// })

// function orderfood(){
//   return new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       console.log("Food Ordered")
//       resolve("Food Ordered")
//     },1000)
//   })
// }



// function prepareFood(){
//   return new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       console.log("Food Prepared")
//       resolve("Food Prepared")
//     },1000)
//   })
// }


// function deliverfood(){
//   return new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       console.log("Food Delivered")
//       resolve("Food Delivered")
//     },1000)
//   })
// }
 
// async function order(){
//    const data=await orderfood()
//   console.log(data)
//   await prepareFood()
//   await deliverfood()
// }

// order()

// console.log("f")
// try{
  // let sample=324
  // console.log(sample)
  // let age=19
  // if(age<18){
    // error
//     throw new Error("Acess Denied")
//   }
// }catch(err){
//   console.error(err)
// }finally{
//   console.log("finally block")
// }
// console.log("l")

// orderfood().then((data)=>{
//   console.log(data)
//   return prepareFood()
// }).then((data)=>{
//   console.log(data)
//   return deliverfood()
// }).then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.log(err)
// })  

async function getData(){
  try{
      const response= await fetch("https://dummyjson.com/products")
  if(response.ok===false)throw new Error("Data not found")
    const data=await response.json()
  console.log(data)
  // data.products.forEach((ele)=>{
  //   console.log(ele.price)})
  }catch(error){
    console.log("Data not found")
  }
}



getData()








