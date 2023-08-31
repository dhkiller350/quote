const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do if you havent found it yet keep looking don't settle. - Steve Jobs",
  "only easy day was yesturday -navy seals",
  "don't say you don't want to wake your only pushing your dreams back a whole month a whole year just because you didn't want to wake up who does",
  "wake up at 5 / make coffee / get dressed / go to work / get home-eat / shower / sleep / repeat-505",
  "you can look in front of you but the future doesn't haunt you its the past that does-505",
  "a warrior is someone that fights but the demon in you is what helps fight-505",
    // Add more quotes here
];

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const generateButton = document.getElementById('generate-button');
const quoteText = document.getElementById('quote-text');

generateButton.addEventListener('click', () => {
    const randomQuote = generateRandomQuote();
    quoteText.textContent = randomQuote;
});
