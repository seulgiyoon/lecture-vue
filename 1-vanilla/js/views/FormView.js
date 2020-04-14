import View from './View.js';

const tag = '[FormView]';

// View의 프로토타입을 상속받기
const FormView = Object.create(View);

// 여기에 el로 form 엘리먼트를 전달
FormView.setup = function(el) {
  this.init(el);
  this.inputEl = el.querySelector('[type=text]');
  this.resetEl = el.querySelector('[type=reset]');
  // 처음에는 x버튼이 화면에 보이지 않도록 설정
  this.showResetBtn(false);
}

FormView.showResetBtn = function(show = true) {
  // if (show) {
  //   this.resetEl.style.display = '';
  // } else {
  //   this.resetEl.style.display = 'none';    
  // }
  this.resetEl.style.display = show ? 'block' : 'none';
}

export default FormView;
