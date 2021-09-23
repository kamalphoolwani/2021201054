function myFunction() {
  var x = document.getElementById("header");
  // var y = document.getElementById("body");
  if (x.className === "header") {
    x.className += "responsive";
    // y.className+= "res";
  } else {
    x.className = "header"; 
    // y.className= "body";
  }
}

window.onscroll=function(){
    var x = document.getElementById("header");
    x.className="header";
};

//To display home
function homeDis(){
    document.getElementById("home").style.display="flex";
    document.getElementById("edu").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("pro").style.display="none";
}


//To display about
function aboutDis(){
    document.getElementById("home").style.display="none";
    document.getElementById("edu").style.display="flex";
    document.getElementById("skills").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("pro").style.display="none";
}

//To display skills
function skillsDis(){
  document.getElementById("home").style.display="none";
  document.getElementById("edu").style.display="none";
  document.getElementById("skills").style.display="flex";
  document.getElementById("contact").style.display="none";
  document.getElementById("pro").style.display="none";
}

//To display contact
function contactDis(){
  document.getElementById("home").style.display="none";
  document.getElementById("edu").style.display="none";
  document.getElementById("skills").style.display="none";
  document.getElementById("contact").style.display="flex";
  document.getElementById("pro").style.display="none";
}

function proDis(){
  document.getElementById("home").style.display="none";
  document.getElementById("edu").style.display="none";
  document.getElementById("skills").style.display="none";
  document.getElementById("contact").style.display="none";
  document.getElementById("pro").style.display="flex";
}

//time formatting

//document.getElementById("time").innerHTML = formattime();
function formattime() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        document.getElementById("time").innerHTML=days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        setTimeout(formattime, 1000);
}
formattime();