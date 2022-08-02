let faders  = document.querySelectorAll('iod')
let butoane = document.querySelectorAll('.button')
let images = document.querySelectorAll('.images')
let carus   = document.querySelectorAll('.carus')
let carus1  = document.querySelectorAll('.carus1')
let nothing = document.querySelectorAll('.nothing')
let meniuri = document.querySelector('.meniuri')
let div2    = document.querySelector('div2')
let div1    = document.querySelector('div1')
let div22   = document.querySelector('div22')
let grid    = document.querySelector('grid')
let grid1   = document.querySelector('grid1')
let div11   = document.querySelector('div11')
let body    = document.querySelector('body')
let fotpar  = document.querySelector('fotpar')
let slider  = document.querySelector('.image-slider')
let slider1 = document.querySelector('.image-slider1')
let fotpa   = document.querySelector('fotpa')
let filter  = document.querySelector('.filter')
let header  = document.querySelector('header')
let price   = document.querySelector('price')
let price1  = document.querySelector('price1')
let logo    = document.querySelector('.img1')
let shop    = document.querySelector('.img2')
let im1     = document.querySelector('.im1')
let im2     = document.querySelector('.im2')
let im3     = document.querySelector('.im3')
let im4     = document.querySelector('.im4')
let ium1    = document.querySelector('.ium1')
let ium2    = document.querySelector('.ium2')
let ium3    = document.querySelector('.ium3')
let ium4    = document.querySelector('.ium4')
let prev    = document.querySelector('prev')
let next    = document.querySelector('next')
let butonase= document.querySelector('butonase')
let butonase1= document.querySelector('butonase1')
let prev1   = document.querySelector('prev1')
let next1   = document.querySelector('next1')
let bloc    = document.querySelector('block')
let menu    = document.querySelector('menu')
let section = document.querySelector('section')
let load    = document.querySelector('loader')
let setare  = document.getElementById('img3')
let slid    = document.getElementById('slide')
let slid1   = document.getElementById('slide1')
let primaS  = document.getElementById('primaS')
let mariage = document.getElementById('maternity')
let baptizm = document.getElementById('baptizm')
let born    = document.getElementById('born')
let o       = document.getElementById('img')
let search  = document.createElement('div')
let d1      = document.createElement('d')
let d2      = document.createElement('d')
search.append(d1,d2)
search.classList.add('ok')
let search_bool=0;
let menues=0,count=3,count1=3;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.remove('no-scroll')
      menu.classList.remove('menues')
      d1.remove()
      d2.remove()
      search.append(d1,d2)
      d1.classList.remove('d1')
      d2.classList.remove('d2')
      d1.classList.add('d11')
      d2.classList.add('d21')
      search_bool=0;
      if(blackerer==1){
        header.classList.remove('blackerer')
        header.classList.add('blackerer1')
        }else{
        
        header.classList.remove('whiterer')
        header.classList.add('whiterer1')
        }
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
next.onclick=function(){
  if(count>5){
    return;
    }
  count++;
  slider.style.transition=".4s";
  slider.style.left=-167.5*(count-3)+"px";
  carus[count].style.height = "270px";
  carus[count].style.width = "180px";
  carus[count].style.filter = "saturate(100%)";
  carus[count-1].style.filter = "saturate(10%)";
  carus[count-1].style.height = "240px";
  carus[count-1].style.width = "160px";
}
prev.onclick=function(){
if(count<1){
return;
}
count--;
slider.style.left=-167.5*(count-3)+"px";
slider.style.transition=".4s";
carus[count].style.height = "270px";
carus[count].style.width = "180px";
carus[count].style.filter = "saturate(100%)";
carus[count+1].style.height = "240px";
carus[count+1].style.width = "160px";
carus[count+1].style.filter = "saturate(10%)";
}
slider.addEventListener('transitionend',()=>{
if (carus[count].id === 'firstclone'){
  slider.style.left="-335px"
count=5;
carus[count].style.height = "270px";
carus[count].style.width = "180px";
carus[count].style.filter = "saturate(100%)";
carus[0].style.filter = "saturate(10%)";
carus[0].style.height = "240px";
carus[0].style.width = "160px";
}else if (carus[count].id==='lastclone') {  
slider.style.left="335px"
count=1
carus[count].style.height = "270px";
carus[count].style.width = "180px";
carus[count].style.filter = "saturate(100%)";
carus[6].style.filter = "saturate(10%)";
carus[6].style.height = "240px";
carus[6].style.width = "160px";
}
})


