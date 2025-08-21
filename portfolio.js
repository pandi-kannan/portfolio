
  
  
  
  document.querySelector("footer p").innerHTML =
    `&copy; ${new Date().getFullYear()} Pandikannan M. All rights reserved.`;



function openModal(imgSrc) {
  document.getElementById('imgModal').style.display = 'block';
  document.getElementById('fullImg').src = imgSrc;
}

function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}
