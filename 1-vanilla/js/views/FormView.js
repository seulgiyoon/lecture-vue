import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset]')
  this.showResetBtn(false);
  this.bindEvents();
  return this
}

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

// input에 키보드 이벤트를 설정. 입력값이 있으면 x버튼이 나타난다.
// 버튼 type이 reset이라서 버튼을 누르면 input의 입력값이 지워지는데, 
// 그 상태에서는 x버튼이 자동으로 사라지지 않음.(일단 강의에는 요구사항에 포함되어 있지 않고, 그에 대한 언급이 없다)
// keyup과 input 이벤트의 차이는?
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event
// https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/input_event
FormView.bindEvents = function () {
  // this.inputEl.addEventListener('keyup', (e) => this.onKeyup(e));
  // on 메서드를 사용해봄
  const inputEl = this.init(this.inputEl);
  inputEl.on('keyup', (e) => this.onKeyup(e));
}

FormView.onKeyup = function (e) {
  // e.target.value === '' ? this.showResetBtn(false) : this.showResetBtn(true);
  // 길이가 0이면 false이므로 x버튼이 나타나지 않는다.
  this.showResetBtn(e.target.value.length);
}

export default FormView