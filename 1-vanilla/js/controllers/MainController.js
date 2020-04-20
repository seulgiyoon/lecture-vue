import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js';
import KeywordView from '../views/KeywordView.js';

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js';

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    TabView.setup(document.querySelector('#tabs'))
      .on('@change', e => this.onChangeTab(e.detail.tabName))

    ResultView.setup(document.querySelector('#search-result'))

    KeywordView.setup(document.querySelector('#search-keyword'))

    this.selectedTab = '추천 검색어'
    this.renderView()
  },

  renderView() {
    console.log(tag, 'renderView()')
    TabView.setActiveTab(this.selectedTab)

    if (this.selectedTab === '추천 검색어') {
      this.fetchSearchKeyword()
    }
    ResultView.hide()
  },

  // renderView에 같이 넣었으나, 모델에서 데이터를 가져오는 부분을 따로 떼어내기
  fetchSearchKeyword() {
    KeywordModel.list().then(data => {
      KeywordView.render(data);
    })
  },

  search(query) {
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
    ResultView.hide()
  },

  onSearchResult(data) {
    ResultView.render(data)
  },

  onChangeTab(tabName) {
  },

}