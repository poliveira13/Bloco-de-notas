const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

yargs.version("1.0.1");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    getNotes.addNotes(argv.title, argv.body);
  }
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note!",
  buider: {
    title: {
      describe: "Remove note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    getNotes.removeNote(argv.title);
  }
});

//Create List command
yargs.command({
  command: "list",
  describe: "Show a List",
  builder: {
    title: {
      describe: "List notes Titles",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    getNotes.listNotes(argv.title, argv.body);
  }
});
//create Read command
yargs.command({
  command: "read",
  describe: " Read your Notes!",
  builder: {
    title: {
      describe: "Read note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    getNotes.readNotes(argv.title);
  }
});

console.log(yargs.argv);
