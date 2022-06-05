window.onscroll = () => {
  const nav = document.querySelector ('.header_row')
  const Y = window.scrollY
  
  if(Y > 80) {
  nav.classList.add ('header_row_fixed')
  } else if(Y < 80) {
    nav.classList.remove ('header_row_fixed')
    }
}