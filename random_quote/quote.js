// Magyar idézetek gyűjteménye
const quotes = [
    {
        text: "A szeretet az egyetlen olyan kincs, amely osztódással szaporodik.",
        author: "Gárdonyi Géza"
    },
    {
        text: "Nem az a fontos, hogy meddig élünk, hanem hogy hogyan éltünk.",
        author: "Márai Sándor"
    },
    {
        text: "Az élet egy nagy kaland, vagy semmi.",
        author: "Helen Keller"
    },
    {
        text: "A boldogságot nem lehet ajándékba kapni. Egyetlen titka: adni, mindig csak adni.",
        author: "Jókai Mór"
    },
    {
        text: "Aki nem hisz abban, hogy mennyi jó ember van, az kezdjen el valami jót tenni, és meglátja, milyen sokan odaállnak mellé.",
        author: "Böjte Csaba"
    },
    {
        text: "Az ember nem arra született, hogy legyőzzék. Az embert el lehet pusztítani, de nem lehet legyőzni.",
        author: "Ernest Hemingway"
    },
    {
        text: "A lehetetlen csupán egy nagy szó, amellyel a kis emberek dobálóznak.",
        author: "Muhammad Ali"
    },
    {
        text: "Minden nap megszűnik valami, amiért az ember szomorkodik, de minden nap születik valami új, amiért érdemes élni és küzdeni.",
        author: "Hérakleitosz"
    }
];

// DOM elemek kiválasztása
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

// Idézet generáló függvény
function generateQuote() {
    // Halványítás effekt hozzáadása
    quoteText.style.opacity = 0;
    authorText.style.opacity = 0;
    
    setTimeout(() => {
        // Véletlenszerű idézet kiválasztása
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        
        // Szöveg frissítése
        quoteText.textContent = quote.text;
        authorText.textContent = `- ${quote.author}`;
        
        // Megjelenítés effekt
        quoteText.style.opacity = 1;
        authorText.style.opacity = 1;
    }, 300);
}

// Gomb eseményfigyelő hozzáadása
generateBtn.addEventListener('click', generateQuote);

// Kezdő idézet generálása
generateQuote();
