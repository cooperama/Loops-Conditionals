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