next1.onclick=function(){
  if(count1>5){
    return;
    }
  count1++;
  slider1.style.transition=".4s";
  slider1.style.left=-167.5*(count1-3)+"px";
  carus1[count1].style.height = "270px";
  carus1[count1].style.width = "180px";
  carus1[count1].style.filter = "saturate(100%)";
  carus1[count1-1].style.filter = "saturate(10%)";
  carus1[count1-1].style.height = "240px";
  carus1[count1-1].style.width = "160px";
}
prev1.onclick=function(){
if(count1<1){
return;
}
count1--;
slider1.style.left=-167.5*(count1-3)+"px";
slider1.style.transition=".4s";
carus1[count1].style.height = "270px";
carus1[count1].style.width = "180px";
carus1[count1].style.filter = "saturate(100%)";
carus1[count1+1].style.height = "240px";
carus1[count1+1].style.width = "160px";
carus1[count1+1].style.filter = "saturate(10%)";
}
slider1.addEventListener('transitionend',()=>{
  if (carus1[count1].id === 'firstclone1'){
  slider1.style.left="-335px"
count1=5;
carus1[count1].style.height = "270px";
carus1[count1].style.width = "180px";
carus1[count1].style.filter = "saturate(100%)";
carus1[0].style.filter = "saturate(10%)";
carus1[0].style.height = "240px";
carus1[0].style.width = "160px";
}else if (carus1[count1].id==='lastclone1') {  
slider1.style.left="335px"
count1=1
carus1[count1].style.height = "270px";
carus1[count1].style.width = "180px";
carus1[count1].style.filter = "saturate(100%)";
carus1[6].style.filter = "saturate(10%)";
carus1[6].style.height = "240px";
carus1[6].style.width = "160px";
}
})
search.onclick=function(){
if(search_bool==1){
//Dupa ce inchid
body.classList.remove('no-scroll')
menu.classList.remove('menues')
menu.classList.add('menuess')
d1.remove()
d2.remove()
search.append(d1,d2)
d1.classList.remove('d1')
d2.classList.remove('d2')
d1.classList.add('d11')
d2.classList.add('d21')
search_bool=0;
if(blackerer==1){
header.classList.remove('blackerer')
header.classList.add('blackerer1')
}else{

header.classList.remove('whiterer')
header.classList.add('whiterer1')
}
}else{
//Inainte sa deschid
body.classList.add('no-scroll')
menu.classList.add('menues')
menu.classList.remove('menuess')
if(blackerer==1){
header.classList.remove('blackerer1')
header.classList.remove('blackexit')
header.classList.add('blackerer')
}else{
  header.classList.remove('whiteenter')
  header.classList.remove('whiterer1')
  header.classList.add('whiterer')
}
d1.remove()
d2.remove()
search.append(d1,d2)
d1.classList.remove('d11')
d2.classList.remove('d21')
d1.classList.add('d1')
d2.classList.add('d2')
search_bool=1;
}
}

