# Babylon.js 逆引きリファレンス

[[toc]]

## とりあえず最低限描画するには？ {#render}

- [プレイグラウンドを利用する](https://playground.babylonjs.com/)

```html
<style>
    * { margin: 0; }
    canvas { width: 100vw; height: 100vh; }
</style>
<canvas id="render-canvas"></canvas>
<script type="module">
import * as BABYLON from "https://esm.sh/@babylonjs/core";

const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);

// デフォルトのカメラとライトを生成
scene.createDefaultCameraOrLight(true, true, true);

// デフォルトの地面などを生成
scene.createDefaultEnvironment();

// 球を生成
const sphere = BABYLON.MeshBuilder.CreateSphere("Sphere", {}, scene);

// 少し上に移動
sphere.position.y = 0.5;

// 描画関数の定義
engine.runRenderLoop(() => {
    scene.render();
});
// リサイズ関数の定義
window.addEventListener("resize", () => {
    engine.resize();
});
</script>
```

- [Fast Build A World | Scene | Babylon.js Documentation](https://doc.babylonjs.com/features/featuresDeepDive/scene/fastBuildWorld)
- [ESM>CDN](https://esm.sh/)

## 背景色しか見えない {#only-background}

1. 開発者コンソール(F12) で赤文字のエラーが出ていないか確認しましょう
    - `No camera found` と出ている場合は、 1 つ以上のカメラを生成しましょう
1. 見える位置にオブジェクトがあるか確認しましょう
    - マウスでカメラを動かしてみましょう
1. `engine.runRenderLoop` を呼んでいるか確認しましょう

## カメラが動かない {#no-attach-camera}

```js{2}
const camera = new UniversalCamera("camera", Vector3.Zero(), scene);
camera.attachControl(true); // このメソッドを呼んでいるか確認しましょう
```

## 描画サイズが小さい、ブラウザの画面いっぱいにならない {#small-rendering}

デフォルトで `<canvas>` は小さい状態で描画されます。 CSS を使って大きくしましょう。

また、 `body { margin: 0; }` を追加して画面端の隙間をなくしましょう。

```css
body {
    margin: 0;
}
canvas {
    width: 100vw;
    height: 100vh;
}
```

## ポリゴンの色を変えたい {#change-color}

```js{2}
const material = new StandardMaterial("mat", scene);
material.diffuseColor = Color3.Red(); // 見た目の色を赤にする
mesh.material = material;
```

## ポリゴンを少しずつ移動させたい {#move-polygon}

```js
scene.onBeforeRenderObservable.add(() => {
  mesh.position.x += 0.01;
});
```

## ポリゴンを少しずつ回転させたい {#rotate-polygon}

```js
scene.onBeforeRenderObservable.add(() => {
  mesh.rotation.y += 0.01;
});
```

## UniversalCamera の移動を矢印キーから WASD に変えたい {#change-wasd}

```js
camera.keysUp = ["W".charCodeAt(0)];
camera.keysDown = ["S".charCodeAt(0)];
camera.keysLeft = ["A".charCodeAt(0)];
camera.keysRight = ["D".charCodeAt(0)];
```

- [サンプルプレイグラウンド](https://playground.babylonjs.com/#9T8WG5)
