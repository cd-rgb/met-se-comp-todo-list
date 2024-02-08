let todobtn=document.querySelector("#todobtn")
let pop_up=document.querySelector(".popup")
let array2


todobtn.addEventListener("click",function(){
   pop_up.classList.remove("dnone")

})

let _name=document.querySelector("#todoname")

let area=document.querySelector("#text-area")
let select=document.querySelector("#selection")

let save=document.querySelector("#saving")
let cancel=document.querySelector("#cancelling")
save.addEventListener("click",function(){
    let array=localStorage.getItem("saved1")

    array=array===null?[]:JSON.parse(array)

    if(_name.value===""|| area.value===""){
        alert("pls enter complete info")
    }
    else{
        array.push({
            name:_name.value,
            description:area.value,
            option:select.value
        })
        localStorage.setItem("saved1",JSON.stringify(array))
    }
   
    
})
// array2.forEach((value) => {
//     let data=`<section class="alltodos">
//     <section>
//         <h2>${value._name}</h2>
//         <p>${value._area}</p>
//     </section>
//     <section>
//         <button class="del"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
//     </section>

    
// </section>`

// mytodos.innerHTML=data
    
//});
cancel.addEventListener("click",function(){
    pop_up.classList.add("dnone")

})
