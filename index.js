
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// Animal sounds object

// Animal sounds object
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

// Destructuring animal sounds
const { moo, neigh, baa, oink, cluck } = animalSounds;

// Animal names object
const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

// Destructuring animal names
const { bessie, dolly, babe, little } = animalNames;

// Animal colors object
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

// Destructuring animal colors
const { blackAndWhite, black, pink } = animalColors;

// Rainbow colors array
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Destructuring rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Destructuring rainbow colors with initials
const [r, o, y, g, b, , v] = rainbowColors;

// Destructuring to declare indigo using 'indg'
const [, , , , , indg] = rainbowColors;

// Muppet object
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: ["Rainbow Connection", "Moving Right Along", "Bein' Green", "I Hope That Something Better Comes Along"],
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

// Destructuring muppet object
const { muppetName, color, song, job, partner } = muppet;

// Destructuring songs and nested object
const { songs: [, song2, , song4], nested: { job: nestedJob, partner: nestedPartner } } = muppet;
