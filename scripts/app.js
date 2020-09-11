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

kenny[0] = "Gameboy";
jimClark[1] += 1;
ryan[2] = 'Gotham City';
reuben.pop();
reuben.push('Chicago')
jimHaff.pop();
jimHaff.push('Seoul', 'Bali', 'Queenstown')
jimHaff.splice(2, 1)

console.log(jimHaff)
console.log(jimClark)
console.log(kenny)
console.log(reuben)
console.log(ryan)


