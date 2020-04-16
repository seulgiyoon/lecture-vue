import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js';

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    ResultView.setup(document.querySelector('#search-result'))
  },

  // 각 단계마다 함수를 모두 분리한다.
  // 검색어와 함께 엔터 -> @submit발동 -> onSubmit -> search -> 
  // SearchModel.list -> onSearchResult -> ResultView.render -> ResultView.getSearchResultsHtml
  search(query) {
    SearchModel.list(query).then(data => {
      this.onSearchResult(data);
    })
  },
  
  onSubmit(input) {
    this.search(input);    
    console.log(tag, 'onSubmit()', input)
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
  },

  onSearchResult(data) {
    ResultView.render(data);
  },
}