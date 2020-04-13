const tag = '[View]'

export default {
  // 엘리먼트를 주입받아 자신의 프로퍼티로 갖는다.
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  // 가지고 있는 엘리먼트에 특정 이벤트를 부여하고,
  // 해당 이벤트가 발생하면 handler가 발동하도록 설정한다.
  // 뷰에서 발생한 이벤트를 핸들링하기 위한 함수
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  // on이 특정한 이벤트에 대한 행동을 설정한다면, emit은 스스로가 특정 이벤트를 실행(방출)하는 기능
  // 특정 이벤트와 데이터를 받아 이벤트 객체 evt를 생성하고, 
  // 엘리먼트 el에 해당 이벤트를 dispatchEvent로 붙여 이벤트를 방출하도록 함
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  // css의 display 값을 none으로 설정하여 엘리먼트를 가림
  hide() {
    this.el.style.display = 'none'
    return this
  },

  // css의 display 값을 원래 값으로 돌려서 엘리먼트를 보여줌
  show() {
    this.el.style.display = ''
    return this
  }
}