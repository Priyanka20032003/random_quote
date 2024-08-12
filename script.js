function generate() {
  var quotes = {
    "-- Maya Angelou":
      "“You will face many defeats in life, but never let yourself be defeated.”",
    "-- Oscar Wilde": "“Be yourself; everyone else is already taken.”",
    "-- Nelson Mandela": "“It always seems impossible until it’s done.”",
    "-- Confucius":
      "“Our greatest glory is not in never falling, but in rising every time we fall.”",
    "-- Steve Jobs":
      "“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.”",
    "-- Mahatma Gandhi":
      "“The best way to find yourself is to lose yourself in the service of others.”",
    "-- Ralph Waldo Emerson":
      "“What lies behind us and what lies before us are tiny matters compared to what lies within us.”",
    "-- Albert Camus":
      "“In the depth of winter, I finally learned that within me there lay an invincible summer.”",
    "-- Eleanor Roosevelt":
      "“The future belongs to those who believe in the beauty of their dreams.”",
    "-- Winston Churchill":
      "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
  };

  var authors = Object.keys(quotes);
  console.log(authors);

  var author = authors[Math.floor(Math.random() * authors.length)];
  console.log(author);

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
