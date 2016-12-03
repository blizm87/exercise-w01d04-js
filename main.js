// task 1
// Write a function called knighted that takes a name and returns it with "Sir" in front
// when you use it - it should look like this
var knighted = function (name){
  return "Sir " + name;
};
// var name = knighted('Elton');
// console.log(name) => 'Sir Elton'
var name = knighted('Elton');
console.log(name);
// task 2
// Write a function called doubleIt that takes a number, doubles it and returns the new number
var doubleIt = function (num){
  return num * 2;
};
// var answer = doubleIt(2);
// console.log(answer) => 4
var answer = doubleIt(2);
console.log(answer);
// task 3
// Write a function called makeUser that takes a name and returns a new object
var makeUser = function (xname){
  var result = {};
  result['name']= xname;
  return result;
};
// var user = makeUser('Dave');
// console.log(user) => {name: 'Dave'}
var user = makeUser('Dave');
console.log(user);
// task 4
// Write a function called makeLink that takes a title and a url and returns a string of html
var makeLink = function (title, url){
  return '<a href="' + url + '">' + title + '</a>';
};
// var aTag = makeLink('google', 'http://www.google.com');
// console.log(aTag) => '<a href="http://www.google.com">google</a>'
var aTag = makeLink('google', 'http://www.google.com');
console.log(aTag);
// task 5
// Write a function called second that takes an array and returns the 2nd element in it
var second = function (array){
  return array[1];
};
// var answer = second(['a', 'b', 'c']);
// console.log(answer) => 'b'
var answer = second(['a', 'b', 'c']);
console.log(answer);
// task 6
// Write a function called toSentence that takes an array and returns a string
// where the items are joined by commas (except the last one which is joined with 'and')
// where the first letter is capitalized and the string ends in an exclamation point.
var toSentence = function (array) {


 //var str3 = str2.charAt(1).toUpperCase();
  return;
};
// var sentence = toSentence(['lions', 'tigers', 'bears']);
// console.log(sentence) // 'lions, tigers, and bears!'
//var sentence = toSentence(['lions', 'tigers', 'bears']);
//console.log(sentence);

// task 7
// Write a function called random number that returns a random number between 0 and x
// Hint: Take a look at MDN's docs on Math.random
var randomNumber = function (range){
  return Math.random()*range;
}

 var answer = randomNumber(5);
 console.log(answer); // 0..5


// task 8
// Write a function called magicEightball that returns a random answer from the following list
// "yes", "no", "maybe", "ask again later", "most likely"
var magicEightball = function (){
  var rollBall = Math.random() * 100;

  if (rollBall < 21){
    console.log("yes");
  }
  else if (rollBall <41 && rollBall>20){
    console.log("no");
  }
  else if (rollBall <61 && rollBall>40){
    console.log("maybe");
  }
  else if (rollBall <81 && rollBall>60){
    console.log("ask again later");
  }
  else if (rollBall >80){
    console.log("most likely");
  }
  //switch (rollBall) {
    //case (rollBall <21):
      //console.log("yes");
      //break;
    //case (rollBall <41) && (rollBall >20):
    //  console.log("no");
    //  break;
    //case (rollBall <61) && (rollBall >40):
    //  console.log("maybe");
    //  break;
    //case (rollBall <81) && (rollBall >60):
    //  console.log("ask again later");
    //  break;
    //case (rollBall > 80):
    //  console.log("most likely");
    //default:
    //  console.log("Did not work");
  //}
  return rollBall;
}

 var answer = magicEightball();
 console.log(answer) // yes || no || maybe etc...



// task 9
// write a function called pluck that takes an array of objects and a key as arguments
// and returns a list of those properties

var pluck = function(array,key){
  var result = [];
  for (var count = 0; count < array.length; count++){
    result.push(array[count][key]);
  };
  return result;
};
var students = [{name: 'Harry', age: 12}, {name: 'Hermione', age: 13}, {name: 'Draco', age: 13}];
var names = pluck(students, 'name');
console.log(names) // ['Harry', 'Hermione', 'Draco']


