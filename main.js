let mainbtn = document.querySelector('p button')
let section = document.querySelector('.sec')
let nameInput = document.querySelector('.form-control')
let overlayPopup = document.querySelector(".overlay-popup")
let errorOverlayPopup = document.querySelector(".error-overlay-popup")
let welcoming = document.querySelector(".overlay-popup .popup h3")
let goAheadBtn = document.querySelector(".overlay-popup .popup button")
let toDoPage = document.querySelector(".to-do-page")
let tasksHeader = document.querySelector(".tasks h2")
let listIcon = document.querySelector(".tasks .title .iconn")
let sideBar = document.querySelector(".side-bar")
let newTaskBtn = document.querySelector(".new-task")
let writeNewDiv = document.querySelector(".write-new")
let newTaskBox = document.querySelector(".task-box")
let userSpan = document.querySelector(".user")
let select = document.querySelector("select")
let maleImg = document.querySelector(".male")
console.log(listIcon)
console.log(sideBar)



mainbtn.addEventListener("click" , function (){
    if (nameInput.value.length > 0){
     section.style.display = "none"
     userSpan.innerHTML = nameInput.value[0].toUpperCase() + nameInput.value.slice(1)
     overlayPopup.style.display = "block"
     if (select.value === "female"){
        maleImg.innerHTML = `<img src="css/female.png" width="100px" alt="">`
    }
} 
    else {
        errorOverlayPopup.style.display = "block"
}

errorOverlayPopup.addEventListener("click" , function(){
    errorOverlayPopup.style.display = "none"
})
})

goAheadBtn.addEventListener("click", function(){
    overlayPopup.style.display = "none"
    toDoPage.style.display = "flex"
    tasksHeader.innerHTML = `${nameInput.value[0].toUpperCase() + nameInput.value.slice(1)}'s TODO`
})


function active(){
    sideBar.classList.toggle("active")
}
listIcon.addEventListener("click" , active);

document.addEventListener('click', (e) => {
    let icon = e.target.closest('.iconn');
    // icon.classList.toggle('active');
    // console.log(icon)

    let nav = e.target.closest('.side-bar')

    if (!nav && !icon) sideBar.classList.remove("active")
    // if (e.target === sideBar && e.target !== icon) return;
    // sideBar.classList.remove("active")

})

newTaskBtn.addEventListener("click" , function(){
    writeNewDiv.style.width = "100%"
    writeNewDiv.style.height = "100%"
    writeNewDiv.style.opacity = "1"
    writeNewDiv.style.transform = "translateY(0px)"
    newTaskBox.style.padding = "80px"
})


document.addEventListener("click" , (e) => {
    let writeNew = e.target.closest(".wrtie-new")
    let newTask = e.target.closest(".new-task")
    let taskBox = e.target.closest(".task-box")
    if (!newTask && !taskBox) {
        writeNewDiv.style.width = "0%"
    writeNewDiv.style.height = "0%"
    writeNewDiv.style.opacity = "0"
    writeNewDiv.style.transform = "translateY(0px)"
    newTaskBox.style.padding = "0px"
    }
})