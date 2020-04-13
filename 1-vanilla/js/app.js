// MainController라는 이름으로 파일로부터 export된 객체를 받아온다.
import MainController from './controllers/MainController.js';

// DOMContentLoaded => HTML 문서가 DOM으로 분석이 끝난 상태에서 발동.
// 스타일시트, 이미지 등의 로딩은 기다리지 않는다.
document.addEventListener('DOMContentLoaded', () => MainController.init());
