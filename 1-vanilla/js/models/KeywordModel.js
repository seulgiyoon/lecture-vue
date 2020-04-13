export default {
  data: [
    {keyword: '이탈리아'}, 
    {keyword: '세프의요리'}, 
    {keyword: '제철'}, 
    {keyword: '홈파티'}
  ],

  // 위의 데이터를 리턴. 서버나 쿠키에서 데이터를 받아오는 경우를 상정하여
  // Promise로 데이터를 받아오는 형태로 구성
  // 검색 시간이 걸리는 느낌을 주기 위해서 setTimeout 사용
  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}
