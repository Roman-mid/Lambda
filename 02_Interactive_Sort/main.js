const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getSort() {
  rl.question("Write your words and numbers: ", function(sentence) {

    const str = sentence;

    // console.log('');
    // console.log(str, '- It`s your sentence');
    // console.log('');

    // console.log(1 , 'Show numbers from the smollest');
    // console.log(2 , 'Show numbers from the biggest');
    // console.log(3 , 'Show words by name (from A - Z)');
    // console.log(4 , 'Show words by length');
    // console.log(5 , 'Show unique words and numbers');
    // console.log(' ', 'Write "exit" to close program ');
    // console.log('');


    const strArrUser = str.split(' ') 
    const strSet = new Set(strArrUser);
    const newStr = [...strSet].join(' ').toLowerCase(); // string with unique words and numbers

    if(strArrUser.length == 1) {
      console.log('')
      console.log(newStr, '- Your sentence must have more than one element.')
      getSort();

    } else {

      console.log('');
      console.log(str, '- It`s your sentence');
      console.log('');
  
      console.log(1 , 'Show numbers from the smollest');
      console.log(2 , 'Show numbers from the biggest');
      console.log(3 , 'Show words by name (from A - Z)');
      console.log(4 , 'Show words by length');
      console.log(5 , 'Show unique words and numbers');
      console.log(' ', 'Write "exit" to close program ');
      console.log('');

      // check number or string
      const arrEl = str.split('');
      const numBool = arrEl.some(el => typeof +el === 'number');


      // N U M B E R S
      const numArrStrAll = str.match(/\d+/g); // all numbers
      const numArrAll = numArrStrAll.map(el => +el); // array with numbers (typeof Number)
      const numSet = new Set(numArrAll); 
      const numArr = [...numSet]; // array with unique numbers

      function getMinMaxArr(a, b) {
        return a - b;
      };

      const arrMinMax = numArr.sort(getMinMaxArr); // array 1 - 5
      const arrMaxMin = arrMinMax.slice().reverse(); // array 5 - 1

      const numStrMinMax = arrMinMax.join(' '); // string 1 - 5
      const numStrMaxMin = arrMaxMin.join(' '); // string 5 - 1
      const numStr = numArr.join(' ') // string with unique numbers
    

      // S T R I N G S
      const strArrAll = str.match(/[a-zA-Zа-яёА-ЯЁ]+/g); 
      const newStrArrAll = strArrAll.map(el => el.toLowerCase()); // array with all wards
      const strArrSet = new Set(newStrArrAll);
      const strArr = [...strArrSet]; // array with unique words

      function getArrLength(a, b) {
        return a.length - b.length;
      };

      const strArrSortLength = strArr.sort(getArrLength).join(' ') // string with words by length
      const uniqueStr = strArr.join(' '); // string with unique words
      const strArrSortAZ = strArr.sort().join(' '); // string with words A - Z


      function getResult() {

        rl.question('Select 1 - 5 and press ENTER: ' , function(answer) {

          console.log('');
          console.log(str, '- It`s your sentence.');
          console.log('');

          console.log(1 , 'Show numbers from the smallest to biggest');
          console.log(2 , 'Show numbers from the biggest to smallest');
          console.log(3 , 'Show words by name (from A - Z)');
          console.log(4 , 'Show words by length');
          console.log(5 , 'Show unique words and numbers');
          console.log(' ','Write "exit" to close program ');
          console.log('');
              
          if(answer == 1) console.log(numStrMinMax);
          if(answer == 2) console.log(numStrMaxMin);
          if(answer == 3) console.log(strArrSortAZ);
          if(answer == 4) console.log(strArrSortLength);
          if(answer == 5) console.log(newStr);
          console.log('');

          getResult();
          
          if(answer == 'exit') rl.close();
      
        });

      };

      getResult();
    };

  });

};

getSort();




