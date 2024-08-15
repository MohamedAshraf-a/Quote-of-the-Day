var listOfQuote = [
  {
    Quote: "“Be yourself; everyone else is already taken.”",
    writer: "― Oscar Wilde",
  },
  { Quote: "“So many books, so little time.”", writer: "― Frank Zappa" },

  {
    Quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    writer: "― Oscar Wilde",
  },

  {
    Quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.””",
    writer: "― Mahatma Gandhi",
  },

  {
    Quote: "“Without music, life would be a mistake.”",
    writer: "― Friedrich Nietzsche",
  },

  {
    Quote: "“The jeer went out of the voice. It became tough. Evil.”",
    writer: "― Dorothy B. Hughes",
  },

  {
    Quote:
      "You will never be able to escape from your heart. So it's better to listen to what it has to say.",
    writer: "― Paulo Coelho, The Alchemist",
  },
];

var temp = ``;
var perviousRandom;

function NewQuote() {
  for (var i = 0; i < listOfQuote.length; i++) {
    perviousRandom = random;

    var random = Math.floor(Math.random() * listOfQuote.length);
    if (perviousRandom != random) {
      temp = `
    <h4>${listOfQuote[random].Quote}</h4>
          <p>${listOfQuote[random].writer}</p>
   
   `;
    }
  }

  document.getElementById("print").innerHTML = temp;
}
