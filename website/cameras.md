# カメラについて

3D 空間を描画するためには、 1 つ以上のカメラが必要です。 `UniversalCamera` や `ArcRotateCamera` を使いましょう。 `WebXR` 用のカメラも用意されています。

## UniversalCamera

キーボード、マウス、タッチ、ゲームパッドなどを使った、 FPS スタイルのゲームに向いているカメラです。当たり判定や重力の設定も可能です。

```ts
import { Scene } from "@babylonjs/core/scene";
import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";

declare const scene: Scene;

const camera = new UniversalCamera("camera", Vector3.One(), scene);
camera.setTarget(Vector3.Zero());
camera.attachControl(true);
```

### 当たり判定を付ける

```js{4}
scene.collisionsEnabled = true;
camera.checkCollisions = true;

anyMesh.checkCollisions = true; // メッシュとカメラが当たるようにします
```

### 重力を設定する

```js
camera.applyGravity = true;
camera.needMoveForGravity(true);
```

:::warning
自動的に重力に従って下に落ちてしまうので、 `Ground` などのメッシュを用意しましょう
:::

## ArcRotateCamera

指定した地点を中心に回転するカメラです。見下ろし視点のゲームやモデルビューアに向いています。

```ts
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";

declare const scene: Scene;

const camera = new ArcRotateCamera("camera", 0, 0, 5, Vector3.Zero(), scene);
camera.attachControl(true);
```
