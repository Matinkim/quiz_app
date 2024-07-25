const quizData = [
  {
    //문제
    question: "뉴진스 멤버가 아닌 것은?",
    //보기
    a: "하니",
    b: "민지",
    c: "원영",
    d: "혜인",
    //정답
    correct: "c",
  },
  {
    question: "아이브 멤버가 맞는 것은?",
    a: "박순홍",
    b: "김동규",
    c: "손근영",
    d: "장원영",
    correct: "d",
  },
  {
    question: "에스파 멤버가 아닌것은?",
    a: "카리나",
    b: "박용진",
    c: "지젤",
    d: "닝닝",
    correct: "b",
  },
  {
    question: "남자  연예인은?",
    a: "카리나",
    b: "박용진",
    c: "장원영",
    d: "하니",
    correct: "b",
  },
];

// getElementByid로 보기,문제 태그 가져오기
// 라디오버튼
const answerEls = document.querySelectorAll(".answer");
// 제목
const questionEl = document.getElementById("question");
// 보기
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
//제출 버튼
const submitBtn = document.getElementById("submit");

//모든 요소를 자식으로 갖고 있는 부모 div
const div = document.getElementById("quiz");
//첫번째 문제 인덱스
let currentQuiz = 0;
// 첫번째 문제 출력
let score = 0;
loadQuiz();

function loadQuiz() {
  // 체크 초기화
  dselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  //태그에 질문값 넣기
  questionEl.textContent = currentQuizData.question;
  //보기 값 넣기
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
}
// 체크 속성 초기화
function dselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// 선택된 라디오 태그의 id값 가져오기

function getSelected() {
  let answer;
  answerEls.forEach((el) => {
    // el -> <input>
    // input 태그에 checked 속성이 true 라면
    // 태그의 id값을 answer에 넣기
    if (el.checked) {
      answer = el.id;
    }
  });
  //answer 변수 반환
  return answer;
}

submitBtn.addEventListener("click", () => {
  //선택된 보기 값
  const answer = getSelected();
  //선택된 id 값이 존재한다면 실행
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      // 선택한 값이 정답과 일치한다면
      // 점수 1점 추가
      score++;
    }
    // 문제 인덱스 1추가
    currentQuiz++;
    //문제 개수가 index 값보다 크다면
    if (currentQuiz < quizData.length) {
      //퀴즈 불러오기 함수 호출
      loadQuiz();
    }
    //문제 다 풀었을때
    else {
      div.innerHTML = `<h2>총 ${score}/${quizData.length}개 맞추셨습니다.</h2>
    <button onclick="location.reload()">다시하기</button>`;
    }
  }
});
