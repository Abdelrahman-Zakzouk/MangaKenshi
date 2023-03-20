function bodyLoad() 
{
  var typingEffect = new Typed(".author",
  {
    strings: ["&#120012;&#120013;ƙεɳȿɧɩ ッ","𝔴𝓍𝓀ⅇ𝔫𝔰𝔥𝔦 ッ","WXKENSHI ッ"],
    loop: true,
    typeSpeed: 100,
    backDelay: 1500,
    backSpeed: 80,
  })

};

i = 0;
function navtoggle()
{
  if (i === 0)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page-content');
    nav.style.visibility="visible";
    nav.style.transform="translateX(201vw)";
    pg.style.filter="blur(3px)";
    i++;
  }
  else if (i === 1)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page-content')
    nav.style.transform="translateX(-200vw)";
    nav.style.visibility="hidden";
    pg.style.filter="unset";
    i--;
    
  }
  
}

function unnavpageclk()
{
  if (i === 1)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page-content')
    nav.style.transform="translateX(-200vw)";
    nav.style.visibility="hidden";
    pg.style.filter="unset";
    i--;
  }
  
}

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

const touch = isTouchDevice();

if (touch)
  {
    function anim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1)";
      barbottom.style.transform="scaleX(1)";
    }

    function unanim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1)";
      barbottom.style.transform="scaleX(1)";
    }
  }
  else
  {
    function anim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1.7)";
      barbottom.style.transform="scaleX(1.99)";
    }

    function unanim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1)";
      barbottom.style.transform="scaleX(1)";
    }
  }