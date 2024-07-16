const languageToggle = document.getElementById('languageToggle');
const languageFlag = document.getElementById('languageFlag');
const englishContent = document.getElementById('english');
const frenchContent = document.getElementById('french');

languageToggle.addEventListener('click', () => {
    if (englishContent.classList.contains('hidden')) {
        englishContent.classList.remove('hidden');
        frenchContent.classList.add('hidden');
        languageFlag.src = 'assets/fr.png'; // Update with actual path to English flag image
        languageFlag.alt = 'Switch to Français';
    } else {
        englishContent.classList.add('hidden');
        frenchContent.classList.remove('hidden');
        languageFlag.src = 'assets/en.png'; // Update with actual path to French flag image
        languageFlag.alt = 'Switch to English';
    }
});