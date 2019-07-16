var array = ["Your limitation—it's only your imagination","Only those who will risk going too far can possibly find out how far one can go–T. S. Eliot", " “Success is most often achieved by those who don’t know that failure is inevitable.” – Coco Chanel"];


var button = $('button');
var text = $('p');

button.on('click', doSomething);


function doSomething() {
  //button.changeColors("pink");
  var dogs = Math.random ()* array.length;
  var cats = Math.floor (dogs);
  var fishes = array[cats];
  text.text(fishes);
}
