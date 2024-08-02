<template>
    <canvas id="box" ref="container" touch-action="none" style="width: 100%; height: 320px;"></canvas>
</template>

<style scoped>
#box:focus-visible {
    outline: none;
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { PointLight } from "@babylonjs/core/Lights/pointLight";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

export default defineComponent({
    setup() {
        const container = ref();

        function init() {
            if (container.value instanceof HTMLCanvasElement) {
                const engine = new Engine(container.value, true);
                const scene = new Scene(engine);
                scene.clearColor = new Color4(0, 0, 0, 0);
                const camera = new ArcRotateCamera("Camera", Math.PI / 4, Math.PI / 4, 3, Vector3.Zero(), scene);
                camera.attachControl(true);
                new PointLight("light", new Vector3(1, 1, 1), scene);

                const box = MeshBuilder.CreateBox("Box", {}, scene);
                const boxMat = new StandardMaterial("BoxMat", scene);
                boxMat.diffuseColor = new Color3(0.2, 0.2, 1);
                box.material = boxMat;

                engine.runRenderLoop(() => {
                    box.rotation.y += 0.005;
                    scene.render();
                });
                window.addEventListener("resize", () => {
                    engine.resize();
                });
            }
        }

        onMounted(() => {
            init();
        });

        return {
            container,
        };
    }
});
</script>
