const textArea = document.querySelector('.noteText');
const title = document.querySelector('.title');
const noteText = document.querySelector('.noteText');
const notes = document.querySelector('.notes');
const note = document.querySelector('.note');
const addingNote = document.querySelector('.Adding-note');
const minusIcon = document.querySelector('.fa-minus');
const plusIcon = document.querySelector('.fa-plus');
const createBtn = document.querySelector('.create-note');

let noteTextVisible = false; // Track the visibility state of the note text area



// showNoteText function
const showNoteText = () => {
  noteText.style.display = 'block';
  noteText.classList.add('note-now');
  title.setAttribute('placeholder', 'Title');
  title.style.fontSize = '20px';
  minusIcon.classList.add('show');
  plusIcon.style.display = 'none';
  createBtn.style.display = 'none';
  noteTextVisible = true; // Update the visibility state
};



const hideNoteText = () => {
  noteText.style.display = 'none';
  noteText.classList.remove('note-now');
  minusIcon.classList.remove('show');
  plusIcon.style.display = 'block';
  createBtn.style.display = 'none';
  if (title.value.trim().length === 0) {
    title.setAttribute('placeholder', 'Make A note ....');
  }
  noteTextVisible = false; // Update the visibility state
};

const addNote = () => {
  if (!plusIcon.classList.contains('show')) {
    return;
  }

  const t = title.value.trim();
  const n = noteText.value.trim();
  if (t.length === 0 && n.length === 0) {
    return;
  }

  const noteData = {
    title: t,
    content: n,
  };

  // Get existing notes from localStorage or initialize an empty array
  const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

  // Add the new note to the array
  existingNotes.push(noteData);

  // Store the updated notes array in localStorage
  localStorage.setItem('notes', JSON.stringify(existingNotes));

  notes.innerHTML += `
    <div class="note">
      <h3 class="title-text">${t}</h3>
      <p class="note-blog">${n}</p>
      <i class="fas fa-edit"></i>
      <i class="fa fa-trash"></i>
          </div>
  `;
  title.value = '';
  noteText.value = '';
  hideNoteText();
};

const showMessageForNote = (message) => {
  const addMessageElement = document.createElement('p');
  addMessageElement.textContent = message;
  addMessageElement.style.color = 'green';
  addMessageElement.style.fontWeight = 'bold';
  addMessageElement.style.display = 'block';

  // Replace the createBtn with the message element
  createBtn.parentNode.replaceChild(addMessageElement, createBtn);

  // Automatically remove the message after 3 seconds
  setTimeout(() => {
    // Replace the message element with the createBtn
    addMessageElement.parentNode.replaceChild(createBtn, addMessageElement);
  }, 3000);
};


createBtn.addEventListener('click', () => {
 showMessageForNote("Note Successfully Added");
})
document.addEventListener('DOMContentLoaded', () => {
  // Get existing notes from localStorage or initialize an empty array
  const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

  // Populate the notes container with the stored notes
  existingNotes.forEach((noteData) => {
    const { title, content } = noteData;
    notes.innerHTML += `
      <div class="note">
        <h3 class="title-text">${title}</h3>
        <p class="note-blog">${content}</p>
        <i class="fas fa-edit"></i>
        <i class="fa fa-trash"></i>
      </div>
    `;
  });
});

const updateMinusIconVisibility = () => {
  if (noteTextVisible) {
    if (title.value.trim().length > 0 || noteText.value.trim().length > 0) {
      minusIcon.classList.remove('show');
      plusIcon.classList.add('show');
      createBtn.style.display = 'block';
    } else {
      minusIcon.classList.add('show');
      plusIcon.classList.remove('show');
      createBtn.style.display = 'none';
    }
  } else {
    minusIcon.classList.remove('show');
    plusIcon.classList.add('show');
    createBtn.style.display = 'none';
  }
};


// Rest of your code...
title.addEventListener('input', updateMinusIconVisibility);
noteText.addEventListener('input', updateMinusIconVisibility);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-plus')) {
    showNoteText();
  } else if (event.target.classList.contains('fa-minus')) {
    hideNoteText();
  }
});

createBtn.addEventListener('click', () => {
  if (title.value.trim().length > 0 || noteText.value.trim().length > 0) {
    addNote();
  }
  createBtn.style.display = 'none';
});

