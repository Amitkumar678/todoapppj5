console.log("Hello amit");
showdata();
let addlists = document.getElementById("add-list");
addlists.addEventListener("click", function(ev) {
    document.getElementById("add-item-container").style.display = "flex";
    // document.getElementById("add-item-title").focus();
})

// add your todo list on the card 
let button = document.getElementById("add-list-button");
button.addEventListener("click", function(ev) {
    let addtxt = document.getElementById("add-item-title");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = " ";
    console.log(notesobj);
    showdata();
    document.getElementById("add-item-container").style.display = "none";
});

// show TODO list data 
function showdata() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function(element, index) {
        html += `
            <div class="notecard">
                <h3 class="card-text" style="text-align: center"> ${element} </h3>
                <br>
                <hr style="width: 90%;" class="right">
                <br>
                <ul class="list-add" id="list-add" >
                
                    <li style="display: inline;"></li>
                </ul>
                <i class="fas fa-plus-circle add" id="${index}" onclick="addListInCard()"></i>
                <i class="fas fa-trash delete" id="${index}" onclick="deletecard(this.id)"></i>
            </div>
                `;
    });
    let noteele = document.getElementById("card-container");
    if (notesobj.length != 0) {
        noteele.innerHTML = html;
    } else {
        noteele.innerHTML = "Not show 'Add  ToDo List'";
    }
}

function deletecard(index) {
    // console.log("card index is :", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showdata();
}

function addListInCard() {
    // console.log(index);
    document.getElementById("addlist-container").style.display = "flex";
    document.getElementById("addlist-item").focus();
}

var addlist_button = document.getElementById("addlist-button");
addlist_button.addEventListener("click", function(evr) {
    let value = document.getElementById("addlist-item").value;
    // console.log(value);
    var ul = document.getElementById("list-add");
    var li = document.createElement("li");
    li.classList.add("nowList");
    li.onclick = function(event) {
        this.style.color = "red";
        this.style.textDecorationLine = "line-through";
    }
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);
    document.getElementById("addlist-container").style.display = "none";
    document.getElementById("addlist-item").value = "";
})