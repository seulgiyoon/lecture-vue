import View from './View.js';

const KeywordView = Object.create(View);

KeywordView.setup = function (el) {
  this.init(el);
  return this;
}

KeywordView.render = function (data = []) {
  this.el.innerHTML = data.length ? this.getKeywordListHtml(data) : '추천 검색어가 없습니다';
  this.show()
}

KeywordView.getKeywordListHtml = function (data) {
  return data.reduce((html, item, index) => {
    return html + this.getKeywordHtml(item, index);
  }, '<ul class="list">') + '</ul>'
}

KeywordView.getKeywordHtml = function(item, index) {
  return `<li>
    <span class="number">${index + 1}</span>
    ${item.keyword}
  </li>`;
}

export default KeywordView;