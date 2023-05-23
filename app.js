// const textArea = document.querySelector('.noteText');
// const title = document.querySelector('.title');
// const noteText = document.querySelector('.noteText');
// const notes = document.querySelector('.notes');
// const note = document.querySelector('.note');
// const addingNote = document.querySelector('.Adding-note');
// const minusIcon = document.querySelector('.fa-minus');
// const plusIcon = document.querySelector('.fa-plus');
// const createBtn = document.querySelector('.create-note');

// // showNoteText function
// const showNoteText = () => {
//   noteText.style.display = 'block';
//   noteText.classList.add('note-now');
//   title.setAttribute('placeholder', 'Title');
//   title.style.fontSize = '20px';
//   minusIcon.classList.add('show');
//   plusIcon.style.display = 'none';
// };

// const hideNoteText = () => {
//   noteText.style.display = 'none';
//   noteText.classList.remove('note-now');
//   minusIcon.classList.remove('show');
//   plusIcon.style.display = 'block';
// };

// const addNote = () => {
//   const t = title.value.trim();
//   const n = noteText.value.trim();
//   if (t.length === 0 && n.length === 0) {
//     return;
//   }
//   notes.innerHTML += `
//     <div class="note">
//       <h3 class="title-text">${t}</h3>
//       <p class="note-blog">${n}</p>
//       <i class="fas fa-edit"></i>
//       <i class="fa fa-trash"></i>
//     </div>
//   `;
//   title.value = '';
//   noteText.value = '';
//   hideNoteText();
// };

// const updateMinusIconVisibility = () => {
//   if (title.value.trim().length > 0 || noteText.value.trim().length > 0) {
//     minusIcon.classList.remove('show');
//     plusIcon.classList.add('show');
//   } else {
//     minusIcon.classList.add('show');
//     plusIcon.classList.remove('show');
//   }
// };

// title.addEventListener('input', updateMinusIconVisibility);
// noteText.addEventListener('input', updateMinusIconVisibility);

// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('fa-plus')) {
//     showNoteText();
//   } else if (event.target.classList.contains('fa-minus')) {
//     hideNoteText();
//   }
// });


// createBtn.addEventListener('click', () => {
//   if (title.value.trim().length > 0 || noteText.value.trim().length > 0) {
//     createBtn.style.display = 'block';
//     addNote();
//     createBtn.style.display = 'none';
//   }
// });
const textArea = document.querySelector('.noteText');
const title = document.querySelector('.title');
const noteText = document.querySelector('.noteText');
const notes = document.querySelector('.notes');
const note = document.querySelector('.note');
const addingNote = document.querySelector('.Adding-note');
const minusIcon = document.querySelector('.fa-minus');
const plusIcon = document.querySelector('.fa-plus');
const createBtn = document.querySelector('.create-note');

// showNoteText function
const showNoteText = () => {
  noteText.style.display = 'block';
  noteText.classList.add('note-now');
  title.setAttribute('placeholder', 'Title');
  title.style.fontSize = '20px';
  minusIcon.classList.add('show');
  plusIcon.style.display = 'none';
  createBtn.style.display = 'block';
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
};

const addNote = () => {
  const t = title.value.trim();
  const n = noteText.value.trim();
  if (t.length === 0 && n.length === 0) {
    return;
  }
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

const updateMinusIconVisibility = () => {
  if (title.value.trim().length > 0 || noteText.value.trim().length > 0) {
    minusIcon.classList.remove('show');
    plusIcon.classList.add('show');
    createBtn.style.display = 'block';
  } else {
    minusIcon.classList.add('show');
    plusIcon.classList.remove('show');
    createBtn.style.display = 'none';
  }
};

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
