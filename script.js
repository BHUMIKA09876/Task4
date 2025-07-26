
  const text = ["Programmer", "Web Developer", "Tech Enthusiast"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typed").textContent = letter;
    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count++;
        type();
      }, 1000);
    } else {
      setTimeout(type, 100);
    }
  })();

