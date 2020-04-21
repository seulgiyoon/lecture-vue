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
    //  .on('@submit', e => this.onSubmit(e.detail.input))
    .on('@click', e => this.onClickKeyword(e.detail.keyword))

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

  // 결과목록을 렌더하는 함수에서 탭뷰와 키워드뷰를 숨기기. 뷰에 관련된거니까 여기서 처리
  onSearchResult(data) {
    TabView.hide();
    KeywordView.hide();
    ResultView.render(data)
  },

  onChangeTab(tabName) {
    debugger
  },

  // onSubmit과 같은 역할이지만 키워드 뷰를 따로 함수로 만든다.
  onClickKeyword(keyword) {
    this.search(keyword);
  }
}