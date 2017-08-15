// const fs = require("browserify-fs");

// const directory = "/canvas_practice/plankton_pics";
// const files = fs.readdirSync(directory);
// console.log("The files in this dir are ", files);
// console.log("The number of files = ", files.length);

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const canvas = document.getElementById(`Darcy_canvas`);
const ctx = canvas.getContext("2d");
ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;
ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, 320, 320);
ctx.font = "30px Times New Roman";
ctx.fillText("Plankton!!", canvas.width / 3, canvas.height / 2);
window.onload = function() {
  const image = document.getElementById("source");
  const image2 = document.getElementById("source2");
  ctx.drawImage(image, 10, 10, 150, 180);
  ctx.drawImage(image2, 190, 10, 150, 180);

  const image_add = new Image();
  console.log("image_add = ", image_add);
  image_add.src = "plankton_pics/SPCP2-1501025702-061553-000-272-2468-208-235.png";
  image_add.onload = function() {
    ctx.drawImage(image_add, canvas.width / 7, canvas.height / 7);

    const myArray = new Array();
    myArray[0] = 3.14159;
    myArray[1] = 2.71828;

    const my_pics = [
      'plankton_pics/SPCP2-1501076425-022486-001-1936-2072-264-288.png',
      'plankton_pics/SPCP2-1501143215-070184-008-772-1800-232-304.png'
     ]

    var myTable = "<table style='position: absolute; top: 300px; margin-left:450px;'><tr>"
    myTable+="<td style='width: 100px; color: cyan;'>Col Head 100</td>"
    myTable += "<td style='width: 100px; color: magenta; text-align: right;'>Col Head 2e6</td>";
    myTable += "<td style='width: 100px; color: green; text-align: right;'>Col Head 3.1415927</td></tr>";

// let image_new = new Image()
    for (var i = 0; i<myArray.length; i++){
      // image_new.src = my_pics[i]
      myTable+="<tr><td style='width: 100px;'>Number " + i +" is: </td>"
      myArray[i] = myArray[i].toFixed(5)
      myTable+="<td style='width:100px; text-align: right'>"+myArray[i]+"</td>"
      // myTable+="<td style='width: 100px; text-align: right;'>" + my_pics[i] + "</td></tr>";
      myTable+=`<td><img src = "${my_pics[i]} "></td></tr>`
    }
    myTable += "</table>";
    console.log('myTable = ', myTable)

    document.getElementById('tablePrint').innerHTML = myTable

    // setTimeout( () =>{
    //   console.log('tablePrint', tablePrint)
    // },1500)
  };
};

// window.onload = function() {
//   ctx.drawImage(image, 10, 10, 150, 180);
// };

console.log("this is the ctx", ctx);
console.log("this is the document, ", document);
