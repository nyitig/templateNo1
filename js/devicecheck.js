// device check
function deviceCheck() {
  const userAgent = navigator.userAgent.toLowerCase();

  let isMobile = /iPhone|Android/i.test(navigator.userAgent);
  // console.log("isMobile: "+isMobile);

  const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent)
      //  console.log("isTablet: "+isTablet)
      
 
  if(isMobile==true) {
      stylesheet.href="/css/stylemobile.css"
      mobileDevice=true
  } 
  else if(isTablet==true){
    stylesheet.href="/css/stylemobile.css"
    mobileDevice=true
  }
  else {
    stylesheet.href="/css/styleother.css"
    const navSect=document.getElementById('navSect')
    navSect.classList.add('active')
    otherDevice=true
  }

}
const stylesheet=document.getElementById('stylesheet')
let otherDevice=false
let mobileDevice=false
deviceCheck()