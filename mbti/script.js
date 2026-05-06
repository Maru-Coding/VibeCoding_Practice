const questions = [
  {
    axis: "E vs I",
    text: "주말에 에너지를 회복할 때 나는 보통...",
    options: [
      { label: "사람들과 약속을 잡아 활기차게 보낸다", score: "E" },
      { label: "혼자 쉬거나 조용한 시간을 갖는다", score: "I" }
    ]
  },
  {
    axis: "S vs N",
    text: "새로운 정보를 들으면 나는 먼저...",
    options: [
      { label: "구체적인 사실과 경험을 확인한다", score: "S" },
      { label: "전체 흐름과 가능성을 상상한다", score: "N" }
    ]
  },
  {
    axis: "T vs F",
    text: "의사결정을 할 때 더 중요한 것은...",
    options: [
      { label: "객관적인 기준과 논리", score: "T" },
      { label: "사람의 감정과 관계", score: "F" }
    ]
  },
  {
    axis: "J vs P",
    text: "여행을 준비할 때 나는...",
    options: [
      { label: "일정을 미리 정리해 두는 편이다", score: "J" },
      { label: "상황에 따라 유연하게 움직인다", score: "P" }
    ]
  },
  {
    axis: "E vs I",
    text: "회의에서 의견이 다를 때 나는...",
    options: [
      { label: "바로 말하며 토론을 이끈다", score: "E" },
      { label: "정리한 뒤 차분히 말하는 편이다", score: "I" }
    ]
  },
  {
    axis: "S vs N",
    text: "업무를 배울 때 더 편한 방식은...",
    options: [
      { label: "단계별 매뉴얼과 실제 예시", score: "S" },
      { label: "핵심 원리와 큰 그림 설명", score: "N" }
    ]
  },
  {
    axis: "T vs F",
    text: "친구가 고민을 털어놓으면 나는...",
    options: [
      { label: "해결 방법을 함께 찾으려 한다", score: "T" },
      { label: "먼저 공감하고 감정을 들어준다", score: "F" }
    ]
  },
  {
    axis: "J vs P",
    text: "마감이 있는 일을 할 때 나는...",
    options: [
      { label: "미리 계획해 여유 있게 끝낸다", score: "J" },
      { label: "막판 집중력으로 몰입해 끝낸다", score: "P" }
    ]
  },
  {
    axis: "S vs N",
    text: "아이디어 회의에서 나는 보통...",
    options: [
      { label: "현실적인 실행 가능성을 본다", score: "S" },
      { label: "새롭고 독창적인 가능성을 본다", score: "N" }
    ]
  },
  {
    axis: "E vs I",
    text: "하루가 길었다고 느낄 때 더 끌리는 건...",
    options: [
      { label: "친구와 만나 이야기하기", score: "E" },
      { label: "혼자 취미에 몰입하기", score: "I" }
    ]
  }
];

const resultMap = {
  INTJ: {
    title: "전략가",
    desc: "독립적이고 체계적으로 목표를 설계하는 타입이에요. 장기적인 관점에서 구조를 잡고 개선하는 데 강점이 있습니다."
  },
  INTP: {
    title: "사색가",
    desc: "분석적이고 호기심이 많아 아이디어를 깊게 파고드는 타입이에요. 원리와 논리를 이해할 때 큰 몰입을 보여줍니다."
  },
  ENTJ: {
    title: "통솔자",
    desc: "목표 중심적이며 실행력이 뛰어난 타입이에요. 의사결정이 빠르고 프로젝트를 리드할 때 강점이 나타납니다."
  },
  ENTP: {
    title: "발명가",
    desc: "유연하고 창의적으로 새로운 가능성을 발견하는 타입이에요. 토론과 실험을 통해 아이디어를 확장하는 것을 즐깁니다."
  },
  INFJ: {
    title: "옹호자",
    desc: "통찰력과 공감능력을 바탕으로 의미 있는 변화를 추구해요. 사람의 성장과 가치를 중요하게 생각합니다."
  },
  INFP: {
    title: "중재자",
    desc: "진정성과 가치 중심의 판단을 하는 타입이에요. 자신만의 세계관을 바탕으로 따뜻하게 관계를 이어갑니다."
  },
  ENFJ: {
    title: "선도자",
    desc: "사람의 가능성을 잘 보고 팀 분위기를 이끄는 타입이에요. 조화와 성장을 함께 만드는 데 강점이 있습니다."
  },
  ENFP: {
    title: "활동가",
    desc: "열정적이고 아이디어가 풍부하며 사람과의 연결을 즐겨요. 새로운 도전에 빠르게 적응하고 에너지를 냅니다."
  },
  ISTJ: {
    title: "현실주의자",
    desc: "성실하고 책임감 있게 기준을 지키는 타입이에요. 안정적인 운영과 꼼꼼한 실행에서 강점을 보입니다."
  },
  ISFJ: {
    title: "수호자",
    desc: "배려심이 깊고 신뢰를 중요하게 여기는 타입이에요. 주변을 세심하게 챙기며 안정감을 주는 편입니다."
  },
  ESTJ: {
    title: "경영자",
    desc: "현실적이고 조직적인 방식으로 일의 흐름을 관리하는 타입이에요. 명확한 기준과 실행 중심의 판단을 선호합니다."
  },
  ESFJ: {
    title: "집정관",
    desc: "사람 중심으로 협력을 이끌고 분위기를 안정시키는 타입이에요. 팀워크와 조화를 만드는 데 강점이 있습니다."
  },
  ISTP: {
    title: "장인",
    desc: "문제를 실용적으로 해결하고 상황 대응이 빠른 타입이에요. 직접 해보며 효율적인 방법을 찾는 데 능합니다."
  },
  ISFP: {
    title: "모험가",
    desc: "감각적이고 유연하게 순간의 경험을 즐기는 타입이에요. 자신만의 취향과 감성을 섬세하게 표현합니다."
  },
  ESTP: {
    title: "사업가",
    desc: "에너지 넘치고 현실 감각이 뛰어난 타입이에요. 빠른 판단과 행동으로 기회를 포착하는 데 강점이 있습니다."
  },
  ESFP: {
    title: "연예인",
    desc: "사교적이고 긍정적인 분위기를 만드는 타입이에요. 사람들과 함께할 때 에너지가 커지고 표현력이 돋보입니다."
  }
};

