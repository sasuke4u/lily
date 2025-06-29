const trigger = document.getElementById('trigger');
const lines = document.querySelectorAll('.line');
const finalLines = document.querySelectorAll('.final');
let index = 0;

trigger.addEventListener('click', () => {
  trigger.style.display = 'none';

  const showLine = () => {
    if (index < lines.length) {
      lines[index].style.width = "0";
      lines[index].classList.remove("hidden");
      lines[index].style.animation = `typing 1.5s steps(30, end) forwards`;
      index++;
      setTimeout(showLine, 1600);
    } else {
      finalLines.forEach(line => line.classList.remove('hidden'));
    }
  };

  showLine();
});
