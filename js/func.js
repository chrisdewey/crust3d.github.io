const calculate = (a, b) => (a / b * 40 - 20).toFixed(1);

const cards = gsap.utils.toArray('.card')
      backgrounds = gsap.utils.toArray('.card__background');

document.addEventListener("mousemove", (e) => {
  const clientX = e.clientX,
        clientY = e.clientY;
  
  let y = calculate(clientY, window.innerHeight),
      x = calculate(clientX, window.innerWidth);
  
  cards.forEach( c => {
    gsap.to(c, {
      duration: 0.5,
      rotationX: -y + "deg",
      rotationY: x + "deg"
    })
  })
  
  backgrounds.forEach( bg => {
    gsap.to(bg, {
      backgroundPositionX: x * 0.45 + "px",
      backgroundPositionY: -y * 0.45 + "px"
    })
  })
  
});