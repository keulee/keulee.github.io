const quotes = [
  `Don't look at your feet to see if you are doing it right. Just dance.`,
  "Worry is a misuse of imagination.",
  "A year from now you will wish you had started today.",
  "If you don’t risk anything, you risk even more.",
  "Failure is simply the opportunity to begin again, this time more intelligently.",
  "If you change the way you look at things, the things you look at change.",
  "Start where you are. Use what you have. Do what you can.",
  "Everything you've ever wanted is sitting on the other side of fear.",
  "Make sure your worst enemy doesn’t live between your own two ears.",
  "Sometimes magic is just someone spending more time on something than anyone else might reasonably expect.",
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
  "If there is no struggle, there is no progress.",
  "Courage is like a muscle. We strengthen it by use.",
  "More is lost by indecision than wrong decision.",
  "Keep a little fire burning; however small, however hidden.",
  "When we strive to become better than we are, everything around us becomes better too.",
  "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
  "To know how much there is to know is the beginning of learning to live.",
  "Don’t let yesterday take up too much of today.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "Be a positive energy trampoline – absorb what you need and rebound more back.",
  "Love your family, work super hard, live your passion.",
  "Don't let someone else's opinion of you become your reality",
  "If you can dream it, you can do it.",
  "Do what you can, with what you have, where you are.",
];

const person = [
  "― Anne Lamott",
  "― Unknown",
  "― Unknown",
  "― Erica Jong",
  "― Henry Ford",
  "― Wayne Dyer",
  "― Arthur Ashe",
  "― George Addair",
  "― Laird Hamilton",
  "― Raymond Joseph Teller",
  "― Earl Nightingale",
  "― Frederick Douglass",
  "― Ruth Gordo",
  "― Marcus Tullius Cicero",
  "― Cormac McCarthy",
  "― Paulo Coelho",
  "― Steve Jobs",
  "― Dorothy West",
  "― Will Rogers",
  "― Winston S. Churchill",
  "― Dave Carolan",
  "― Gary Vaynerchuk",
  "― Les Brown",
  "― Walt Disney",
  "― Theodore Roosevelt",
];

const quote = document.querySelector(".quotes");
const by = document.querySelector(".person");

const Selected = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[Selected];
by.innerText = person[Selected];
