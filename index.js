/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


const man = {
  species: 'human',
  name: 'Jon',
  age: 25,
  gender: 'male',
  legs: 2,
  hands: 2,
  say: 'Winter is coming!',
  friends: ['Ghost', 'Ygritte']
};

const woman = {
  species: 'human',
  name: 'Ygritte',
  age: 25,
  gender: 'female',
  legs: 2,
  hands: 2,
  say: 'You Know Nothing, Jon Snow!',
  friends: ['Jon']
};

const direwolf = {
  species: 'direwolf',
  name: 'Ghost',
  gender: 'male',
  legs: 4,
  hands: 0,
  say: 'woof-woof!'
};

const cat = {
  species: 'cat',
  name: 'Tiger',
  age: 1,
  gender: 'female',
  legs: 4,
  hands: 0,
  say: 'meow!',
};

const catWoman = {
  species: 'human',
  name: 'CatWoman',
  age: 30,
  gender: 'female',
  legs: 2,
  hands: 2,
  say: cat.say,
};


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

// human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny

const inhabitants = [man, woman, direwolf, cat, catWoman];

const makeMessage = (obj) => {
  let friends = '';
  if (obj.hasOwnProperty(friends) && obj.friends.length > 0) {
    friends = obj.friends.join(', ');
  }

  return [
    `${obj.species}`,
    `<strong>${obj.name}</strong>`,
    `${obj.gender}`,
    `${obj.legs}`,
    `${obj.hands}`,
    `${obj.say}`,
    `${friends}`,
  ].join('; ')
};

inhabitants.forEach(obj => print(makeMessage(obj)));
