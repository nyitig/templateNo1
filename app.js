// if window load then pleload section hide

const preLoad=document.getElementById('preLoad')
const fullPage=document.getElementById('fullPage')
const navSect=document.getElementById('navSect')
const cookies=document.getElementById('cookies')
let mainY
let homeY
let aboutY
let servicesY
let pricesSectY
let giftCardY
let fAQY
let impressY
let mainHeight
let homeHeight
let aboutHeight
let servicesHeight
let pricesSectHeight
let giftCardHeight
let fAQHeight
let impressHeight
let sectionCoordArr=[]
let sectionHeightArr=[]
let sectionCoordArrModified=[]
let sectionHeightArrModified=[]
let sectionNameArr=[]
let dvhToHeight
let servicesContPlusHeight=0
let priceContPlusHeight=0
let faqContPlusHeight=0
let impressumContPlusHeight=0

window.onload=function (event) {
  setTimeout(() => {
    fullPage.classList.remove('hide')
    preLoad.classList.remove('show')
    fullPage.classList.add('show')
    preLoad.classList.add('hide')
    cookies.classList.remove('close')
    if (otherDevice) {
      setTimeout(() => {
        startCheckSections()
        checkviewportHeight()
        modifiedSectionsCoordAndHeightArray()
      }, 700);
    }
  }, 2000);

}

// check viewport height

function checkviewportHeight() {
  let vid=document.getElementById('backgroundVideoCont')
  let height=vid.getBoundingClientRect()
  let vidHeight=height.height
  vidHeight=Number(vidHeight)
  vidHeight=parseInt(vidHeight)
  dvhToHeight=vidHeight/100
}

function calculateHeightFromDvh(dvh) {
  let tempHeight=dvh*dvhToHeight
  tempHeight=Number(tempHeight)
  tempHeight=parseInt(tempHeight)
  return tempHeight
}
// header menu show & hide
// show menu
const hamMenuImg=document.getElementById('hamMenuImg')
const menuSvgDivCont=document.getElementById('menuSvgDivCont')

function showNavMenu() {
  navSect.classList.add('active')
  menuSvgDivCont.style.opacity="0"
  setTimeout(() => {
    navSect.classList.add('show')
  }, 200);
  hamMenuImg.removeEventListener("click",showNavMenu)

}
hamMenuImg.addEventListener("click",showNavMenu)

// hide menu
const closeLink=document.getElementById('closeLink')
closeLink.addEventListener('click',()=>{
  navSect.classList.remove('show')
  setTimeout(() => {
    navSect.classList.remove('active')
  }, 200);
  menuSvgDivCont.style.opacity="1"
  hamMenuImg.addEventListener("click",showNavMenu)
})


// coockies section hide
const cookiesCheckbox=document.getElementById('cookiesCheckbox')
cookiesCheckbox.addEventListener('click',()=>{
  cookies.classList.add('close')
})

// check main, home  ect y coord
/*
function startCheckSections() {
  mainY=checkSectionY("main")
  homeY=checkSectionY("home")
  aboutY=checkSectionY("about")
  servicesY=checkSectionY("services")
  pricesSectY=checkSectionY("pricesSect")
  giftCardY=checkSectionY("giftCard")
  fAQY=checkSectionY("fAQ")
  impressY=checkSectionY("impress")
  mainHeight=checkSectionBottom("main")
  homeHeight=checkSectionBottom("home")-1
  aboutHeight=checkSectionBottom("about")
  servicesHeight=checkSectionBottom("services")
  pricesSectHeight=checkSectionBottom("pricesSect")
  giftCardHeight=checkSectionBottom("giftCard")
  fAQHeight=checkSectionBottom("fAQ")
  impressHeight=checkSectionBottom("impress")
  sectionCoordArr=[mainY,aboutY,homeY,servicesY,pricesSectY,giftCardY,fAQY,impressY]
  sectionHeightArr=[mainHeight,aboutHeight,homeHeight,servicesHeight,pricesSectHeight,giftCardHeight,fAQHeight,impressHeight]
}


function checkSectionY(sectionName) {
  let element = document.getElementById(`${sectionName}`);
  let position = element.getBoundingClientRect();
  let y = position.top;
  y=Number(y)
  y=parseInt(y)
  y=y*-1
  return y+3
}
function checkSectionBottom(sectionName) {
  let element = document.getElementById(`${sectionName}`);
  let elm=element.getBoundingClientRect()
  let bottom=elm.bottom
  bottom=Number(bottom)
  bottom=parseInt(bottom)
  bottom=bottom*-1
  return bottom+10
}
*/
function menuBorderOnOrOff(rectYCoord) {
//  check home

if (rectYCoord>=sectionCoordArrModified[1]) {
  navLinkBorderErase()
  if (!navLink[0].classList.contains('active')) {
    navLink[0].classList.add('active')
  }
}
else {
  // other section  
  navLinkBorderErase()
    // console.log({rectYCoord})
  for (let ind = 1; ind < sectionCoordArrModified.length; ind++) {
    if (rectYCoord<=sectionCoordArrModified[ind]  && rectYCoord>sectionHeightArrModified[ind] ) {
      // console.log(sectionCoordArrModified[ind])
      // console.log(sectionHeightArrModified[ind])
      navLink[ind].classList.add('active')
    }    
  }
}
return
}

