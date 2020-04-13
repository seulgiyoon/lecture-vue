const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://cdn.bmf.kr/_data/product/H1821/5a4ed4e8a6751cb1cc089535c000f331.jpg'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://cdn.bmf.kr/_data/product/H503E/300d931e3b8252ed628b6a3c2f56936b.jpg'
  }
]
// 왜 여기는 데이터는 export 안했을까?

// 위의 데이터를 리턴. 서버나 쿠키에서 데이터를 받아오는 경우를 상정하여
// Promise로 데이터를 받아오는 형태로 구성
// 검색 시간이 걸리는 느낌을 주기 위해서 setTimeout 사용
// 검색어를 인자로 받는다. 일단은 사용처는 없음.
export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}