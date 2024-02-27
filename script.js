const title = document.queryselector('.title')
document.addeventlistener('scroll',function(){
  let value = windows.scrolly
  // console.log(value)
  title.style.margintop = value *2 + 'px'
}
