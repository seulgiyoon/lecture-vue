import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    TabView.setup(document.querySelector('#tabs'))
      .on('@change', e => this.onChangeTab(e.detail.tabName))

    KeywordView.setup(document.querySelector('#search-keyword'))
      .on('@click', e => this.onClickKeyword(e.detail.keyword))
      // .on('@input', e => this.onSubmitKeyword(e.detail.keyword))

    ResultView.setup(document.querySelector('#search-result'))

    this.selectedTab = '추천 검색어'
    this.renderView()
  },

  renderView() {
    console.log(tag, 'rednerView()')
    TabView.setActiveTab(this.selectedTab)
    
    if (this.selectedTab === '추천 검색어') {
      this.fetchSearchKeyword()
    } else {
      debugger
    }

    ResultView.hide()
  },

  fetchSearchKeyword() {
    KeywordModel.list().then(data => {
      KeywordView.render(data)
    })
  },

  search(query) {
    // 여기에 검색창 value를 클릭한 검색어로 바꾸는 부분 추가.
    // 여기가 가장 적당한 곳인건가?
    FormView.setValue(query);
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
    // 이미 작성한 코드 중 사용할 수 있는 코드가 없는지 우선 살펴보자
    this.renderView()
  },

  onSearchResult(data) {
    TabView.hide()
    KeywordView.hide()
    ResultView.render(data)
  },

  onChangeTab(tabName) {
    debugger
  },

  onClickKeyword(keyword) {
    this.search(keyword)
  },

  // onSubmitKeyword(keyword) {
  //   FormView.setInput(keyword);
  // }
}