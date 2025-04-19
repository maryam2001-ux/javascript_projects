const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];


function addqoute () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];

}