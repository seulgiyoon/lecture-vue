import View from './View.js';

const TabView = Object.create(View);

TabView.setup = function(el) {
  this.init(el);
  return this;
}

// 탭 하나하나를 잡아서 이벤트를 건다거나 하지 않고,
// 여러개 중 하나와 매치하는 것이 반응하도록 설계.
TabView.setActiveTab = function(tabName) {
  Array.from(this.el.querySelectorAll('li')).forEach(li => {
    li.className = li.innerHTML === tabName ? 'active' : '';
  })
}


export default TabView;
