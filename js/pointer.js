let curs = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = (x - 11) + "px";
  curs.style.top = (y - 11) + "px";
});

document.addEventListener('mouseleave', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = (x - 11) + "px";
  curs.style.top = (y - 11) + "px";
});