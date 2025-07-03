// Language switcher functionality
let currentLanguage = 'en'; // Default language

// Function to toggle between languages
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    updateLanguage();
    updateLanguageButton();
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Function to update all content based on current language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-zh]');
    
    elements.forEach(element => {
        const enContent = element.getAttribute('data-en');
        const zhContent = element.getAttribute('data-zh');
        
        // Check if the content contains HTML tags
        const hasHTML = enContent.includes('<') || zhContent.includes('<');
        
        if (hasHTML) {
            // Use innerHTML for elements with HTML content
            if (currentLanguage === 'zh') {
                element.innerHTML = zhContent;
            } else {
                element.innerHTML = enContent;
            }
        } else {
            // Use textContent for simple text elements
            if (currentLanguage === 'zh') {
                element.textContent = zhContent;
            } else {
                element.textContent = enContent;
            }
        }
    });
}

// Function to update the language button text
function updateLanguageButton() {
    const toggle = document.querySelector('.lang-toggle');
    const labels = document.querySelectorAll('.lang-label');
    
    if (toggle) {
        // Update toggle state
        toggle.classList.toggle('active', currentLanguage === 'zh');
        
        // Update labels
        labels.forEach((label, index) => {
            if (index === 0) { // EN label
                label.classList.toggle('active', currentLanguage === 'en');
            } else { // 中文 label
                label.classList.toggle('active', currentLanguage === 'zh');
            }
        });
    }
}

// Function to initialize language on page load
function initializeLanguage() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    updateLanguage();
    updateLanguageButton();
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializeLanguage);

document.addEventListener('DOMContentLoaded', function() {
  var menuBtn = document.getElementById('mobile-menu-toggle');
  var nav = document.querySelector('.header-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
}); 