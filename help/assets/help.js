// 탭 아이콘(파비콘)
const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/png";
icon.href = new URL("ncd_logo.png", document.currentScript.src).href;
document.head.appendChild(icon);

// 도움말 왼쪽 목록과 언어 전환. 쪽을 추가하면 PAGES에 넣는다 (docs/manual/README.md).
const PAGES = [
  ["index", "시작하기", "Getting Started"],
  ["screen", "화면 구성", "The Screen"],
  ["objects", "객체", "Objects"],
  ["effect", "이펙트 영상과 싱크", "Effect Video and Sync"],
  ["audio", "오디오", "Audio"],
  ["subtitles", "자막", "Subtitles"],
  ["export", "자르기와 내보내기", "Trimming and Export"],
  ["ai", "AI 연결", "AI Connection"],
  ["shortcuts", "단축키", "Keyboard Shortcuts"],
  ["trouble", "문제 해결", "Troubleshooting"],
];
const lang = document.documentElement.lang;
const current = document.body.dataset.page;
const nav = document.createElement("nav");

// Logo 영역
const logoLink = document.createElement("a");
logoLink.className = "logo";
logoLink.href = new URL("../../index.html", document.currentScript.src).href;  // 클릭하면 홈으로
const logo = document.createElement("img");
logo.src = new URL("ncd_logo.png", document.currentScript.src).href;
logo.alt = "NexCreDesign logo";
logoLink.appendChild(logo);
nav.appendChild(logoLink);
const company = document.createElement("span");
company.className = "company";
company.textContent = "NexCreDesign";
logoLink.appendChild(company);

const title = document.createElement("div");
title.className = "brand";
title.textContent = "AI Effect Video";
nav.appendChild(title);

for (const [page, ko, en] of PAGES) {
  const link = document.createElement("a");
  link.href = page + ".html";
  link.textContent = lang === "ko" ? ko : en;
  if (page === current) link.className = "here";
  nav.appendChild(link);
}
const other = document.createElement("a");
other.className = "lang";
other.href = "../" + (lang === "ko" ? "en" : "ko") + "/" + current + ".html";
other.textContent = lang === "ko" ? "English" : "\uD55C\uAD6D\uC5B4";
nav.appendChild(other);
document.body.prepend(nav);

// 화면 구성 쪽: 고정 크기(1560×840) 화면 목업을 쪽 폭에 맞춘다
const stage = document.querySelector(".stage");
if (stage) {
  const app = stage.querySelector(".app");
  const fit = () => {
    const scale = stage.clientWidth / 1560;
    app.style.transform = "scale(" + scale + ")";
    stage.style.height = 840 * scale + "px";
  };
  fit();
  window.addEventListener("resize", fit);
}
