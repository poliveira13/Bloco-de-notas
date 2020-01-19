const fs = require("fs");
const chalk = require("chalk");

const texto = "Suas Notas...";

const getNotes = () => {
  return texto;
};

const addNotes = (title, body) => {
  const notes = laodNote();
  const duplicateNote = notes.find(note => note.title === title);
  const addNote = chalk.green.inverse("Nova nota adiciona com sucesso");
  const noteFound = chalk.red.inverse("Titulo já existente");

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(addNote);
  } else {
    console.log(noteFound);
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes, null, 2);
  fs.writeFileSync("notes.json", dataJSON);
};

const laodNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = title => {
  const notes = laodNote();
  const notesTokeep = notes.filter(note => note.title !== title);
  const removeMsg = chalk.bgGreen("Nota Removida com sucesso");
  const notFound = chalk.bgRed("Nenhuma Nota encontrada");

  if (notes.length > notesTokeep.length) {
    console.log(removeMsg);
    saveNotes(notesTokeep);
  } else {
    console.log(notFound);
  }
};

const listNotes = title => {
  const notes = laodNote();

  const msgNotes = chalk.blue("Suas notas: ");

  notes.filter(note => {
    console.log(msgNotes + note.title);
  });
};

const readNotes = title => {
  const notes = loadNote();
  const readNote = notes.find(note => note.title === title);
  const error = chalk.red.inverse("Nota não encontrada");

  if (readNote) {
    console.log(readNote.title);
    console.log(readNote.body);
  } else {
    console.log(error);
  }
};

module.exports = {
  getNote: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