function navLinkBorderErase() {
  for (let i = 0; i < navLink.length; i++) {
    if (navLink[i].classList.contains('active')) {
      navLink[i].classList.remove('active')  
    }
  }
  return
}

// header background transparent or not transparent, show or hide scrollUp section
const header=document.getElementById('header')
const main=document.getElementById('main')
const scrollUp=document.getElementById('scrollUp')
const headerH2=document.getElementById('headerH2')
const navLink=document.querySelectorAll('.navLink')
const sectionNav=document.querySelectorAll('.sectionNav')


fullPage.addEventListener("scroll",()=> {mainCheckPosition()})

function mainCheckPosition() {
  const rect = main.getBoundingClientRect();
   let tempCoord=parseInt(rect.y)   
  tempCoord < -20 ? headerScrolledPageOn(rect.y) : headerScrollerPageOff(rect.y)
}

function headerScrolledPageOn(rectYCoord) {
  // if 
  if (!header.classList.contains('scrolled')) {
    header.classList.add('scrolled') 
    scrollUp.classList.remove('hide')
    headerH2.classList.add('scrolled')
    hamMenuImg.classList.remove('svgSizeWhite')
    hamMenuImg.classList.add('svgSize')
    navLink[0].classList.add('orange')
    for (let index = 0; index < navLink.length; index++) {
      navLink[index].classList.add('scrolled')    
    }
  }
  menuBorderOnOrOff(rectYCoord)


}
function headerScrollerPageOff(rectYCoord) {
  if (header.classList.contains('scrolled')) {
      header.classList.remove('scrolled')
      scrollUp.classList.add('hide')
      headerH2.classList.remove('scrolled')
      hamMenuImg.classList.remove('svgSize')
      hamMenuImg.classList.add('svgSizeWhite')
      navLink[0].classList.remove('orange')
      for (let index = 0; index < navLink.length; index++) {
        navLink[index].classList.remove('scrolled')    
      }
  }
  menuBorderOnOrOff(rectYCoord)

}


// servli2 show & hide functions

const servli=document.querySelectorAll('.servli')
const servli2=document.querySelectorAll('.servli2')
const liArrowCont=document.querySelectorAll('.liArrowCont')
const servArrow=document.querySelectorAll('.servArrow')
for (let i = 0; i< liArrowCont.length; i++) {
    liArrowCont[i].addEventListener('click', ()=>{showHideServli2Check(i)})  
}

function showHideServli2Check(index) {
servli2[index].classList.contains('hide') == true ? showServLi2(index) : hideServli2(index)
}

function showServLi2(index) {
  if (liArrowCont[index].classList.contains('servicesCont')) {
    if (index==1) {
      servicesContPlusHeight+=calculateHeightFromDvh(230)
    }
    else {
      servicesContPlusHeight+=calculateHeightFromDvh(100)
    }
  }
  if (liArrowCont[index].classList.contains('price')) {
    priceContPlusHeight+=calculateHeightFromDvh(30)
  }
  if (liArrowCont[index].classList.contains('faq')) {
    faqContPlusHeight+=calculateHeightFromDvh(30)
  }
  if (liArrowCont[index].classList.contains('impressum')) {
    impressumContPlusHeight+=calculateHeightFromDvh(100)
  }
  servli2[index].classList.remove('hide')
  servArrow[index].classList.add('open')
  setTimeout(() => {
    servli2[index].classList.add('show')
  }, 500);
  // actualized sections height
  setTimeout(() => {
    modifiedSectionsCoordAndHeightArray()
  }, 1500);
}

function hideServli2(index) {
  if (liArrowCont[index].classList.contains('servicesCont')) {
    if (index==1) {
      servicesContPlusHeight-=calculateHeightFromDvh(230)
    }
    else {
      servicesContPlusHeight-=calculateHeightFromDvh(100)
    }    
  }
  if (liArrowCont[index].classList.contains('price')) {
    priceContPlusHeight-=calculateHeightFromDvh(30)
  }
  if (liArrowCont[index].classList.contains('faq')) {
    faqContPlusHeight-=calculateHeightFromDvh(30)
  }
  if (liArrowCont[index].classList.contains('impressum')) {
    impressumContPlusHeight-=calculateHeightFromDvh(100)
  }
  servli2[index].classList.remove('show')
  servArrow[index].classList.remove('open')
  setTimeout(() => {
    servli2[index].classList.add('hide')
  }, 500);
  // actualized sections tops & heights
  setTimeout(() => {
    modifiedSectionsCoordAndHeightArray()
  }, 1500);
}

