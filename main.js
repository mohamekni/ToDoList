let input = document.querySelector("input")
let btn = document.querySelector("#push")
let add = document.querySelector(".container #tasks")
btn.onclick = () =>{
    if(input.value.length === 0){
        window.alert("Enter Tasks")
    }else{
    add.innerHTML += `
    <div class="task">
        <span id="taskname">${input.value}</span>
        <button class="delete">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>
    `
        var rm = document.querySelectorAll(".delete")
            for(var i=0 ; i<rm.length;i++){
                rm[i].onclick = function(){
                    this.parentNode.remove()
                }
            }

        var lineRm = document.querySelectorAll('.task')
        for(var i =0;i<lineRm.length;i++){
            lineRm[i].onclick = function() {
                this.classList.toggle('completed')
            }
        }
    }
}

var a = 1
var a = 2

console.log(a);

