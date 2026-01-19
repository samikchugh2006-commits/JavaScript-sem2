const button=document.querySelector('button')

button.classList.add('btn')

function message(){
    alert("You have clicked the button")
}

// button.addEventListener('click',message)
// button.removeEventListener('click',message)

button.addEventListener('keyup',function(event){
    console.log(event.key)
})

const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("Form Submitted")

}

const form=document.querySelector('form')
form.addEventListener('submit',handleSubmit)
