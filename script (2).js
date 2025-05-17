const formulas = {
  뉴턴: {
    name: '뉴턴의 제2법칙',
    latex: 'F = ma',
    desc: '힘(F)은 질량(m)과 가속도(a)의 곱입니다.'
  },
  피타고라스: {
    name: '피타고라스의 정리',
    latex: 'a^2 + b^2 = c^2',
    desc: '직각삼각형에서 두 변의 제곱 합은 빗변 제곱과 같습니다.'
  },
  속도: {
    name: '속도 공식',
    latex: 'v = \\frac{d}{t}',
    desc: '속도(v)는 거리(d)를 시간(t)으로 나눈 값입니다.'
  },
  에너지: {
    name: '에너지 = 질량 × 빛의 속도²',
    latex: 'E = mc^2',
    desc: '아인슈타인의 질량-에너지 등가 공식입니다.'
  },
  전압: {
    name: '전압 공식 (옴의 법칙)',
    latex: 'V = IR',
    desc: '전압(V)은 전류(I)와 저항(R)의 곱입니다.'
  }
};

function searchFormula() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();

  const resultKey = Object.keys(formulas).find(key => key.includes(query));
  const output = document.getElementById('formulaResult');

  if (resultKey) {
    const formula = formulas[resultKey];

    output.innerHTML = `
      <h3 class="font-bold text-xl text-indigo-700 mb-2">${formula.name}</h3>
      <div class="text-gray-800 mb-2"> ${formula.desc} </div>
      <div class="text-2xl text-black">$$${formula.latex}$$</div>
    `;
    MathJax.typesetPromise(); // LaTeX 재렌더링
  } else {
    output.innerHTML = '';
    Swal.fire({
      title: '검색 결과 없음',
      text: '입력하신 키워드에 해당하는 공식을 찾을 수 없습니다.',
      icon: 'warning',
      confirmButtonColor: '#6366f1'
    });
  }
}
