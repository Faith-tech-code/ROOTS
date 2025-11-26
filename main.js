// JavaScript for site interactivity

// Volunteer form toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const showVolunteerFormBtn = document.getElementById('show-volunteer-form');
    const volunteerForm = document.getElementById('volunteer-form');
    
    if (showVolunteerFormBtn && volunteerForm) {
        showVolunteerFormBtn.addEventListener('click', function() {
            if (volunteerForm.style.display === 'none' || volunteerForm.style.display === '') {
                // Show the form
                volunteerForm.style.display = 'grid';
                // Use a tiny timeout to allow the display property to be applied before adding the class for the animation
                setTimeout(() => {
                    volunteerForm.classList.add('show');
                    volunteerForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 10);
                showVolunteerFormBtn.textContent = 'HIDE VOLUNTEER FORM';
            } else {
                // Hide the form
                volunteerForm.classList.remove('show');
                showVolunteerFormBtn.textContent = 'SIGN UP TO VOLUNTEER';
                // Wait for the transition to finish before setting display to none
                setTimeout(() => { volunteerForm.style.display = 'none'; }, 300);
            }
        });
    }
});