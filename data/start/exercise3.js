// Exercise 3: tempo arithmetic

const bpm = 90; // beats per minute
const beat = 60 / bpm; // how long one beat lasts, in seconds
console.log("Exercise 3: one beat lasts " + beat + " seconds");
console.log("Excercise 3: one beat lasts" + Math.round(beat * 1000) + " millieseconds");
// TODO 3a: log the beat in milliseconds, rounded: Math.round(beat * 1000)

function exercise3(start) {
  synth.triggerAttackRelease("C4", "8n", start);
  synth.triggerAttackRelease("E4", "8n", start + beat);
  synth.triggerAttackRelease("E4", "8n", start + beat * 2);
  // TODO 3b: play "E4" one beat after start, then "G4" two beats after start.
  //          Use beat, not a number: start + beat, start + beat * 2
}

// TODO 3c: change bpm (try 60, then 160) and play again. Which lines did you change?

// ---------- You don't need to change anything below this line ----------

playOnClick("play-3", exercise3);
