export default {
  data: [
    // keyword는 검색어, date는 검색 날짜
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  // 위의 데이터를 리턴. 서버나 쿠키에서 데이터를 받아오는 경우를 상정하여
  // Promise로 데이터를 받아오는 형태로 구성
  list() {
    return Promise.resolve(this.data)
  },
  
  // 검색어를 받아서 data에 추가함
  add(keyword = '') {
    // 양 끝 공백을 제거하는 메서드 trim
    keyword = keyword.trim()
    // 검색어가 없으면 동작 끝
    if (!keyword) return
    // 만약 검색어가 이미 data에 존재한다면, 기존에 있는 data 객체를 지움
    // 예전 기록이 있더라도, 최신 기록이 기록되어야하므로.
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    // 추가할 검색 날짜 date.
    const date = '12.31'
    // 새로운 객체를 추가하고 기존 데이터들을 합쳐서 새 배열을 통으로 교체
    this.data = [{keyword, date}, ...this.data]
  },
  
  // 중복되는 키워드가 있는지 검사하여 지움(그 데이터만 뺀 새로운 배열로 data를 교체)
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}