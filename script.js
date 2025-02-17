
document.addEventListener("DOMContentLoaded", function() {
    const menuSections = document.querySelectorAll('.menu-section');

    menuSections.forEach(section => {
        section.addEventListener('click', () => {
            const ul = section.querySelector('ul');
            ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        });
    });
});

document.getElementById("menu-toggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
});

// script.js

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '5  ';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 1000); // Matches the fade-out duration
});



document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const videoSection = document.getElementById('video-section');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const introVideo = document.getElementById('intro-video'); // Correctly select the video element

    // Simulate loading time (remove this in production)
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        videoSection.style.display = 'block';
    }, 1000); // Adjust the time if needed

    // Menu toggle functionality for mobile view
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
    });

    // Replay video when it ends
    introVideo.addEventListener('ended', () => {
        introVideo.currentTime = 0; // Reset video to the start
        introVideo.play();          // Replay the video
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            alert('Please enter a search term.');
            return;
        }

        let found = false;

        // Loop through all sections and items
        document.querySelectorAll('.menu-sections ul li, .menu-item h3').forEach(item => {
            const itemName = item.getAttribute('data-name') || item.textContent.toLowerCase();

            if (itemName.includes(searchTerm)) {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                item.classList.add('highlight');
                found = true;
            } else {
                item.classList.remove('highlight');
            }
        });

        if (!found) {
            alert('No matching items found.');
        }
    });
});

