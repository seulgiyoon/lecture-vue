import View from './View.js';

const tag = '[ResultView]'

const ResultView = Object.create(View);

ResultView.setup = function(el) {
  this.init(el);
  return this;
}

ResultView.render = function(data = []) {
  this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다';   
}

ResultView.getSearchResultsHtml = function(data) {
  // 생각해본 풀이
  let result = '';
  data.forEach(item => {
    const dataToHtml = `<li><img src="${item.image}"><p>${item.name}</p></li>`
    result = result + dataToHtml;
  });
  return `<ul>${result}</ul>`;
}

export default ResultView;