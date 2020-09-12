console.log('Loops && Conditionals')


// 1. Easy Going
console.log('~~~~~')
console.log('1. Easy Going')
console.log('~~~~~')

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Get Even
console.log('~~~~~')
console.log('2. Get Even')
console.log('~~~~~')

for (let i = 0; i <= 200; i+=2) {
  console.log(i);
}

// 3. Excited Kitten
console.log('~~~~~')
console.log('3. Excited Kitten')
console.log('~~~~~')

let random = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away'];
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    let randomIndex = Math.floor(Math.random() * random.length)
    console.log(random[randomIndex]);
  }
  console.log('Love me, pet me! HSSSS!');
}


// 4. Fizz Buzz
console.log('~~~~~')
console.log('4. Fizz Buzz')
console.log('~~~~~')

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}

// alternative? 

let res;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    res = '';
    if (i % 3 === 0) res += 'Fizz';
    if (i % 5 === 0) res += 'Buzz';
    console.log(res);
  } else {
    console.log(i)
  }
}


// 5. Getting to Know You
console.log('~~~~~')
console.log('5. Getting to Know You')
console.log('~~~~~')

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1.
kenny[0] = "Gameboy";

// 2.
jimClark[1] += 1;

// 3.
ryan[2] = 'Gotham City';

// 4.
reuben.pop();
reuben.push('Chicago')

// 5.
jimHaff.pop();
jimHaff.push('Seoul', 'Bali', 'Queenstown')

// Bonus
jimHaff.splice(2, 1)

console.log(jimHaff)
console.log(jimClark)
console.log(kenny)
console.log(reuben)
console.log(ryan)




// 6. Yell at the Ninja Turtles
console.log('~~~~~')
console.log('6. Yell at the Ninja Turtles')
console.log('~~~~~')

// 1.
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// 2.
for (let i = 0; i < ninjaTurtles.length; i++) {
  console.log(ninjaTurtles[i].toUpperCase());
}

// 3.
for (let i = 0; i < ninjaTurtles.length; i++) {
  ninjaTurtles[i] = ninjaTurtles[i].split('');
  for (let j = 0; j < ninjaTurtles[i].length; j+=2) {
    ninjaTurtles[i][j] = ninjaTurtles[i][j].toUpperCase();
  }
  ninjaTurtles[i] = ninjaTurtles[i].join('')
}

console.log(ninjaTurtles)




// 7. Return of the Closets
console.log('~~~~~')
console.log('7. Return of the Closets')
console.log('~~~~~')

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Alien Attire
let kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset)

// Dress 'em Up
function kristynGetsDressed() {
  let kristynsOutfit = '';
  let items = 3;
  let index;
  for (let i = 0; i < items; i++) {
    index =  Math.floor(Math.random() * kristynsCloset.length);
    if (i < kristynsCloset.length - 1) kristynsOutfit += kristynsCloset[index] + ', ';
    else kristynsOutfit += 'and ' + kristynsCloset[index]
  }
  return kristynsOutfit;
}
for (let i = 0; i < 3; i++) {
  console.log(`Kristyn is wearing ${kristynGetsDressed()} today. So stylish!`)
}


function thomGetsDressed() {
  let thomsOutfit = '';
  let index;
  for (let i = 0; i < thomsCloset.length; i++) {
    index =  Math.floor(Math.random() * thomsCloset[i].length);
    if (i < thomsCloset.length - 1) thomsOutfit += thomsCloset[i][index] + ', ';
    else thomsOutfit += 'and ' + thomsCloset[i][index];
  }
  return thomsOutfit;
}
for (let i = 0; i < 3; i++) {
  console.log(`Thom is wearing a ${thomGetsDressed()} today.`)
}

// Dirty Laundry
kristynsCloset.forEach(item => console.log(`WHIRR: Now washing ${item}`));


// Inventory
for (let i = 0; i < thomsCloset.length; i++) {
  console.log(thomsCloset[i]);
}

// Multiples of 3 and 5
let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) sum += i;
}
console.log(sum);


// Triangles
console.log('Triangles');
function triangles(argument=7) {
  let triangle;
  for (let i = 1; i <= argument; i++) {
    triangle = '';
    for (let j = 0; j < i; j++) {
      triangle += '#';
    }
    console.log(triangle);
  }
}
triangles();

console.log('rightIsosceles');
function rightIsosceles(argument=7) {
  let triangle;
  for (let i = 1; i <= argument; i++) {
    triangle = '';
    for (let k = 0; k <= argument - i; k++) {
      triangle += ' ';
    }
    for (let j = 0; j < i; j++) {
      triangle += '#';
    }
    console.log(triangle);
  }
}
rightIsosceles();

console.log('upsideDownLeft');
function upsideDownLeft(argument=7) {
  let triangle;
  for (let i = argument; i > 0; i--) {
    triangle = '';
    for (let j = 0; j < i; j ++) {
      triangle += '#';
    }
    console.log(triangle);
  }
}
upsideDownLeft();

console.log('upsideDownRight');
function upsideDownRight(argument=7) {
  let triangle;
  for (let i = 1; i <= argument; i++) {
    triangle = '';
    for (let j = i; j > 0; j--) {
      triangle += ' ';
    }
    for (let k = argument - i; k >= 0; k--) {
      triangle += '#';
    }
    console.log(triangle);
  }
}
upsideDownRight();


const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
function median(arr) {
  const medianIndex = Math.floor(arr.length / 2);
  return arr.sort()[medianIndex];
}
console.log(median(nums))
