const pressBtn=document.querySelector("#push");
i=1
pressBtn.addEventListener("click",()=>{
    const TodoItem=document.querySelector("#write");
    if(TodoItem.value.length==0){
        alert("Enter the task first");
    }
    else{
        document.querySelector(".new-todo").innerHTML+=
        `<div class="todo-addon" id=${i} onclick="deleteFunction(this)">
        <input type="text" name="task" id="write" disabled value=${TodoItem.value}>
        <button id="delete">
            <span class="delete-icon">X</span>
        </button>
        `
        TodoItem.value="";
        i++;
    }
})
function deleteFunction(e){
    console.log(e)
    e.remove()
    // e.innerHTML=""
    
}