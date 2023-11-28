
// function printMessage() {
//     const show = document.querySelector("#show_notes");
//     var message = document.getElementById('notes').value;

//     console.log(message);
//     // document.getElementById('show_notes').innerHTML += message + "<br/>";
//     document.getElementById('notes-card').innerHTML += message + "<br/>";




// }



function showAllNotes() {

    let inputDiv = document.querySelector('.input-div');
    inputDiv.style.display = 'flex';
    let but = document.querySelector('#btn');
    but.style.display = 'flex';
    let allNotes;
    let myNotes = localStorage.getItem("notes");

    if (myNotes === null) {
        allNotes = [];
    } else {
        allNotes = JSON.parse(myNotes);
    }

    // let noteCon = document.getElementById('notes-card');
    // noteCon.innerHTML = '';

    // allNotes.forEach((element, index) => {
    //     let noteToShow = `<div class="card">${element.description}<div class="info">

    //     <div class="btn"><button onclick="deleteNote(${index})">Delete</button></div>
    //     <div class="btn"><button onclick="updateNote(${index})">update</button></div>



    // </div> 
    //       </div>`;
    //     noteCon.innerHTML += noteToShow;




    // });


    let noteCon = document.getElementById('notes-card');
    noteCon.innerHTML = '';


    const notesHTML = allNotes.map((element, index) => {
        return `
        <div class="card">
    
            ${element.description}
            <div class="cat_name">category:${element.category}</div>
        
        <div class="info">
                <div class="btn"><button id="bn" onclick="deleteNote(${index})">Delete</button></div>
                <div class="btn"><button id="bn" onclick="updateNote(${index})">Update</button></div>
        </div>
        </div>`;
    });


    noteCon.innerHTML = notesHTML.join('');


}

showAllNotes();

function printMessage() {
    let allNotes;
    let myNotes = localStorage.getItem("notes");

    if (myNotes === null) {
        allNotes = [];
    } else {
        allNotes = JSON.parse(myNotes);
    }

    let notes = document.getElementById('notes');
    let category = document.getElementById('category').value;


    let newNote = {
        description: notes.value,
        category: category
    };

    allNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(allNotes));
    notes.value = '';

    showAllNotes();
}

function deleteNote(noteindex) {
    let allNotes = JSON.parse(localStorage.getItem("notes"));
    allNotes.splice(noteindex, 1);
    localStorage.setItem("notes", JSON.stringify(allNotes));
    showAllNotes();


}

// function updateNote(noteindex) {
//     let allNotes = JSON.parse(localStorage.getItem('notes'));
//     document.getElementById('btn').innerText = "Update note";


//     let notes = document.getElementById('notes');

//     notes.value = allNotes[noteindex].description;

// }
function updateNote(noteindex) {
    let allNotes = JSON.parse(localStorage.getItem('notes'));
    let notes = document.getElementById('notes');


    document.getElementById('btn').innerText = "Update note";


    notes.value = allNotes[noteindex].description;

    document.getElementById('btn').onclick = function () {

        allNotes[noteindex].description = notes.value;
        localStorage.setItem("notes", JSON.stringify(allNotes));
        showAllNotes();


        notes.value = '';


        document.getElementById('btn').innerText = "Add";


        document.getElementById('btn').onclick = printMessage;
    };
}


function showPersonal() {

    let inputDiv = document.querySelector('.input-div');
    inputDiv.style.display = 'none';

    let but = document.querySelector('#btn');
    but.style.display = 'none';



    let selectedCategory = "personal";


    let allNotes;
    let myNotes = localStorage.getItem("notes");

    if (myNotes === null) {
        allNotes = [];
    } else {
        allNotes = JSON.parse(myNotes);
    }
    let filteredNotes = allNotes.filter(note => note.category === selectedCategory);

    let noteCon = document.getElementById('notes-card');
    noteCon.innerHTML = '';

    filteredNotes.map((note, index) => {
        let noteHTML = `
            <div class="card">
                
             ${note.description}
                
            </div>`;
        noteCon.innerHTML += noteHTML;
    });



}











