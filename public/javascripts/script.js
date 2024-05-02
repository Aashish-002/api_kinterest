// function togglePasswordVisibility() {
//     var passwordInput = document.getElementById('password');
//     var toggleButton = document.querySelector('.toggle-password');

//     if (passwordInput.type === 'password') {

//         toggleButton.innerHTML = '<img class="w-[15px] mx-10" src="./images/eyelash.png" alt="">'; // Eye icon open
//     } else {
//         passwordInput.type = 'password';
//         passwordInput.type = 'text';
//         toggleButton.innerHTML = '<img class="w-[15px] mx-10" src="./images/eye.png" alt="">'; // Eye icon closed
//     }
// }
const toggleButton = document.getElementById('uploadButton');
const elementToToggle = document.getElementById('upload');
const hide = document.getElementById('cut')
let isVisible = false; // Track element visibility state

toggleButton.addEventListener('click', () => {
    isVisible = !isVisible; // Toggle visibility state
    elementToToggle.style.display = isVisible ? 'block' : 'none';
});

hide.addEventListener('click', (event) => {
    // Ignore clicks on the toggle button itself
    if (event.target !== toggleButton && isVisible) {
        elementToToggle.style.display = 'none';
        isVisible = false; // Update visibility state
    }
});
const errorMessage = "{{ req.flash('error') }}";

console.log("hello")