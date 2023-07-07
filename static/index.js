let nav = document.getElementById("nav");
let rules = document.getElementById("rules");
let rule = document.getElementById("rulebutton");
let time = document.getElementById("time");
let grid = document.getElementById("boxes");
let div_result = document.getElementById("result");
let time_p = document.getElementById("timep");
let boxcover = "https://media-public.canva.com/p4xtM/MAEqogp4xtM/1/tl.png";
let img_box = ["https://en.wikipedia.org/wiki/Wildlife",
  "https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg?crop=1.00xw:0.669xh;0,0.158xh&resize=1200:*"
  , "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
  , "https://ewscripps.brightspotcdn.com/dims4/default/6624f46/2147483647/strip/true/crop/2088x1096+0+148/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fd1%2Fcf%2F854c3ea74c0eae4296a0811cdd57%2F52070841104-005d7d8f66-o.jpg",
  "https://media.istockphoto.com/id/488580536/photo/giraffe-in-front-of-kilimanjaro-mountain.jpg?s=612x612&w=0&k=20&c=xqZ1Lo6_a1Lq4JwRFTts6xCGI0NxMI4UuAYXM5Qwk8g=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8DNaueiFY75tpijtS097UT4iiHAW7WOolg&usqp=CAU",
  "https://c.files.bbci.co.uk/17965/production/_127331669_leatherbackseaturtle.jpg",
  "https://a-z-animals.com/media/2022/01/image-from-rawpixel-id-421983-jpeg.jpg",
"https://i.natgeofe.com/k/63b1a8a7-0081-493e-8b53-81d01261ab5d/red-panda-full-body_4x3.jpg"];
function navopen() {
  nav.style.visibility = "visible";
}

function navclose() {
  nav.style.visibility = "hidden";
}

function rule_open() {
  rules.style.visibility = "visible";
  setTimeout(() => {
    rules.style.visibility = "hidden";
  }, 3000)
}

let hour = 0, min = 0, sec = 0;
let count = setInterval(() => {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }

  if (min == 60) {
    hour++;
    min = 0;
  }

  time.innerHTML = `${hour} : ${min} : ${sec}`;
}, 1000);


for (let i = 1; i <= 16; i++) {
  let box = document.getElementById(`box${i}`);
  box.style.order = Math.floor(Math.random() * 10 + 1);
}


let num1 = 0;
let ind_box=0;
let result = 0;

  function box_background(ind , photo_link)
{
  let box = document.getElementById(`box${ind}`);
  setTimeout(() => {
    box.style.backgroundImage = `url(${photo_link})`;
    box.style.backgroundSize = "cover";
  }, 500);
  box.style.transform = "rotatey(180deg)";
  box.style.transition = "transform";
  box.style.transitionDuration = "2s";
}

function rotate_box(a, ind) {

   box_background(ind , img_box[a]);

  if (num1 == 0) 
  {
    num1 = a;
    ind_box = ind;
  }

  else {
    if (num1 == a) {
      console.log("match");
      result++;
    }
     
    else{
      console.log("202");
      setTimeout(()=>{
        // let box = document.getElementById(`box${ind}`);
        // box.style.background = "none";
        // box.style.backgroundImage = `url(${boxcover})`;
        // box.style.backgroundSize = "cover";
        box_background(ind, boxcover);
        box_background(ind_box ,boxcover);
      } , 1000);
    }
    
    num1 = 0;
  }

  if (result == 8) 
  {
    console.log("win");
    clearInterval(count);
    grid.style.opacity = ".6";
    div_result.style.visibility = "visible";
    div_result.style.opacity = "1";
    time_p.innerHTML = `${hour} : ${min} : ${sec}`;
  };
}


