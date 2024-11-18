// Define the themes
const themes = {
    dark: {
        '--primary-color': '#2563eb',
        '--secondary-color': '#3b82f6',
        '--background-color': '#0f172a',
        '--text-color': '#f1f5f9',
        '--card-bg': '#1e293b',
        '--hover-color': '#1d4ed8',
        '--border-color': '#334155',
        '--success-color': '#22c55e'
    },
    light: {
        '--primary-color': '#2563eb',
        '--secondary-color': '#3b82f6',
        '--background-color': '#ffffff',
        '--text-color': '#1e293b',
        '--card-bg': '#f8fafc',
        '--hover-color': '#1d4ed8',
        '--border-color': '#e2e8f0',
        '--success-color': '#22c55e'
    }
};


function setTheme(themeName) {
    const root = document.documentElement;
    const theme = themes[themeName];
    

    Object.keys(theme).forEach(property => {
        root.style.setProperty(property, theme[property]);
    });
    

    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    if (themeName === 'light') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    localStorage.setItem('theme', themeName);
}


function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});
