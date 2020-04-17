import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js';

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm());  
    ResultView.setup(document.querySelector('#search-result'));
    TabView.setup(document.querySelector('#tabs'));

    this.selectedTab = '추천 검색어';
    this.renderView();
  },
  
  // init은 기초 셋업, renderView는 초기에 설정될 모양을 잡아주는 역할로 나눔.
  renderView() {
    TabView.setActiveTab(this.selectedTab);
    ResultView.hide();
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
    ResultView.hide()
  },

  search(query) {
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSearchResult(data) {
    ResultView.render(data)
  },

  onChangeTab(tabName) {
    debugger
  },

}