// fade out
function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = 'none';
      el.classList.add('is-hidden');
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
function fadeIn(el, display){
  setTimeout(function(){
    if (el.classList.contains('is-hidden')){
      el.classList.remove('is-hidden');
    }
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  },300);
}

function changePage(el,togo){
  var parants1 = el.parentNode.parentNode;
  var parants2 = document.getElementById(togo);
  fadeOut(parants1);
  fadeIn(parants2);
}
function makeImage(filename,path,reference) {
    var x = document.createElement("IMG");
    x.setAttribute("src",path+filename);
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("alt", filename);
    x.setAttribute("class","guess zoom");

    var y = document.getElementById(reference);
    y.appendChild(x);
}
function makeImage2(filename,path,reference) {
    var x = document.createElement("IMG");
    x.setAttribute("src",path+filename);
    x.setAttribute("width", "200");
    x.setAttribute("height", "200");
    x.setAttribute("alt", filename);
    x.setAttribute("class","guess zoom");

    var y = document.getElementById(reference);
    y.appendChild(x);
}
function randomSeletedImage(imageset){
  var answer = [];
  var i,j;
  for(i=1;i<imageset.length;i++){
    answer.push(i);
  }
  for(i=0;i<answer.length;i++) {
    var temp2 = Math.floor(Math.random() * answer.length);
    var temp3 = answer[i];
    answer[i] = answer[temp2];
    answer[temp2] = temp3;
  }
  for(i=0;i<answer.length;i++){
    document.getElementById("aaa").innerHTML += " " + answer[i];
  }
  return answer;
}
function random15(){
  var answer = [];
  var i,j;
  for(i=1;i<=15;i++){
    answer.push(i);
  }
  for(i=0;i<answer.length;i++) {
    var temp2 = Math.floor(Math.random() * answer.length);
    var temp3 = answer[i];
    answer[i] = answer[temp2];
    answer[temp2] = temp3;
  }
  return answer;
}
function num2binary(num) {
  var ans = "";
  while(num>0){
    var temp = num%2;
    temp = temp.toString();
    ans = temp + ans;
    num = parseInt(num/2);
  }
  var i;
  var length = 4-ans.length;
  for(i=0;i<length;i++){
    ans = "0" + ans;
  }
  return ans;
}
function add(logic) {
  if(logic) {
    answerIs += "1";
  }else{
    answerIs += "0";
  }
  var ch = false;
  if(answerIs.length==4){
    for(var i=0;i<15;i++){
      if(key_binary[i]==answerIs){
        makeImage2(imageset[0][key_index[i]],image_path,'answerIs');
        ch = true;
      }
    }
    if(!ch){
      document.getElementById('answerIs').innerHTML = "คุณกดมั่วๆนี่หว่า";
    }
  }
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