function myFunction(x) {
    if (x.matches) {
      if(search_bool==1){
      search_bool=0;
      }
      d1.classList.remove('d1','d11')
      d2.classList.remove('d2','d21')
    butoane.forEach(element =>{
    bloc.removeChild(element)
    })
    logo.remove()
    shop.remove()
    bloc.append(search,logo,shop)
    bloc.classList.add("k1")
    butonase.style.width="100%"
    butonase1.style.width="100%"
    images.forEach(e=>{
    e.style.height="210px"
    e.style.width="140px"
    })
    im2.style.transform="translateY(-85px)translateX(100px)"
    im3.style.transform="translateY(140px)translateX(70px)"
    im1.style.transform="translateY(-130px)translateX(-60px)"
    im4.style.transform="translateY(100px)translateX(-90px)"
    ium2.style.transform="translateY(-85px)translateX(100px)"
    ium3.style.transform="translateY(140px)translateX(70px)"
    ium1.style.transform="translateY(-130px)translateX(-60px)"
    ium4.style.transform="translateY(100px)translateX(-90px)"
    bloc.style.height="35px"
    header.style.height="45px"
    } else {
    im1.style.transform="translateY(-165px)translateX(-85px)"
    im2.style.transform="translateY(-120px)translateX(115px)"
    im3.style.transform="translateY(165px)translateX(85px)"
    im4.style.transform="translateY(120px)translateX(-115px)"
    ium1.style.transform="translateY(-165px)translateX(-85px)"
    ium2.style.transform="translateY(-120px)translateX(115px)"
    ium3.style.transform="translateY(165px)translateX(85px)"
    ium4.style.transform="translateY(120px)translateX(-115px)"
    bloc.style.height="50px"
    header.style.height="60px"
      images.forEach(e=>{
        e.style.height="270px"
        e.style.width="180px"
        })
      butonase1.style.width="500px"
      butonase.style.width="500px"
      bloc.classList.remove("k1")
      shop.remove()
      search.remove()    
      butoane.forEach(element =>{
      bloc.append(element)
      })
      bloc.append(shop)
    }
  }
  function myFun(y){
  if(y.matches){
    div1.remove()
    div2.remove()
    div11.remove()
    div22.remove()
    grid1.classList.remove("nothing")
    grid.classList.add("nothing")
   baptizm.append(div1,div2)
   born.append(div11,div22)
  }else{
    div1.remove()
    div2.remove()
    div11.remove()
    div22.remove()
    grid.classList.remove("nothing")
    grid1.classList.add("nothing")
   baptizm.append(div2,div1)
   born.append(div22,div11)

  }
  }
  const x = window.matchMedia('(max-width: 700px)')
  const y = window.matchMedia('(max-width: 1020px)')
  myFun(y)
  y.addListener(myFun)
  myFunction(x)
  x.addListener(myFunction)
  let loader = document.querySelector("boss")
  let fil    = document.querySelector(".fil")
  let b      = document.createElement('b')
  let b1     = document.createElement('b1')
  let newspan= document.createElement('span')
  let colors = document.createElement('colors')
  let counter=1,blackerer=0
  b.setAttribute('class','text')
  newspan.setAttribute('class','the')
  b1.append("and save your most beautiful ")
  colors.append("MEMORIES")
  b1.append(colors)
  b.append("Capture\n")
  b.append(newspan);
  addEventListener('resize',function(){
  the = document.querySelector('span')
  b.style.fontSize=innerWidth/20;
  b1.style.fontSize=innerWidth/30;
  colors.style.fontSize=innerWidth/22;
  the.style.fontSize=innerWidth/40;
  primaS.style.height=innerWidth/1.8;
  filter.style.height=innerWidth/1.8;
  })
window.addEventListener("load", function(){
primaS.append(b,b1)
let the = document.querySelector('span')
newspan.append("the\n");
b.append("Moment\n");
b.style.fontSize=innerWidth/20;
b1.style.fontSize=innerWidth/30;
colors.style.fontSize=innerWidth/23;
the.style.fontSize=innerWidth/40;
primaS.style.height=innerWidth/1.8;
filter.style.height=innerWidth/1.8;
b.style.zIndex=2;
load.classList.add("loader");
slid.classList.remove("nothing");
slid1.classList.remove("nothing");
fotpar.classList.remove("nothing");
fotpa.classList.remove("nothing");
faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
filter.classList.add("fil");
headerOnScroll.observe(primaS);
})

  const appearOptions = {
    threshold: 0.08,
    rootMargin: "0px 0px -50px 0px"
  };
  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  const headerOnScroll = new IntersectionObserver(function(
    entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.remove('blackerer')
        header.classList.remove('whiterer')
        header.classList.remove('blackerer1')
        header.classList.remove('whiterer1')
        header.classList.add('blackexit')
        header.classList.remove('whiteenter')
        counter=0;
        blackerer=1;
      }else{
        
        blackerer=0;
        if(counter==0){
        header.classList.remove('blackerer1')
        header.classList.remove('whiterer1')
        header.classList.add('whiteenter')
        header.classList.remove('blackexit')
        }
      }
    });
  },
  appearOptions);