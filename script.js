
document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Dummy weather info
document.getElementById('weatherInfo').innerText = "Sunny, 18°C (sample data)";

// Language switch logic
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('nl') ? 'nl' : 'en');

async function loadLang(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) el.textContent = data[key];
  });
  localStorage.setItem('lang', lang);
}

document.getElementById('toggleLang').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'nl' : 'en';
  loadLang(currentLang);
});

loadLang(currentLang);
