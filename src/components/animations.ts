import AOS from "aos";
import * as THREE from "three";
import { OrbitControls } from "three-orbitcontrols-ts";

export const initAnimations = () => {
  AOS.init({ duration: 600 });
};

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  logarithmicDepthBuffer: true,
});

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  50000
);
const scene = new THREE.Scene();

export const initIntroAnimation = () => {
  camera.position.x = -0.6;
  camera.position.y = 0.3;
  camera.position.z = 0.5;

  const ambientLight = new THREE.AmbientLight(0x878787);
  scene.add(ambientLight);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 2, 3);
  scene.add(light);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.enableZoom = false;

  renderer.setSize(window.innerWidth / 2, window.innerHeight - 100);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.autoClear = false;
  document
    .querySelector(".js-intro-animation")
    ?.appendChild(renderer.domElement);

  const geometry1 = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
  const geometry2 = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
  const geometry3 = new THREE.CylinderGeometry(
    1,
    1,
    1,
    32,
    1,
    false,
    0,
    6.283185307179586
  );

  const white = getComputedStyle(document.documentElement).getPropertyValue(
    "--ci-white"
  );
  const lightGrey = getComputedStyle(document.documentElement).getPropertyValue(
    "--ci-light-grey"
  );
  const grey = getComputedStyle(document.documentElement).getPropertyValue(
    "--ci-grey"
  );
  const green = getComputedStyle(document.documentElement).getPropertyValue(
    "--ci-green"
  );
  const darkGreen = getComputedStyle(document.documentElement).getPropertyValue(
    "--ci-green"
  );

  const materialWhite = new THREE.MeshStandardMaterial({
    color: new THREE.Color(white),
  });

  const materialBrown = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x2c1c14),
  });
  const materialLightGrey = new THREE.MeshStandardMaterial({
    color: new THREE.Color(lightGrey),
  });
  const materialGrey = new THREE.MeshStandardMaterial({
    color: new THREE.Color(grey),
  });
  const materialGreen = new THREE.MeshStandardMaterial({
    color: new THREE.Color(green),
  });
  const materialDarkGreen = new THREE.MeshStandardMaterial({
    color: new THREE.Color(darkGreen),
  });
  const materialYellow = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xfafa4d),
  });

  const tabletop = new THREE.Mesh(geometry1, materialBrown);
  const footLeft = new THREE.Mesh(geometry2, materialLightGrey);
  const footRight = new THREE.Mesh(geometry2, materialLightGrey);
  const legLeft = new THREE.Mesh(geometry2, materialLightGrey);
  const legRight = new THREE.Mesh(geometry1, materialLightGrey);
  const monitorCase = new THREE.Mesh(geometry1, materialGrey);
  const computerCase = new THREE.Mesh(geometry1, materialGrey);
  const ground = new THREE.Mesh(geometry1, materialGrey);
  const monitorLeg = new THREE.Mesh(geometry1, materialLightGrey);
  const screen = new THREE.Mesh(geometry1, materialWhite);
  const keyboardCase = new THREE.Mesh(geometry1, materialGrey);
  const mouseCase = new THREE.Mesh(geometry1, materialGrey);
  const lamp = new THREE.Mesh(geometry1, materialYellow);
  const book = new THREE.Mesh(geometry1, materialGrey);
  const pen = new THREE.Mesh(geometry1, materialGreen);
  const cdDrive1 = new THREE.Mesh(geometry1, materialLightGrey);
  const cdDrive2 = new THREE.Mesh(geometry1, materialLightGrey);
  const powerBtn = new THREE.Mesh(geometry3, materialGreen);
  const aux = new THREE.Mesh(geometry3, materialGreen);
  const escBtn = new THREE.Mesh(geometry1, materialGreen);
  const fBtns1 = new THREE.Mesh(geometry1, materialGreen);
  const fBtns2 = new THREE.Mesh(geometry1, materialGreen);
  const fBtns3 = new THREE.Mesh(geometry1, materialGreen);
  const funcBtns1 = new THREE.Mesh(geometry1, materialGreen);
  const funcBtns2 = new THREE.Mesh(geometry1, materialGreen);
  const funcBtns3 = new THREE.Mesh(geometry1, materialGreen);
  const arrowBtns1 = new THREE.Mesh(geometry1, materialGreen);
  const arrowBtns2 = new THREE.Mesh(geometry1, materialGreen);
  const alpabeticBtns = new THREE.Mesh(geometry1, materialGreen);
  const numberBtns = new THREE.Mesh(geometry1, materialGreen);
  const rightBtn = new THREE.Mesh(geometry1, materialGreen);
  const leftBtn = new THREE.Mesh(geometry1, materialDarkGreen);

  tabletop.position.x = 0.0;
  tabletop.position.y = 0.05;
  tabletop.position.z = 0.0;
  tabletop.position.z = 0.0;
  tabletop.scale.x = 0.488;
  tabletop.scale.y = 0.041;
  tabletop.scale.z = 1.065;

  footLeft.position.x = 0.004;
  footLeft.position.y = -0.29;
  footLeft.position.z = -0.4;
  footLeft.scale.x = 0.438;
  footLeft.scale.y = 0.022;
  footLeft.scale.z = 0.069;

  footRight.position.x = 0.004;
  footRight.position.y = -0.29;
  footRight.position.z = 0.4;
  footRight.scale.x = 0.438;
  footRight.scale.y = 0.022;
  footRight.scale.z = 0.069;

  legLeft.position.x = 0.054;
  legLeft.position.y = -0.13;
  legLeft.position.z = -0.4;
  legLeft.scale.x = 0.036;
  legLeft.scale.y = 0.336;
  legLeft.scale.z = 0.029;

  legRight.position.x = 0.05;
  legRight.position.y = -0.13;
  legRight.position.z = 0.4;
  legRight.scale.x = 0.036;
  legRight.scale.y = 0.336;
  legRight.scale.z = 0.029;

  const table = new THREE.Group();
  table.add(tabletop);
  table.add(footLeft);
  table.add(footRight);
  table.add(legLeft);
  table.add(legRight);

  monitorCase.position.x = 0.05;
  monitorCase.position.y = 0.228;
  monitorCase.position.z = 0;
  monitorCase.scale.x = 0.021;
  monitorCase.scale.y = 0.199;
  monitorCase.scale.z = 0.5;

  ground.position.x = 0.051;
  ground.position.y = 0.072;
  ground.position.z = 0.003;
  ground.scale.x = 0.114;
  ground.scale.y = 0.009;
  ground.scale.z = 0.136;

  monitorLeg.position.x = 0.07;
  monitorLeg.position.y = 0.138;
  monitorLeg.position.z = 0.002;
  monitorLeg.scale.x = 0.036;
  monitorLeg.scale.y = 0.122;
  monitorLeg.scale.z = 0.03;

  screen.position.x = 0.046;
  screen.position.y = 0.228;
  screen.position.z = 0;
  screen.scale.x = 0.021;
  screen.scale.y = 0.183;
  screen.scale.z = 0.48;

  const monitor = new THREE.Group();
  monitor.add(monitorCase);
  monitor.add(ground);
  monitor.add(monitorLeg);
  monitor.add(screen);

  computerCase.position.x = 0.05;
  computerCase.position.y = 0.162;
  computerCase.position.z = 0.404;
  computerCase.scale.x = 0.246;
  computerCase.scale.y = 0.192;
  computerCase.scale.z = 0.083;

  cdDrive1.position.x = -0.073;
  cdDrive1.position.y = 0.22;
  cdDrive1.position.z = 0.405;
  cdDrive1.scale.x = 0.003;
  cdDrive1.scale.y = 0.015;
  cdDrive1.scale.z = 0.073;

  cdDrive2.position.x = -0.073;
  cdDrive2.position.y = 0.199;
  cdDrive2.position.z = 0.405;
  cdDrive2.scale.x = 0.003;
  cdDrive2.scale.y = 0.015;
  cdDrive2.scale.z = 0.073;

  powerBtn.position.x = -0.075;
  powerBtn.position.y = 0.24;
  powerBtn.position.z = 0.375;
  powerBtn.rotation.x = 0;
  powerBtn.rotation.y = 0;
  powerBtn.rotation.z = 89.5;
  powerBtn.scale.x = -0.005;
  powerBtn.scale.y = 0.002;
  powerBtn.scale.z = 0.005;

  aux.position.x = -0.073;
  aux.position.y = 0.24;
  aux.position.z = 0.438;
  aux.rotation.x = 0;
  aux.rotation.y = 0;
  aux.rotation.z = 89.5;
  aux.scale.x = -0.002;
  aux.scale.y = 0.002;
  aux.scale.z = 0.002;

  const computer = new THREE.Group();
  computer.add(computerCase);
  computer.add(cdDrive1);
  computer.add(cdDrive2);
  computer.add(powerBtn);
  computer.add(aux);

  keyboardCase.position.x = -0.14;
  keyboardCase.position.y = 0.072;
  keyboardCase.position.z = -0.041;
  keyboardCase.scale.x = 0.097;
  keyboardCase.scale.y = 0.004;
  keyboardCase.scale.z = 0.283;

  escBtn.position.x = -0.111;
  escBtn.position.y = 0.077;
  escBtn.position.z = -0.17;
  escBtn.scale.x = 0.01;
  escBtn.scale.y = 0.004;
  escBtn.scale.z = 0.01;

  fBtns1.position.x = -0.111;
  fBtns1.position.y = 0.077;
  fBtns1.position.z = -0.133;
  fBtns1.scale.x = 0.01;
  fBtns1.scale.y = 0.004;
  fBtns1.scale.z = 0.047;

  fBtns2.position.x = -0.111;
  fBtns2.position.y = 0.077;
  fBtns2.position.z = -0.078;
  fBtns2.scale.x = 0.01;
  fBtns2.scale.y = 0.004;
  fBtns2.scale.z = 0.047;

  fBtns3.position.x = -0.111;
  fBtns3.position.y = 0.077;
  fBtns3.position.z = -0.025;
  fBtns3.scale.x = 0.01;
  fBtns3.scale.y = 0.004;
  fBtns3.scale.z = 0.047;

  funcBtns1.position.x = -0.111;
  funcBtns1.position.y = 0.077;
  funcBtns1.position.z = 0.022;
  funcBtns1.scale.x = 0.01;
  funcBtns1.scale.y = 0.004;
  funcBtns1.scale.z = 0.032;

  funcBtns2.position.x = -0.128;
  funcBtns2.position.y = 0.077;
  funcBtns2.position.z = 0.022;
  funcBtns2.scale.x = 0.01;
  funcBtns2.scale.y = 0.004;
  funcBtns2.scale.z = 0.032;

  funcBtns3.position.x = -0.141;
  funcBtns3.position.y = 0.077;
  funcBtns3.position.z = 0.022;
  funcBtns3.scale.x = 0.01;
  funcBtns3.scale.y = 0.004;
  funcBtns3.scale.z = 0.032;

  arrowBtns1.position.x = -0.177;
  arrowBtns1.position.y = 0.077;
  arrowBtns1.position.z = 0.022;
  arrowBtns1.scale.x = 0.01;
  arrowBtns1.scale.y = 0.004;
  arrowBtns1.scale.z = 0.032;

  arrowBtns2.position.x = -0.167;
  arrowBtns2.position.y = 0.077;
  arrowBtns2.position.z = 0.022;
  arrowBtns2.scale.x = 0.012;
  arrowBtns2.scale.y = 0.004;
  arrowBtns2.scale.z = 0.012;

  alpabeticBtns.position.x = -0.153;
  alpabeticBtns.position.y = 0.077;
  alpabeticBtns.position.z = -0.088;
  alpabeticBtns.scale.x = 0.06;
  alpabeticBtns.scale.y = 0.004;
  alpabeticBtns.scale.z = 0.173;

  numberBtns.position.x = -0.153;
  numberBtns.position.y = 0.077;
  numberBtns.position.z = 0.07;
  numberBtns.scale.x = 0.06;
  numberBtns.scale.y = 0.004;
  numberBtns.scale.z = 0.051;

  const keyboard = new THREE.Group();
  keyboard.add(keyboardCase);
  keyboard.add(fBtns1);
  keyboard.add(fBtns2);
  keyboard.add(fBtns3);
  keyboard.add(funcBtns1);
  keyboard.add(funcBtns2);
  keyboard.add(funcBtns3);
  keyboard.add(arrowBtns1);
  keyboard.add(arrowBtns2);
  keyboard.add(alpabeticBtns);
  keyboard.add(numberBtns);

  mouseCase.position.x = -0.14;
  mouseCase.position.y = 0.075;
  mouseCase.position.z = 0.158;
  mouseCase.scale.x = 0.052;
  mouseCase.scale.y = 0.012;
  mouseCase.scale.z = 0.029;

  rightBtn.position.x = -0.125;
  rightBtn.position.y = 0.081;
  rightBtn.position.z = 0.167;
  rightBtn.scale.x = 0.02;
  rightBtn.scale.y = 0.002;
  rightBtn.scale.z = 0.011;

  leftBtn.position.x = -0.125;
  leftBtn.position.y = 0.081;
  leftBtn.position.z = 0.15;
  leftBtn.scale.x = 0.02;
  leftBtn.scale.y = 0.002;
  leftBtn.scale.z = 0.011;

  const mouse = new THREE.Group();
  mouse.add(mouseCase);
  mouse.add(rightBtn);
  mouse.add(leftBtn);

  lamp.position.x = 0.136;
  lamp.position.y = 0.134;
  lamp.position.z = -0.399;
  lamp.scale.x = 0.079;
  lamp.scale.y = 0.137;
  lamp.scale.z = 0.083;

  book.position.x = -0.093;
  book.position.y = 0.072;
  book.position.z = -0.399;
  book.scale.x = 0.128;
  book.scale.y = 0.009;
  book.scale.z = 0.094;

  pen.position.x = -0.093;
  pen.position.y = 0.074;
  pen.position.z = -0.325;
  pen.scale.x = 0.085;
  pen.scale.y = 0.006;
  pen.scale.z = 0.008;

  const accessory = new THREE.Group();
  accessory.add(lamp);
  accessory.add(book);
  accessory.add(pen);

  scene.add(table);
  scene.add(monitor);
  scene.add(keyboard);
  scene.add(mouse);
  scene.add(computer);
  scene.add(accessory);

  loop();

  renderer.render(scene, camera);
};

const loop = () => {
  scene.rotation.y += 0.001;

  renderer.render(scene, camera);

  requestAnimationFrame(loop);
};
