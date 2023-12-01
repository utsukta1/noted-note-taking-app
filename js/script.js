
// function printMessage() {
//     const show = document.querySelector("#show_notes");
//     var message = document.getElementById('notes').value;

//     console.log(message);
//     // document.getElementById('show_notes').innerHTML += message + "<br/>";
//     document.getElementById('notes-card').innerHTML += message + "<br/>";




// }



function showAllNotes() {

    // let inputDiv = document.querySelector('.input-div');
    // inputDiv.style.display = 'flex';
    // let but = document.querySelector('#btn');
    // but.style.display = 'flex';
    let showbtn = document.querySelector('#b');
    showbtn.style.display = 'flex';
    let add = document.querySelector('#show');
    add.style.display = 'none';
    let allNotes;
    let myNotes = localStorage.getItem("notes");

    if (myNotes === null) {
        allNotes = [];
    } else {
        allNotes = JSON.parse(myNotes);

    }

    document.getElementById('para').innerHTML = "Your notes:";

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
    
            <div class=t>${element.title}</div>
            
            <div class="cat_name">category:${element.category}</div>
        
        <div class="info">
                <div class="btn"><button id="bn" onclick="deleteNote(${index})"><img src="assets/delete_4219.png" width="20px"></button></div>
                <div class="btn"><button id="bn" onclick="updateNote(${index})"><img src="assets/update.png" width="20px"></button></div>
                <div class="btn"><button id="bn" onclick="viewNote(${index})"><img src="assets/view.png" width="20px"></button></div>
                
        </div>
        </div>`;
    });


    noteCon.innerHTML = notesHTML.join('');


}

showAllNotes();

function printMessage() {

    let inputDiv = document.querySelector('.input-div');
    inputDiv.style.display = 'none';
    let allNotes;
    let myNotes = localStorage.getItem("notes");

    if (myNotes === null) {
        allNotes = [];
    } else {
        allNotes = JSON.parse(myNotes);
    }

    let notes = document.getElementById('notes');
    let title = document.getElementById('title');
    let category = document.getElementById('category').value;


    let newNote = {
        title: title.value,
        description: notes.value,
        category: category
    };

    allNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(allNotes));
    notes.value = '';
    title.value = '';

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

    let inputDiv = document.querySelector('.input-div');
    inputDiv.style.display = 'flex';
    let dis = document.querySelector('.dis-del');
    dis.style.display = 'none';
    let allNotes = JSON.parse(localStorage.getItem('notes'));
    let notes = document.getElementById('notes');

    document.querySelector('#note-para').innerHTML = "Update your note!"


    document.getElementById('btn').innerText = "Update note";


    notes.value = allNotes[noteindex].description;
    title.value = allNotes[noteindex].title;

    notes.focus();

    document.getElementById('btn').onclick = function () {
        let inputDiv = document.querySelector('.input-div');
        inputDiv.style.display = 'none';

        allNotes[noteindex].description = notes.value;
        allNotes[noteindex].title = title.value;
        localStorage.setItem("notes", JSON.stringify(allNotes));
        showAllNotes();


        notes.value = '';


        document.getElementById('btn').innerText = "Add";


        document.getElementById('btn').onclick = printMessage;
    };
}

function viewNote(noteindex) {
    let allNotes = JSON.parse(localStorage.getItem('notes'));
    let modal = document.getElementById("myModal");
    let modalTitle = document.getElementById("modalTitle");
    let modalDescription = document.getElementById("modalDescription");

    modalTitle.innerText = allNotes[noteindex].title;
    modalDescription.innerText = allNotes[noteindex].description;

    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}


// function showPersonal() {

//     let inputDiv = document.querySelector('.input-div');
//     inputDiv.style.display = 'none';

//     let but = document.querySelector('#btn');
//     but.style.display = 'none';



//     let selectedCategory = "personal";


//     let allNotes;
//     let myNotes = localStorage.getItem("notes");

//     if (myNotes === null) {
//         allNotes = [];
//     } else {
//         allNotes = JSON.parse(myNotes);
//     }
//     let filteredNotes = allNotes.filter(note => note.category === selectedCategory);

//     let noteCon = document.getElementById('notes-card');
//     noteCon.innerHTML = '';

//     filteredNotes.map((note, index) => {
//         let noteHTML = `
//             <div class="card">

//              ${note.description}

//             </div>`;
//         noteCon.innerHTML += noteHTML;
//     });



// }
// function showInternship() {

//     let inputDiv = document.querySelector('.input-div');
//     inputDiv.style.display = 'none';

//     let but = document.querySelector('#btn');
//     but.style.display = 'none';



//     let selectedCategory = "internship";


//     let allNotes;
//     let myNotes = localStorage.getItem("notes");

//     if (myNotes === null) {
//         allNotes = [];
//     } else {
//         allNotes = JSON.parse(myNotes);
//     }
//     let filteredNotes = allNotes.filter(note => note.category === selectedCategory);

//     let noteCon = document.getElementById('notes-card');
//     noteCon.innerHTML = '';

//     filteredNotes.map((note, index) => {
//         let noteHTML = `
//             <div class="card">

//              ${note.description}

//             </div>`;
//         noteCon.innerHTML += noteHTML;
//     });



// }
// function showOther() {

//     let inputDiv = document.querySelector('.input-div');
//     inputDiv.style.display = 'none';

//     let but = document.querySelector('#btn');
//     but.style.display = 'none';



//     let selectedCategory = "other";


//     let allNotes;
//     let myNotes = localStorage.getItem("notes");

//     if (myNotes === null) {
//         allNotes = [];
//     } else {
//         allNotes = JSON.parse(myNotes);
//     }
//     let filteredNotes = allNotes.filter(note => note.category === selectedCategory);

//     let noteCon = document.getElementById('notes-card');
//     noteCon.innerHTML = '';

//     filteredNotes.map((note, index) => {
//         let noteHTML = `
//             <div class="card">

//              ${note.description}

//             </div>`;
//         noteCon.innerHTML += noteHTML;
//     });



// }

let categoryAddClicked = false;

function addCategory() {
    let add = document.querySelector('#show');
    if (categoryAddClicked) {
        add.style.display = 'none';
    } else {
        add.style.display = 'flex';
    }
    categoryAddClicked = !categoryAddClicked;
}







document.addEventListener('DOMContentLoaded', function () {
    initDropdown();
});


function initDropdown() {
    let drop = document.getElementById('category');
    let storedOptions = localStorage.getItem('categories');

    drop.innerHTML = '';


    if (storedOptions) {
        let options = JSON.parse(storedOptions);
        options.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.innerText = optionValue;
            drop.appendChild(option);
        });
    }
}


