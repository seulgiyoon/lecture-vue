import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset')
  this.showResetBtn(false)
  this.bindEvents()
  // 다른 함수를 .setup다음에 바로 이어서(체이닝으로) 사용하려면, setup메서드에서
  // this를 리턴해주어야한다. 그래야 다음에 이어진 함수가 그걸 받아 사용할 수 있음.
  return this
}

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
  // form 엘리먼트에 submit 이벤트가 발생했을 때 기본 이벤트 발생을 막는다.
  // preventDefault를 안하면 그냥 엔터 쳤을 때 자동으로 이벤트가 발생하는데.
  this.on('submit', e => e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

FormView.onKeyup = function (e) {
  const enter = 13;
  this.showResetBtn(this.inputEl.value.length)
  if (e.keyCode !== enter) return;

  // 검색폼에서 엔터키로 이벤트가 발생했을 경우 검색결과를 띄우려고 함
  // FormView의 역할은 검색폼에 대한 것 뿐, 검색 결과를 띄우는 것은 아니므로
  // 엔터키를 누른 이벤트가 발생했음을 Main Controller에 전달만 해주면 된다.
  // 그럼 메인 컨트롤러가 ResultView에 그를 전달한다.
  // 그를 위해서 emit함수에 커스텀 이벤트인 @sumit을
  this.emit('@submit', { input: this.inputEl.value });
}

export default FormView