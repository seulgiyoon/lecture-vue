import KeywordView from './KeywordView.js'

const tag = '[HistoryView]'

const HistoryView = Object.create(KeywordView)

HistoryView.messages.NO_KEYWORDS = '검색 이력이 없습니다'

// KeywordView에서 함수를 render와 getKeywordsHtml로 나눠놓았기에 여기에서 오버라이딩 할 수 있다.
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

export default HistoryView
