import {Color3, Color4, Engine, FreeCamera, Mesh, PointLight, Scene, StandardMaterial, Vector3 } from 'babylonjs';


const canvas = document.getElementById("render-canvas") as HTMLCanvasElement

const engine = new Engine(canvas);

const scene = new Scene(engine);
scene.clearColor = new Color4(0.8, 0.8, 0.8);

const camera = new FreeCamera("camera", new Vector3(0, 0, -10), scene);

const light = new PointLight("light", new Vector3(10, 10, 0), scene);

const box = Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new StandardMaterial("material", scene);
boxMaterial.emissiveColor = new Color3(0, 0.58, 0.86);
box.material = boxMaterial;

let t = 0;
engine.runRenderLoop(() => {
    scene.render()
    t -= 0.01;
    box.rotation.y = t*2;
    box.position.y = Math.sin(t*3);
});
window.addEventListener('resize', () => engine.resize);
