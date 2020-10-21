
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


const page = new PageChanger(document.querySelector('.form__admin'));

document.querySelector('.form__admin').addEventListener('submit', function (e) {
  e.preventDefault();



  let fontFamilyToApply;

  switch (page.getValue('font-family')) {
    case 'roboto':
      fontFamilyToApply = 'Roboto';
      break;
    case 'kronaone':
      fontFamilyToApply = 'Krona One';
      break;
    case 'oswald':
      fontFamilyToApply = 'Oswald';
      break;
    default:
      fontFamilyToApply = 'Arial';
  }
  page.changeStyle('.content', 'font-family', fontFamilyToApply);
})
document.querySelector('.form__toggle').onclick = () => {
  document.querySelector('.form').classList.toggle('form_is-opened');
}
