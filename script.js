const title = document.querySelector('.title')

document.addEventListener('scroll',function() {
  let value = windows.scrollY
  // console.log(value)
  
  title.style.marginTop = value * 2 + 'px'
})
