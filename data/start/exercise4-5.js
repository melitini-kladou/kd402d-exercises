// Exercises 4 and 5: variables as arguments, and data you can see
// beat comes from exercise3.js. Every file on the page can use the variables the others make.

function playNote(name, length, time) {
  // TODO 5: log what is playing, before the note plays:
  //         console.log("Playing " + name + " for " + length);
  synth.triggerAttackRelease(name, length, time);
  console.log("Playing" + name + "for" + length);
}
const note1 = "C4";
const note4 = "E4";
const note5 = "G4";
const notelength = "16n";
// TODO 4a: store the three notes and one length in variables, here, above the function.
// TODO 4b: use those variables in the calls below instead of the values typed in.
// TODO 4c: change the length variable once. Do all three notes change?
function exercise4(start) {
playNote(note1, notelength, start);
playNote(note2, notelength, start + beat);
playNote(note3, notelength, start + beat * 2);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
