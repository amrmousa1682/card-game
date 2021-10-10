var pre,
  counter = 0,
  lose_counter = 3;
function fun1() {
  var arr = document.querySelectorAll('.container div img:not([id="back"])');
  var m = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  for (let i = 0; i < arr.length; i++) {
    var l = Math.round(Math.random() * 5) + 1;
    while (m[l] > 1) {
      l = Math.round(Math.random() * 5) + 1;
    }
    ++m[l];
    arr[i].src = "image/" + ((l % 6) + 1) + ".png";
  }
  setTimeout(fun2, 1500);
  arr = document.querySelectorAll(
    ".container div:not(.end_div):not(.end_div2):not(.counter)"
  );
  for (let index = 0; index < arr.length; index++)
    arr[index].style.pointerEvents = "none";
}

function fun2() {
  var arr = document.querySelectorAll(
    ".container div:not(.end_div):not(.end_div2):not(.counter)"
  );
  for (let index = 0; index < arr.length; index++) {
    arr[index].style.transform = "rotateY(180deg)";
    arr[index].style.pointerEvents = "unset";
    arr[index].style.cursor = "pointer";
  }
}
function flip(t) {
  if (t.style.transform.includes("180deg")) {
    t.style.transform = "rotateY(0deg)";
    setTimeout(function () {
      if (pre) {
        if (pre.children[0].src == t.children[0].src) {
          pre.style.pointerEvents = "none";
          t.style.pointerEvents = "none";
          pre.style.visibility = "hidden";
          t.style.visibility = "hidden";
          pre = undefined;
          counter++;
          if (counter == 6) {
            document.getElementById("end_div").style.opacity = "1";
            document.getElementById("end_div").style.zIndex = "1";
          }
        } else {
          t.style.transform = "rotateY(180deg)";
          pre.style.transform = "rotateY(180deg)";
          pre = undefined;
          lose_counter--;
          document.getElementById("counter").innerHTML = "lives : ";
          for (let index = 0; index < lose_counter; index++) {
            document.getElementById("counter").innerHTML +=
              '<i class="fas fa-heart"></i>';
          }
          if (lose_counter == 0) {
            var arr = document.querySelectorAll(
              ".container div:not(.end_div):not(.end_div2):not(.counter)"
            );
            for (let index = 0; index < arr.length; index++) {
              arr[index].style.transform = "rotateY(0deg)";
            }

            return setTimeout(function () {
              document.getElementById("end_div2").style.opacity = "0.8";
              document.getElementById("end_div2").style.zIndex = "1";
            }, 1000);
          }
        }
      } else {
        pre = t;
      }
    }, 500);
  }
}
function fun5() {
  location.reload();
}
