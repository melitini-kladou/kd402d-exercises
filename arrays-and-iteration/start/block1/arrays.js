// Arrays and iteration · Block 1: making arrays
// Exercises 1 to 4. Nothing plays in this block: everything happens in the console.
// The habit for today: predict first, in a comment, then save and check the console.
// After each exercise: save, read the console, and commit.

// This morning's melody: four notes, kept in order.
let melody = ["C4", "E4", "G4", "B4"];

// ---------- Exercise 1: write the list out ----------
// 1a Predict, in a comment: what do these three log?
//      melody        melody.length        melody[0]
// TODO 1b: log them, one console.log each:
console.log(melody);// It will play the melody.
console.log(melody.length);// It logs 4.
console.log(melody[0]);// It plays the first note, C4.
//          Were the length and the first index what you expected? // Yes.
// TODO 1c: log the last note twice: once as melody[3], once as melody[melody.length - 1].
//          In a comment: why is the last index 3, when there are 4 notes?
console.log(melody[3]);
console.log(melody[melody.lenght - 1]);
// 1d Predict: what does melody[4] log? Check.// undefined?
console.log(melody[4]);

// ---------- Exercise 2: start empty, build it up ----------
// TODO 2a: make an empty array and log its length:
//            let riff = [];
//            console.log(riff.length);
let riff = [];
console.log(riff.length);
// TODO 2b: add four notes to the end, one at a time:  riff.push("C4");
//          Log riff.length after each push. Predict each number first.
riff.push("C4");
console.log(riff.length);// 1.
riff.push("C4");
console.log(riff.length);// 2.
riff.push("G4");
console.log(riff.length);//3
riff.push("G4");
console.log(riff.length)// 4.
// 2c In a comment: when would you start from [] instead of writing all the notes out?
// Use [] when you don't have the notes yet and plan to add them later.
// ---------- Exercise 3: add at the front too ----------
// TODO 3a: start from two notes, add one to the front and one to the end:
//            let chord = ["E4", "G4"];
//            chord.unshift("C4");
//            chord.push("B4");
let chord = ["E4", "G4"];
chord.unshift("C4");
chord.push("B4");
// 3b Before you log anything: what is the index of "E4" now? Of "B4"? Write it in a comment.
// "E4" = [1], "B4" = [3]
// TODO 3c: log chord, chord[1] and chord[3] to check.
//          In a comment: which notes changed their index, and why?
console.log(chord);
console.log(chord[1]);
console.log(chord[3]);

// ---------- Exercise 4: an array of numbers ----------
// Arrays hold any kind of value, not only note names. You'll use these for timing in block 4.
// TODO 4a: let steps = [0.2, 0.4, 0.6, 0.8];
//          Predict steps[2], then log it.
let steps = [0.2, 0.4, 0.6, 0.8];
console.log(steps[2]);
// TODO 4b: predict, then log:  steps[1] + steps[2]
//          Is it a number or a string? How can you tell from the console?
console.log(steps[1] + steps[2]);// It is a number, the number 1.
// 4c One more way to make an empty array, so you recognise it when you see it:
//      let empty = new Array();
//    It means the same as []. Log empty.length. In your own code, write [].
let empty = new Array();
console.log(empty.length);
