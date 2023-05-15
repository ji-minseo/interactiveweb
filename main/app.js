import * as THREE from 'three';
import { GLTFLoader } from "GLTFLoader";
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

let scene = new THREE.Scene();
scene.background = new THREE.Color("black");

let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

camera.position.set(0, 0, 5);

let loader = new GLTFLoader();
// loader.load("./assets/scene.gltf", function (gltf) {
//     scene.add(gltf.scene);
//   });

let PLight = new THREE.PointLight();
let ALight = new THREE.AmbientLight();
PLight.position.set(50, 50, 50);
scene.add(PLight, ALight);


let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
  antialias: true,
});

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize(window.innerWidth, window.innerHeight);


const controls = new OrbitControls( camera, renderer.domElement );

controls.update();

const geometry = new THREE.CapsuleGeometry( 3, 30, 10, 20 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); 
scene.add( capsule );
renderer.render(scene, camera); // 랜더링
capsule.rotation.x += 0.05

function animate() {
  requestAnimationFrame(animate)
  gltf.scene.rotation.y += 0.01
  renderer.render(scene, camera); // 랜더링
  controls.update();

}
animate()


// loader.load("./assets/scene.gltf", function (gltf) {
//     scene.add(gltf.scene);
//     renderer.render(scene, camera); // 랜더링
//     gltf.scene.rotation.x += 0.05

//     function animate() {
//         requestAnimationFrame(animate)
//         gltf.scene.rotation.y += 0.01
//         renderer.render(scene, camera); // 랜더링
//         controls.update();

//     }
//     animate()
//   });


