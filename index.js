document.addEventListener('DOMContentLoaded', function() {
    const notesToggleBtn = document.createElement('button');
    notesToggleBtn.textContent = "Show/Hide Notes";
    notesToggleBtn.classList.add('toggle-btn');
    
    
    document.body.insertBefore(notesToggleBtn, document.querySelector('.notes'));

    const notesSection = document.getElementById('notes');
    notesToggleBtn.addEventListener('click', function() {
        
        notesSection.style.display = (notesSection.style.display === 'none' || notesSection.style.display === '') ? 'block' : 'none';
    });

    
    const contactLinks = document.querySelectorAll('.footer .mob p');
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const contactInfo = link.textContent;
            alert(`You clicked on: ${contactInfo}`);
        });
    });
});
