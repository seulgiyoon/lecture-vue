import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.messages = {
  NO_KEYWORDS: '추천 검색어가 없습니다'
}

KeywordView.setup = function (el) {
  this.init(el)
  return this
}

KeywordView.bindEvents = function () {
  const list = Array.from(this.el.querySelectorAll('li'))
  // list.forEach(item => item.addEventListener('click', () => this.onClickKeyword(item)))
  if (list.length) {
    list.forEach(item => item.addEventListener('click', (e) => this.onClickKeyword(e)))
  }
}

// KeywordView.onClickKeyword = function (item) {
//   this.emit('@submit', {input : item.innerHTML})
// }

// currentTarget과 target의 차이점은?
// currentTarget은 이벤트가 실제로 걸려있는 엘리먼트의 위치
// target은 이벤트가 발생한(예를 들어, 사용자가 실제로 클릭한) 엘리먼트
// 이벤트 버블링등을 이용해서 부모 요소에만 이벤트를 걸어놓았을 경우, 자식 요소가 클릭되었다면
// 자식 요소는 target / 부모요소는 currentTarget이다.
KeywordView.onClickKeyword = function (e) {
  const { keyword } = e.currentTarget.dataset;
  this.emit('@click', { keyword })
}

KeywordView.render = function (data = []) {
  this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : this.messages.NO_KEYWORDS
  this.bindEvents()
  this.show()
}

KeywordView.getKeywordsHtml = function (data) {
  return data.reduce((html, item, index) => {
    html += `<li data-keyword="${item.keyword}"><span class="number">${index + 1}</span>${item.keyword}</li>`
    return html
  }, '<ul class="list">') + "</ul>"
}

export default KeywordView
