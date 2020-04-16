import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

// reset 버튼을 클릭했을 때 결과 화면이 지워지기
// 글자를 모두 지워도(검색어) 결과 화면이 지워지기
export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    ResultView.setup(document.querySelector('#search-result'))
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm() {
    // ResultView.render('RESET');
    // View.js에 있는 hide 메서드 사용.
    // 그냥 안보이게 숨기는 건 생각해보지 못한 방법..! (display:none)
    ResultView.hide();
  },

  search(query) {
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSearchResult(data) {
    ResultView.render(data)
  }
}