function modifiedSectionsCoordAndHeightArray() {
// sectionHeightArrModified tömb aktualizálása
  for (let index = 0; index < sectionHeightArr.length; index++) {
    switch (index) {
      case 3:
          sectionHeightArrModified[index]=sectionHeightArr[index]-servicesContPlusHeight
        break;
      case 4: case 5:
        sectionHeightArrModified[index]=sectionHeightArr[index]-servicesContPlusHeight-priceContPlusHeight
      break;
      case 6: case 7:
        sectionHeightArrModified[index]=sectionHeightArr[index]-servicesContPlusHeight-priceContPlusHeight-faqContPlusHeight
      break;
      default:
        let tempHeight=sectionHeightArr[index]
        sectionHeightArrModified[index]=tempHeight
        break;
    }
  }
  // sectionCoordArrModified tömb aktuaizálása
  for (let z = 0; z < sectionCoordArr.length; z++) {
    switch (z) {

        case 4: case 5: case 6:  case 7:

        sectionCoordArrModified[z]=sectionHeightArrModified[z-1]-1
        // sectionCoordArr[z]-servicesContPlusHeight-priceContPlusHeight
      break;
        sectionCoordArrModified[z]=sectionHeightArrModified[z-1]-1
        // sectionCoordArr[z]-servicesContPlusHeight-priceContPlusHeight-faqContPlusHeight
      break;
      default:
        let tempTop=sectionCoordArr[z]
        sectionCoordArrModified[z]=tempTop
        break;
    }    
  }
  //  console.log(sectionCoordArrModified)
  //  console.log(sectionHeightArrModified)
}
// service more info button click

const servGoToButt=document.querySelectorAll('.servGoToButt')

for (let index = 0; index < servGoToButt.length; index++) {
  servGoToButt[index].addEventListener('click',()=>{showInputSection(index)})
}

function showInputSection(index) {
  let inputSectionTemplate=serviceMoreSelection(index)
  inputSection.innerHTML=inputSectionTemplate
   
 if (navSect.classList.contains('active')==true) {
  navSect.classList.remove('active') 
 }
 inputSection.classList.remove('hide')
  setTimeout(() => {
    inputSection.classList.add('active')
  }, 50); 
  const servMoDeBackButt=document.getElementById('servMoDeBackButt')
  servMoDeBackButt.addEventListener("click",inputSectionClose)
}

function inputSectionClose() {
  inputSection.classList.remove('active')
  setTimeout(() => {
    inputSection.classList.add('hide')
    inputSection.innerHTML=""
  }, 500);
}

function serviceMoreSelection(index) {
  switch (index) {
    case 0:
      return svedmassszazs
      break;
    case 1:
      return pontnyomasosTechnika
      break;
    case 2:
      return masszazsPisztoly
      break; 
    case 3:
      return vakuumTechnika
      break;
    case 4:
      return reflexzonasTechnikanAlapuloTalpmasszazs
      break; 
    case 5:
      return odemaCsokkentoMasszazs
      break;
    case 6:
      return kinezioTape
      break;
    case 7:
      return aromamasszazs
      break;
    case 8:
      return lavakovesMasszazs
      break;
    case 9:
      return kismamaMasszazs
      break;  
    case 10:
      return babamasszazs
      break;
    case 11:
      return managerIrodaiSzekmasszazs
      break;
    case 12:
      return GuaShaArcmasszazs
      break;
    case 13:
      return anticellulitMasszazs
      break;
    case 14:
      return hidegMelegZsirbonto
      break;
    case 15:
      return peeling
      break;
      default:
        return badIndex
      break;
  }
}

// mobile device a tag href scroll
const dataLinks=document.querySelectorAll('[data-link]')

//  if (mobileDevice) {touchNavButtons()}

function touchNavButtons() {
  for (let i = 0; i < dataLinks.length; i++) {
    dataLinks[i].addEventListener('touchstart',(event)=>{
      event.preventDefault()
      scrollSectionUp(i)
    }
    ) 
  }
}

function scrollSectionUp(index) {
  let id=dataLinks[index].attributes[1].value
  const elem=document.getElementById(`${id}`)
  let topPos=elem.offsetTop
  fullPage.scrollTop=topPos
}