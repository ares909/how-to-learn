
class PageChanger {
  constructor(form) {
    this.form = form;
  }
  getValue(inputName) {
    return this.form.elements[inputName].value;
  }

  changeText(selectorToChange, sourceInputName) {
    document.querySelector(selectorToChange).textContent = this.getValue(sourceInputName);
  }
  changeStyle(selectorToChange, styleToChange, value) {
    document.querySelector(selectorToChange).style[styleToChange] = value;
  }
}
const DEFAULT_FONT = 'Arial';
const VARIANTS = {
	roboto: "Roboto",
	kronaone: "Krona One",
	oswald: "Oswald"
}

const page = new PageChanger(document.querySelector('.form__admin'));

document.querySelector('.form__admin').addEventListener('submit', function (e) {
  e.preventDefault();
  const targetFont = VARIANTS[page.getValue('font-family')] || DEFAULT_FONT



  page.changeStyle('.content', 'font-family', targetFont);
})
document.querySelector('.form__toggle').onclick = () => {
  document.querySelector('.form').classList.toggle('form_is-opened');
}
