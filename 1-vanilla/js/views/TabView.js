import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.tabNames = {
  recommend: '추천 검색어',
  recent: '최근 검색어',
}

TabView.setup = function (el) {
  this.init(el)
  this.bindClick();
  return this
}

// TabView.tabNames = {
//   0: '추천 검색어',
//   1: '최근 검색어',
// }

// TabView.bindClick = function () {
//   Array.from(this.el.children).forEach((li, index) => {
//     li.addEventListener('click', () => this.onClick(this.tabNames[index]));
//   })
// }

// TabView.onClick = function (tabName) {
//   this.setActiveTab(tabName); 
//   this.emit('@click', {tabName});
// }

TabView.bindClick = function () {
  Array.from(this.el.children).forEach(li => {
    li.addEventListener('click', () => this.onClick(li.innerHTML));
  })
}

TabView.onClick = function (tabName) {
  this.setActiveTab(tabName);
  this.emit('@change', {tabName});
}

TabView.setActiveTab = function (tabName) {
  Array.from(this.el.children).forEach(li => {
    li.className = li.innerHTML === tabName ? 'active' : ''
  })
  this.show()
}

export default TabView
