/*
 * これは全てのページで動く JS だよ！
 * Internet Explorer などの古いブラウザーはサポートしないよ。
 */

// 指定した秒数だけ待つ Promise 関数
function delay(second) {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
}

// 波打つ文字
async function startWave(waveElements) {
  // 波打つ文字を１文字ずつ span タグで囲う
  for (const element of waveElements) {
    // １文字ずつに区切る
    const characters = [...element.innerText];
    // 一旦波打つ文字を消す
    element.innerHTML = "";
    // １文字ずつ文字を組み立てる
    for (let i = 0; i < characters.length; i++) {
      const span = document.createElement("span");
      span.innerText = characters[i];
      span.style.setProperty(
        "transition-delay",
        `${1.5 * (i / characters.length)}s`
      );
      element.appendChild(span);
    }
  }
  // クラスを付け替える関数
  const toggleClass = (className) => {
    for (const element of waveElements) element.classList.toggle(className);
  };
  // 波打ち開始
  while (true) {
    await delay(1);
    toggleClass("wave-bar");
    await delay(1);
    toggleClass("wave-up");
    await delay(6);
    toggleClass("wave-up");
    await delay(2);
    toggleClass("wave-bar");
    await delay(2);
  }
}

// HTML 読み込み完了時
window.addEventListener("DOMContentLoaded", (_event) => {
  startWave(document.getElementsByClassName("wave"));
});