function saveCat() {
    let showcat = document.querySelector('#show');
    showcat.style.display = 'none';
    let drop = document.getElementById('category');
    let textValue = document.getElementById('add_cate').value;

    if (textValue.length !== 0) {
        const option = document.createElement('option');
        option.innerText = textValue;
        option.value = textValue;
        option.selected = true;

        drop.appendChild(option);


        localStorage.setItem('categories', JSON.stringify([...drop.options].map(option => option.value)));
    }
}




function toggleCategories() {
    let categoriesList = document.getElementById('categories-list');
    let categories = JSON.parse(localStorage.getItem('categories'));

    if (categoriesList.style.display === 'none' || !categoriesList.style.display) {
        categoriesList.innerHTML = ''; // Clear the list
        categories.map(category => {
            let li = document.createElement('li');
            li.textContent = category;
            li.onclick = function () {
                displayNotesByCategory(category); // Call the function to display notes based on the selected category
                categoriesList.style.display = 'none'; // Hide the list after selecting a category
            };
            categoriesList.appendChild(li);
        });
        categoriesList.style.display = 'block';
    } else {
        categoriesList.style.display = 'none';
    }
}

function displayNotesByCategory(category) {
    let showbtn = document.querySelector('#b');
    showbtn.style.display = 'none';
    let inputDiv = document.querySelector('.input-div');
    inputDiv.style.display = 'none';




    const allNotes = JSON.parse(localStorage.getItem('notes')) || [];


    const filteredNotes = allNotes.filter(note => note.category === category);
    document.getElementById('para').innerHTML = category


    const notesCard = document.getElementById('notes-card');
    notesCard.innerHTML = '';


    filteredNotes.map((note, filteredindex) => {
        let noteHTML = `
                    <div class="card">
        
                     ${note.title}

                     
        
                   </div>`;
        notesCard.innerHTML += noteHTML;
    });
}

let newnoteadd = true;

function showTextarea() {
    let dis = document.querySelector('.dis-del');
    dis.style.display = 'flex';
    document.querySelector('#note-para').innerHTML = "Add a note!"

    let inputDiv = document.querySelector('.input-div');
    if (inputDiv.style.display === 'none' || inputDiv.style.display === '') {
        inputDiv.style.display = 'flex';
    } else {
        inputDiv.style.display = 'none';
    }

    let title = document.getElementById('title');
    title.value = '';
}



















