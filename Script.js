document.addEventListener('DOMContentLoaded', () => {
    loadContent('home.html');

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('More features coming soon!');
        });
    }
});

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            const ctaButton = document.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.addEventListener('click', () => {
                    alert('More features coming soon!');
                });
            }
        })
        .catch(error => console.error('Error loading content:', error));
}
