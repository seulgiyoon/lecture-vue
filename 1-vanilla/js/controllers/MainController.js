import FormView from '../views/FormView.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', (e) => this.onSubmit(e.detail.input))
      // formView에서 @submit 이벤트가 발생했을 때 어떠한 동작을 하도록
      // .on 함수를 이용해서 정의한다.
      // .on 함수를 .setup다음에 바로 이어서(체이닝으로) 사용하려면, setup메서드에서
      // this를 리턴해주어야한다. 그래야 .on이 그걸 받아 사용할 수 있음.
      // 커스텀 이벤트 @submit으로부터는 이벤트 객체가 넘어온다.
      // 그 안에 detail 값 안에 @submit에서 두번째 인자로 넘긴 데이터가 담겨있음.
  },

  onSubmit(query) {
    console.log(query);
  }
}