document.addEventListener('mouseover', (event) => {
  if(event.target.classList.contains("note")) {
   event.target.querySelector('.fa-trash').classList.add('show');
  } 
 })
 
 document.addEventListener('mouseout', (event) => {
   if(event.target.classList.contains("note")) {
    event.target.querySelector('.fa-trash').classList.remove('show');
  } 
  })

// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('fa-trash')) {
//     event.preventDefault(); // Prevent the default behavior of the trash icon

//     const noteElement = event.target.closest('.note'); // Find the parent note element
//     // const notesContainer = noteElement.parentElement;
//     const existingNotes = JSON.parse(localStorage.getItem('notes'));

//     // Find the index of the note in the existing notes array
//     const noteIndex = Array.from(notes.children).indexOf(noteElement);

//     // Remove the note from the DOM
//     noteElement.remove();

//     // Remove the note from the existing notes array
//     existingNotes.splice(noteIndex, 1);

//     // Update the notes array in localStorage
//     localStorage.setItem('notes', JSON.stringify(existingNotes));

//     alert('Are you sure you want to delete');
//   }
// });
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
    const noteElement = event.target.closest('.note'); // Find the parent note element

    // Confirm the deletion with the user
    if (confirm('Are you sure you want to delete this note?')) {
      // Remove the note from the DOM
      noteElement.remove();

      // Get existing notes from localStorage
      const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

      // Filter out the deleted note from the existing notes array
      const updatedNotes = existingNotes.filter((note) => {
        return (
          note.title !== noteElement.querySelector('.title-text').textContent ||
          note.content !== noteElement.querySelector('.note-blog').textContent
        );
      });

      // Update the notes array in localStorage
      localStorage.setItem('notes', JSON.stringify(updatedNotes));

      // Show a success message
      showMessageForNote('Note deleted successfully');
    }
  }
});



document.addEventListener('click', (event) => {
  if(event.target.classList.contains("fa-trash")) {
    event.target.parentElement.remove('note');
    alert("Are you sure you want to delete");
  } 
 })
  // event listener for editing

const showNoteTextUpdates = () => {
  noteText.style.display = 'block';
  noteText.classList.add('note-now');
  title.setAttribute('placeholder', 'Title');
  title.style.fontSize = '20px';
  minusIcon.classList.remove('show');
  plusIcon.style.display = 'none';
  createBtn.style.display = 'none'; // Hide the create note icon
  
};


const hideNoteTextUpdates = () => {
  noteText.style.display = 'none';
  noteText.classList.remove('note-now');
  minusIcon.classList.remove('show');
  plusIcon.style.display = 'block';
  createBtn.style.display = 'none'; // Hide the create note icon
  if (title.value.trim().length === 0) {
    title.setAttribute('placeholder', 'Make A note ....');
  }
};
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-edit')) {
    const noteElement = event.target.parentElement;
    const titleTextElement = noteElement.querySelector('.title-text');
    const noteTextElement = noteElement.querySelector('.note-blog');
    const updatedTitle = titleTextElement.textContent;
    const updatedNoteText = noteTextElement.textContent;

    title.value = updatedTitle;
    noteText.value = updatedNoteText;

    // Show the note text area
    showNoteTextUpdates();

    // Hide the create button when editing an existing note
    createBtn.style.display = 'none';

    // Create the update button
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.style.padding = '10px';
    updateButton.style.color = '#fff';
    updateButton.style.background = 'green';
    updateButton.style.border = 'none';
    updateButton.style.borderRadius = '5px';

    // Add event listener to the update button
    updateButton.addEventListener('click', () => {
      // Update the note text and title
      titleTextElement.textContent = title.value;
      noteTextElement.textContent = noteText.value;

      // Clear the input fields
      title.value = '';
      noteText.value = '';

      // Hide the note text area
      hideNoteTextUpdates();

      // Remove the update button
      noteElement.removeChild(updateButton);

      // Show the create button only when there are no existing notes
      const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
      if (existingNotes.length === 0) {
        createBtn.style.display = 'block';
      }
    
      // Show a success message
      showMessage('Note updated successfully');
    });

    // Append the update button to the note element
    noteElement.appendChild(updateButton);
  }
});


// message function

const showMessage = (message) => {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageElement.style.color = 'green';
  messageElement.style.fontWeight = 'bold';
  messageElement.style.display = 'block';
  messageElement.style.top = '0px';
  notes.appendChild(messageElement);

  // Automatically remove the message after 3 seconds
  setTimeout(() => {
    notes.removeChild(messageElement);
  }, 3000);
};

