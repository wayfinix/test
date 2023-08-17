const lang = document.getElementById("lang");
const lang1 = document.getElementById("lang1");
const btn = document.querySelector(".button-mobile-menu");
const menu = document.querySelector(".mobile-menu");
const phone = document.getElementById("טלפון");
const fullName = document.getElementById("שם");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function changeLanguage() {
  if (lang.src.match("imgs/russia.png") || lang1.src.match("imgs/russia.png")) {
    lang.src = "imgs/israel.png";
    lang1.src = "imgs/israel.png";
    contact.textContent = data.russian.contact;
    (firstLabel.textContent = data.russian.firstLabel),
      (firstLabel.style.textAlign = "left");
    about.textContent = data.russian.about;
    about1.textContent = data.russian.about1;
    home.textContent = data.russian.home;
    home1.textContent = data.russian.home1;
    (secondLabel.textContent = data.russian.secondLabel),
      (secondLabel.style.textAlign = "left");
    phone.style.textAlign = "left";
    fullName.style.textAlign = "left";
    firsth.textContent = data.russian.firsth;
    firstp.textContent = data.russian.firstp;
    secondp.textContent = data.russian.secondp;
    secondh.textContent = data.russian.secondh;
    send.textContent = data.russian.send;
    (thirdp.textContent = data.russian.thirdp),
      (thirdp.style.maxWidth = "190px");
  } else {
    lang.src = "imgs/russia.png";
    lang1.src = "imgs/russia.png";
    contact.textContent = data.hebrew.contact;
    (firstLabel.textContent = data.hebrew.firstLabel),
      (firstLabel.style.textAlign = "right");
    about.textContent = data.hebrew.about;
    about1.textContent = data.hebrew.about1;
    home.textContent = data.hebrew.home;
    home1.textContent = data.hebrew.home1;
    (secondLabel.textContent = data.hebrew.secondLabel),
      (secondLabel.style.textAlign = "right");
    phone.style.textAlign = "right";
    fullName.style.textAlign = "right";
    firsth.textContent = data.hebrew.firsth;
    firstp.textContent = data.hebrew.firstp;
    secondp.textContent = data.hebrew.secondp;
    secondh.textContent = data.hebrew.secondh;
    send.textContent = data.hebrew.send;
    (thirdp.textContent = data.hebrew.thirdp),
      (thirdp.style.maxWidth = "250px");
  }
}

const data = {
  hebrew: {
    contact: "צור קשר",
    about: "מי אנחנו",
    about1: "מי אנחנו",
    home: "דף הבית",
    home1: "דף הבית",
    firsth: ",נעים להכיר",
    firstp:
      "בסט סיגמא הוקמה על ידי יאן ברונפמן ואלדר פורטנוב, החזון של החברה היא לעזור לאנשים ולתת מענה אישי ואיכותי בתחום פרישה, מיסוי ופיננסים, תוך דגש על התאמה אישית לצרכים הפיננסיים של כל לקוח. החברה מאמינה בשילוב של ידע מקצועי ובניית יחסים אמינים עם הלקוחות, כדי להבטיח תמיכה מקסימלית בהגשת הפתרונות המתאימים לצרכיהם הפרטיים של כול לקוחותינו.",
    secondp:
      "החברה מפעילה צוות של מומחים בתחום הפרישה והפנסיה, שיכולים לספק ליווי מעמיק ומקצועי ללקוחותיה.",
    secondh: "צרו קשר",
    send: "שליחה",
    thirdp: "רחוב ההגנה 13, ראשון לציון, מגדל ירון מילר",
    firstLabel: ":שם",
    secondLabel: ":טלפון",
  },
  russian: {
    contact: "Связаться с нами",
    about: "О нас",
    about1: "О нас",
    home: "Главная Страница",
    home1: "Главная Страница",
    firsth: "Приветствуем!",
    firstp:
      "Best Sigma была основана Яном Бронфманом и Эльдаром Портновым. Видение компании заключается в том, чтобы помогать людям и предоставлять персональное и качественное решение в области пенсионного обеспечения, налогообложения и финансов с упором на личную адаптацию к финансовым потребностям каждого клиента. Компания верит в сочетание профессиональных знаний и построения надежных отношений с клиентами, чтобы обеспечить максимальную поддержку в предоставлении решений, подходящих для всех.",
    secondp:
      "В компании работает команда экспертов в области выхода на пенсию и пенсионного обеспечения, которые могут оказать всестороннюю и профессиональную поддержку своим клиентам.",
    secondh: "контакт",
    send: "отправка",
    thirdp: "Хагана 13, Ришон Ле-Цион, Ярон Миллер Тауэр",
    firstLabel: "Имя:",
    secondLabel: "телефон:",
  },
};
