//// Putting in table of plankton picture and pictues that move

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const canvas = document.getElementById(`Darcy_canvas`);
const ctx = canvas.getContext("2d");
ctx.canvas.width = WIDTH
ctx.canvas.height = HEIGHT;
ctx.fillStyle = "cyan";
ctx.font = "30px Times New Roman";
ctx.fillText("Plankton!!", canvas.width / 1.6, canvas.height / 6);
ctx.textAlign = "center"

window.onload = () => {

  // Getting images
  const image = document.getElementById("source2");
  image.style.position="absolute"
  const image2 = document.getElementById("source");
  ctx.drawImage(image2, 190, 100, 150, 180);

  const image_add = new Image();
  image_add.src = "plankton_pics/SPCP2-1501025702-061553-000-272-2468-208-235.png";

// Making imaeges move
const move_mutliplier = 0.5 // multiple to determine how much random walk will move
const step = (timestamp, elements, duration) =>{
  const delta_time = timestamp - init_time
  ctx.clearRect(0,0, WIDTH, HEIGHT)
  ctx.fillText("Plankton!!", canvas.width / 2, canvas.height / 6);
  elements.forEach(e => {
    let {element, x, y, dx, dy} = e
    const random_val_x = Math.random()
    const random_val_y = Math.random()
    if ((Math.floor(random_val_x*100)%2) ==0) {x = x+random_val_x*move_mutliplier}
    else {x = x-random_val_x*move_mutliplier}
    e.x = x

    if ((Math.floor(random_val_y*100)%2) ==0) {
      y = y+random_val_y*move_mutliplier}
    else {y = y-random_val_y*move_mutliplier}

      e.y = y
      ctx.drawImage(element,x, y, dx, dy )
  })
  if (delta_time < duration){//Can also maybe try the cancel animation option
    window.requestAnimationFrame(timestamp =>{
      step(timestamp, elements, duration)
    })
  }
}
let init_time
const element_array = [
  {element: image, x:10,y:10, dx:150, dy:150},
  {element: image2, x:10, y:200, dx:150, dy:150},
  {element: image_add, x:10, y:350, dx:150, dy:150}
]

const duration_time = 6000

// Putting in table of images
    const my_pics = [
       'plankton_pics/SPCP2-1484136018-027039-001-1972-1192-48-176.png',
       'plankton_pics/SPCP2-1500817910-129078-001-2776-1376-240-176.png',
       'plankton_pics/SPCP2-1500835859-041307-000-2240-1704-168-152.png',
       'plankton_pics/SPCP2-1500892063-167948-000-1156-2240-144-176.png',
       'plankton_pics/SPCP2-1500975288-130457-000-3060-1508-176-312.png',
       'plankton_pics/SPCP2-1500990012-242589-004-2656-1016-96-216.png',
       'plankton_pics/SPCP2-1501003543-052686-001-2124-1624-160-200.png',
       'plankton_pics/SPCP2-1501025702-061553-000-272-2468-208-235.png',
       'plankton_pics/SPCP2-1501026355-066571-000-3072-2028-168-144.png',
       'plankton_pics/SPCP2-1501055016-198246-007-2764-84-176-192.png',
       'plankton_pics/SPCP2-1501058082-010611-001-856-376-360-160.png',
       'plankton_pics/SPCP2-1501076425-022486-001-1936-2072-264-288.png',
       'plankton_pics/SPCP2-1501093050-113344-005-2376-736-944-976.png',
       'plankton_pics/SPCP2-1501099627-163557-002-2132-732-248-328.png',
       'plankton_pics/SPCP2-1501124598-352655-004-632-1756-432-72.png',
       'plankton_pics/SPCP2-1501139567-042142-001-1684-2472-152-231.png',
       'plankton_pics/SPCP2-1501143215-070184-008-772-1800-232-304.png',
       'plankton_pics/SPCP2-1501162976-028271-005-904-192-208-160.png',
       'plankton_pics/SPCP2-1501177335-004806-001-584-1940-512-128.png',
       'plankton_pics/SPCP2-1501178152-011114-001-3176-516-128-592.png',
       'plankton_pics/SPCP2-1501203224-203079-004-48-2332-128-152.png',
       'plankton_pics/SPCP2-1501235225-131382-001-2564-2048-344-624.png',
       'plankton_pics/SPCP2-1501270309-165623-002-2620-76-112-120.png',
       'plankton_pics/SPCP2-1501272984-186059-001-2640-2064-296-344.png',
       'plankton_pics/SPCP2-1501306343-088111-001-1236-1360-112-120.png'
     ]

let myTable
     myTable = `<table style='position: absolute; top: ${canvas.height/5}; margin-left:${canvas.width/4};'><tr>`
    for (let i = 0; i<my_pics.length; i++){
        myTable+=`<td><img src = "${my_pics[i]}" style="width:100px;height:100px;"></td>`
        if (i%5 == 4){
        myTable+="</tr><tr>"}
  }
    myTable += "</tr></table>";

    const body = document.getElementsByTagName("body")[0];

    // Uncomment line below if want table of images to show up
        // const table_of_pics = document.createElement('table')
        // table_of_pics.style.position = "absolute"
        // table_of_pics.style.top = "190px"
        // table_of_pics.style.left = "200px"
        // table_of_pics.innerHTML = myTable
        // body.appendChild(table_of_pics)

// Inserting button
    // 1. Create the button
    const button4 = document.createElement("button")
    button4.style.backgroundColor = "white"
    button4.style.position="absolute"
    button4.style.top = "40px"
    button4.style.left = "150px"
    button4.innerHTML = "Equation of unit circle"

    // 2. Append somewhere
    body.appendChild(button4)

    // 3. Add event handler
    button4.addEventListener ("click", ()=> {
      alert("x^2 + y^2 = 1")
    })

    // Trying to use image as button
    const image_button = new Image()
    image_button.src = "plankton_pics/SPCP2-1501025702-061553-000-272-2468-208-235.png"
    image_button.style.position="absolute"
    image_button.style.top = "10px"
    image_button.style.left = '400px'
    image_button.style.width = 100
    image_button.style.height=100
    // ctx.drawImage(image_button, 30,20, 500,500)
    image_button.onclick = () =>{
      window.location.href = 'http://www.darcytaniguchi.com'
    }
    document.body.appendChild(image_button)

    // const button_position = (position_type, element, top, left, width, height){
    //   element.style.position = position_type
    // }


// Button that does multiple things
    const add_img_and_date  = () =>{
      ctx.drawImage(image,200,200,90,90)
      ctx.fillText(Date(),400,300)
    }

    const button5 = document.createElement("button")
    const change_color = (element, color) =>{
      return element.style.backgroundColor = color
    }

    button5.innerHTML = "Button experimentation"
    body.appendChild(button5)
    button5.addEventListener('click', add_img_and_date, false)
    button5.addEventListener('mouseenter',  event =>{
      event.target.style.backgroundColor = "blue"
      setTimeout( ()=> {
        event.target.style.backgroundColor=""},1000)
    }, false)
    // button5.addEventListener('mouseover', change_color(button5, 'magenta'), false)
  }// end of window.onload

  /*
Other ideas to consider:
 - Responsive resizing
  - Consider looking here https://codepen.io/cRckls/pen/mcGCL?editors=0010#0
  - Maybe also look here https://stackoverflow.com/questions/1297449/change-image-size-with-javascript
- Buttons change color when hovered over and when depressed
- Having tabs that lead to different pages
  */
