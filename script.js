
//TUMMA TILA
function darkMode() {
    document.body.classList.toggle('dark-mode');
}

//MOBIILI NAVI
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

// Toggle sidebar visibility when hamburger is clicked
hamburger.addEventListener('click', (event) => {
    sidebar.classList.toggle('active');
    event.stopPropagation(); // Prevent the click from propagating to the document
});

// Close sidebar when clicking anywhere outside of it
document.addEventListener('click', (event) => {
    // Check if the click is outside the sidebar and the hamburger
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});


//SEURAAVA SIVU
document.getElementById('transitionButton').addEventListener('click', function(event) {
    event.preventDefault();
    const container = document.getElementById('container');
    container.classList.add('slide-out');
    setTimeout(function() {
        window.location.href = 'Quotes.html'; // seuraavan sivun URL
    }, 1000); // Match the duration of the CSS transition
});


//EDELLINEN SIVU
document.getElementById('previousButton').addEventListener('click', function(event) {
    event.preventDefault();
    const container = document.getElementById('container');
    container.classList.add('slide-in');
    setTimeout(function() {
        window.location.href = 'Quotes.html'; // Edellisen sivun URL
    }, 1000);
});


// STOORIT
function loadStory(event, index) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
        const label = document.getElementById(`story-label-${index}`);
        label.style.backgroundImage = `url(${reader.result})`;
        label.textContent = '';
    }
    reader.readAsDataURL(input.files[0]);
}


// GALLERIA
function loadPhotoImage(event, index) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
        const label = document.getElementById(`img-label-${index}`);
        label.style.backgroundImage = `url(${reader.result})`;
        label.textContent = '';
    }
    reader.readAsDataURL(input.files[0]);
}


//POISTA STOORI
function deleteStoryImage(index) {
    const label = document.getElementById(`story-label-${index}`);
    label.style.backgroundImage = '';
    label.textContent = '+';
    document.getElementById(`story-input-${index}`).value = '';
}

//POISTA KUVA
function deleteGalleryImage(index) {
    const label = document.getElementById(`img-label-${index}`);
    label.style.backgroundImage = '';
    label.textContent = '+';
    document.getElementById(`img-input-${index}`).value = '';
}