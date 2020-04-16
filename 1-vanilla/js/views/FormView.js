import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset]')
  this.showResetBtn(false)
  this.bindEvents()
  return this;
}

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

// input에서 keyup이벤트가 동작 -> onKeyup 함수가 실행 -> 
// form에서 @submit 이벤트를 방출 -> form에 걸린 @submit 이벤트가 동작 ->
// MainController의 onSubmit 함수가 실행되는 순서.
// 이벤트를 동작시키기 위해서 이벤트를 방출한다.
FormView.bindEvents = function () {
  this.on('submit', e => e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
  this.resetEl.addEventListener('click', e => this.onClickReset(e));
}

FormView.onClickReset = function (e) {
  this.emit('@reset');
  this.showResetBtn(false);
}

FormView.onKeyup = function (e) {
  const enter = 13;
  if (!this.inputEl.value.length) {
    this.showResetBtn(false)
    this.emit('@reset')
  }
  if (e.keyCode !== enter) return
  this.emit('@submit', { input: this.inputEl.value })
}

export default FormView