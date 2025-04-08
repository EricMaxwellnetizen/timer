# timer
<div class="img-container">
    <img src="https://github.com/EricMaxwellnetizen/timer/blob/main/ssz.png" alt="Image" class="zoom-image">
</div>
.img-container {
    position: relative; /* Required for absolute positioning of the zoom area */
    width: 300px; /* Set a desired width */
    height: 200px; /* Set a desired height */
    overflow: hidden; /* Hide the overflow of the zoomed area */
}

.zoom-image {
    width: 100%; /* Make the image fill the container */
    height: auto; /* Maintain aspect ratio */
    transition: transform 0.3s ease; /* Smooth zoom transition */
}

.img-container:hover .zoom-image {
    transform: scale(1.5); /* Zoom in the image on hover */
    transform-origin: 0 0; /* Set the zoom origin to the top-left corner */
}
