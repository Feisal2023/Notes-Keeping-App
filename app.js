// Selecting elements from the DOM
const textArea = document.querySelector('.textArea');
const title = document.querySelector('.title');
const noteText = document.querySelector('.noteText');
const notes = document.querySelector('.notes');
const note = document.querySelector('.note');
const addingNote = document.querySelector('.Adding-note');
const minusIcon = document.querySelector('.fa-minus');

// showNoteText function
const showNoteText = () => {
  noteText.style.display = 'block';
  noteText.classList.add('note-now');
  title.setAttribute('placeholder', 'Title');
  title.style.fontSize = '20px';
  minusIcon.classList.add('show');
};

const hideNoteText = () => {
  noteText.style.display = 'none';
  noteText.classList.remove('note-now');
  minusIcon.classList.remove('show');
  addingNote.innerHTML += '<i class="fas fa-plus"></i>';
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-plus')) {
    showNoteText();
    addingNote.removeChild(addingNote.querySelector('.fa-plus'));
  } else if (event.target.classList.contains('fa-minus')) {
    hideNoteText();
    addingNote.appendChild(minusIcon);
  }
});
