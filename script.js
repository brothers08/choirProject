function openModal(curImg, caption) {
    const body = document.querySelector("body");

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(curImg);
    var modalImg = document.getElementById("img01");
    var caption = document.getElementById(caption)
    var captionText = document.getElementById("caption");

    body.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = caption.innerHTML;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
    }

};