const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
const answers = Array(questions.length).fill(null);
let current = 0;

const axisBadge = document.getElementById("axisBadge");
const questionText = document.getElementById("questionText");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stepText = document.getElementById("stepText");
const percentText = document.getElementById("percentText");
const progressBar = document.getElementById("progressBar");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const mbtiType = document.getElementById("mbtiType");
const mbtiTitle = document.getElementById("mbtiTitle");
const mbtiDesc = document.getElementById("mbtiDesc");
const mbtiStats = document.getElementById("mbtiStats");
const restartBtn = document.getElementById("restartBtn");

function renderQuestion() {
  const q = questions[current];
  axisBadge.textContent = q.axis;
  questionText.textContent = q.text;
  optionA.textContent = "A. " + q.options[0].label;
  optionB.textContent = "B. " + q.options[1].label;

  optionA.classList.remove("selected");
  optionB.classList.remove("selected");
  if (answers[current] === 0) optionA.classList.add("selected");
  if (answers[current] === 1) optionB.classList.add("selected");

  stepText.textContent = `${current + 1} / ${questions.length}`;
  const percent = Math.round(((current + 1) / questions.length) * 100);
  percentText.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;

  prevBtn.disabled = current === 0;
  nextBtn.disabled = answers[current] === null;
  nextBtn.textContent = current === questions.length - 1 ? "결과 보기" : "다음 문항";
}

function applyAnswer(optionIndex) {
  const prev = answers[current];
  const q = questions[current];

  if (prev !== null) {
    const prevScore = q.options[prev].score;
    scores[prevScore] -= 1;
  }

  answers[current] = optionIndex;
  const newScore = q.options[optionIndex].score;
  scores[newScore] += 1;

  renderQuestion();
}

function getResultType() {
  const type = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P"
  ].join("");
  return type;
}

function showResult() {
  const type = getResultType();
  const data = resultMap[type];

  mbtiType.textContent = type;
  mbtiTitle.textContent = data.title;
  mbtiDesc.textContent = data.desc;

  mbtiStats.innerHTML = "";
  const metrics = [
    `외향(E) ${scores.E} : 내향(I) ${scores.I}`,
    `감각(S) ${scores.S} : 직관(N) ${scores.N}`,
    `사고(T) ${scores.T} : 감정(F) ${scores.F}`,
    `판단(J) ${scores.J} : 인식(P) ${scores.P}`
  ];

  metrics.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = item;
    mbtiStats.appendChild(chip);
  });

  quizCard.style.display = "none";
  document.querySelector(".footer").style.display = "none";
  resultCard.classList.add("show");
}

function goNext() {
  if (answers[current] === null) return;
  if (current === questions.length - 1) {
    showResult();
    return;
  }
  current += 1;
  renderQuestion();
}

function goPrev() {
  if (current === 0) return;
  current -= 1;
  renderQuestion();
}

function restart() {
  Object.keys(scores).forEach((key) => {
    scores[key] = 0;
  });
  answers.fill(null);
  current = 0;
  resultCard.classList.remove("show");
  quizCard.style.display = "block";
  document.querySelector(".footer").style.display = "flex";
  renderQuestion();
}

optionA.addEventListener("click", () => applyAnswer(0));
optionB.addEventListener("click", () => applyAnswer(1));
prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);
restartBtn.addEventListener("click", restart);

renderQuestion();
