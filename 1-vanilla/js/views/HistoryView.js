import KeywordView from './KeywordView.js'

const tag = '[HistoryView]'

const HistoryView = Object.create(KeywordView)

HistoryView.messages.NO_KEYWORDS = '검색 이력이 없습니다'

HistoryView.getKeywordsHtml = function (data) {
  return data.reduce((html, item) => {
    html += `<li data-keyword="${item.keyword}">
      ${item.keyword} 
      <span class="date">${item.date}</span>
      <button class="btn-remove"></button>
      </li>`
    return html
  }, '<ul class="list">') + "</ul>"
}

// HistoryView.bindClickEvent = function () {
//   Array.from(this.el.querySelectorAll('li')).forEach(li => {
//     li.addEventListener('click', e => this.onClickKeyword(e))
//   })

//   Array.from(this.el.querySelectorAll('button')).forEach(button => {
//     button.addEventListener('click', e => {
//       event.stopPropagation(); 
//       this.onRemove(e)
//     })
//   })
// }

HistoryView.bindRemoveBtn = function () {
  Array.from(this.el.querySelectorAll('button.btn-remove')).forEach(button => {
    button.addEventListener('click', e => {
      event.stopPropagation(); 
      this.onRemove(button.parentElement.dataset.keyword)
    })
  })
}

HistoryView.onRemove = function (keyword) {
  this.emit('@remove', { keyword })
}

// HistoryView.onRemove = function (e) {
//   const { keyword } = e.currentTarget.parentNode.dataset;
//   this.emit('@remove', { keyword })
// }

export default HistoryView
// 목록에서 x버튼을 클릭하면 선택된 검색어가 목록에서 삭제된다
