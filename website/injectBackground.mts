
function createBg() {
    if (!document.getElementsByClassName("is-home")) {
      // ホーム画面ではないので何もしない
      return;
    }
    if (document.getElementById("bg")) {
      // 既に DOM が存在するので何もしない
      return;
    }
    
    const app = document.getElementById("VPContent");
    app.style.position = "relative";
    app.style.zIndex = 1000;

    const bg = document.createElement("div");
    bg.id = "bg";
    bg.style.position = "absolute";
    bg.style.top = "0";
    bg.style.left = "0";
    bg.style.width = "100vw";
    bg.style.height = "100vh";
    bg.style.zIndex = -1000; 
    bg.style.backgroundColor = "#eee";
    app.appendChild(bg);
  }

  window.addEventListener("load", createBg);