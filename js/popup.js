// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

//var img = document.querySelectorAll('card');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
const boingus = document.querySelectorAll(".card");

boingus.forEach(card => {
  card.addEventListener('click', function handleClick(event) {
    console.log('card clicked', event)
    
    modal.style.display = "block";
    modalImg.src = card.children[2].src;
    captionText.innerHTML = card.textContent;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}