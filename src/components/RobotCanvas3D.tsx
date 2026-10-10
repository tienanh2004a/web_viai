import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const RobotCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showHi, setShowHi] = useState(false);
  const hiTimeoutRef = useRef<number | null>(null);
  const robotHopRef = useRef(0);

  const handleRobotClick = () => {
    setShowHi(true);
    robotHopRef.current = 1.0; // Trigger fun jump bounce in 3D
    if (hiTimeoutRef.current) window.clearTimeout(hiTimeoutRef.current);
    hiTimeoutRef.current = window.setTimeout(() => {
      setShowHi(false);
    }, 3500);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Studio & Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.6);
    scene.add(ambientLight);

    const orangeKeyLight = new THREE.PointLight(0xf97316, 5.0, 22);
    orangeKeyLight.position.set(4, 3, 5);
    scene.add(orangeKeyLight);

    const warmFillLight = new THREE.PointLight(0xfbbf24, 3.5, 20);
    warmFillLight.position.set(-4, -2, 4);
    scene.add(warmFillLight);

    const cyanRimLight = new THREE.PointLight(0x38bdf8, 3.0, 18);
    cyanRimLight.position.set(-3, 4, -2);
    scene.add(cyanRimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 2.4);
    topLight.position.set(0, 6, 3);
    scene.add(topLight);

    // ==========================================
    // 1. 3D SPIRAL GALAXY (CHỈ XOAY TRÒN THUẦN TÚY QUANH TRỤC)
    // ==========================================
    // Fixed tilted container - KHÔNG xoay ngang, KHÔNG lắc lư
    const galaxyContainer = new THREE.Group();
    galaxyContainer.rotation.x = 0.52; // Góc nghiêng cố định 30 độ như vành đai sao
    scene.add(galaxyContainer);

    // Nhóm xoay tròn thuần túy (spin only)
    const galaxySpinGroup = new THREE.Group();
    galaxyContainer.add(galaxySpinGroup);

    // 1,200 particle spiral galaxy arms
    const galaxyParams = {
      count: 1200,
      size: 0.046,
      radius: 3.7,
      branches: 3,
      spin: 1.2,
      randomness: 0.28,
      power: 3,
    };

    const galaxyGeo = new THREE.BufferGeometry();
    const galaxyPositions = new Float32Array(galaxyParams.count * 3);
    const galaxyColors = new Float32Array(galaxyParams.count * 3);

    const colorCore = new THREE.Color('#ff7a00');   // Warm orange core
    const colorMid = new THREE.Color('#fbbf24');    // Amber gold stars
    const colorEdge = new THREE.Color('#38bdf8');   // Cosmic cyan edge

    for (let i = 0; i < galaxyParams.count; i++) {
      const i3 = i * 3;

      // Start outside robot body radius (0.85) to avoid clipping through robot
      const r = 0.85 + Math.random() * (galaxyParams.radius - 0.85);
      const spinAngle = r * galaxyParams.spin;
      const branchAngle = ((i % galaxyParams.branches) / galaxyParams.branches) * Math.PI * 2;

      const randX = Math.pow(Math.random(), galaxyParams.power) * (Math.random() < 0.5 ? 1 : -1) * galaxyParams.randomness * r;
      const randY = (Math.random() - 0.5) * 0.16; // Đĩa thiên hà dẹt, mỏng
      const randZ = Math.pow(Math.random(), galaxyParams.power) * (Math.random() < 0.5 ? 1 : -1) * galaxyParams.randomness * r;

      // Particle position in flat X-Z plane of the galaxy disc
      galaxyPositions[i3] = Math.cos(branchAngle + spinAngle) * r + randX;
      galaxyPositions[i3 + 1] = randY;
      galaxyPositions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randZ;

      // Color gradient from center to edge of the galaxy
      const pointColor = colorCore.clone();
      const normR = (r - 0.85) / (galaxyParams.radius - 0.85);
      if (normR < 0.5) {
        pointColor.lerp(colorMid, normR / 0.5);
      } else {
        pointColor.copy(colorMid).lerp(colorEdge, (normR - 0.5) / 0.5);
      }

      galaxyColors[i3] = pointColor.r;
      galaxyColors[i3 + 1] = pointColor.g;
      galaxyColors[i3 + 2] = pointColor.b;
    }

    galaxyGeo.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
    galaxyGeo.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));

    const galaxyMat = new THREE.PointsMaterial({
      size: galaxyParams.size,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.NormalBlending,
    });
    const galaxyPoints = new THREE.Points(galaxyGeo, galaxyMat);
    galaxySpinGroup.add(galaxyPoints);

    // Vành đai mỏng xoay tròn đồng trục cùng thiên hà
    const ringGeo1 = new THREE.RingGeometry(1.6, 2.7, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.12,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 2;
    galaxySpinGroup.add(ringMesh1);

    const ringGeo2 = new THREE.RingGeometry(2.4, 3.4, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.08,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 2;
    galaxySpinGroup.add(ringMesh2);

    // ==========================================
    // 2. ROBOT 3D (THÂN TRẮNG + CỔ CAM + TAY CHUẨN THEO ẢNH)
    // ==========================================
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // Materials
    const whiteChassisMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.12,
      roughness: 0.12,
    });

    const darkChassisMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.8,
      roughness: 0.25,
    });

    const orangeAccentMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      emissive: 0xea580c,
      emissiveIntensity: 0.50,
      metalness: 0.35,
      roughness: 0.22,
    });

    const visorMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xf97316,
      emissiveIntensity: 2.2,
      roughness: 0.1,
    });

    // ------------------------------------------
    // A. THÂN ROBOT MÀU TRẮNG
    // ------------------------------------------
    const torsoGroup = new THREE.Group();
    const torsoGeo = new THREE.CylinderGeometry(0.85, 0.65, 1.4, 6);
    // Thân robot màu trắng sứ:
    const torsoMesh = new THREE.Mesh(torsoGeo, whiteChassisMat);
    torsoGroup.add(torsoMesh);

    // Tấm giáp ngực màu trắng
    const chestPlateGeo = new THREE.BoxGeometry(0.9, 0.7, 0.45);
    const chestPlate = new THREE.Mesh(chestPlateGeo, whiteChassisMat);
    chestPlate.position.set(0, 0.15, 0.55);
    torsoGroup.add(chestPlate);

    // Khung viền cam tinh xảo cho logo
    const chestTrimGeo = new THREE.BoxGeometry(0.72, 0.72, 0.04);
    const chestTrim = new THREE.Mesh(chestTrimGeo, orangeAccentMat);
    chestTrim.position.set(0, 0.15, 0.76);
    torsoGroup.add(chestTrim);

    const chestBadgeBaseGeo = new THREE.BoxGeometry(0.68, 0.68, 0.05);
    const chestBadgeBase = new THREE.Mesh(chestBadgeBaseGeo, whiteChassisMat);
    chestBadgeBase.position.set(0, 0.15, 0.77);
    torsoGroup.add(chestBadgeBase);

    // Logo VIAI trước ngực sắc nét
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/logo-viai.png');
    logoTexture.colorSpace = THREE.SRGBColorSpace;

    const logoPlaneGeo = new THREE.PlaneGeometry(0.64, 0.64);
    const logoPlaneMat = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
      depthWrite: false,
    });
    const logoMesh = new THREE.Mesh(logoPlaneGeo, logoPlaneMat);
    logoMesh.position.set(0, 0.15, 0.80);
    torsoGroup.add(logoMesh);

    robotGroup.add(torsoGroup);

    // ------------------------------------------
    // B. CỔ ROBOT MÀU CAM (Vibrant Orange Neck)
    // ------------------------------------------
    const neckGeo = new THREE.CylinderGeometry(0.32, 0.36, 0.30, 24);
    const neck = new THREE.Mesh(neckGeo, orangeAccentMat);
    neck.position.set(0, 0.82, 0);
    robotGroup.add(neck);

    const neckCollarGeo = new THREE.TorusGeometry(0.36, 0.035, 16, 32);
    neckCollarGeo.rotateX(Math.PI / 2);
    const neckCollar = new THREE.Mesh(neckCollarGeo, orangeAccentMat);
    neckCollar.position.set(0, 0.74, 0);
    robotGroup.add(neckCollar);

    // ------------------------------------------
    // C. TAY ROBOT ĐÚNG THEO ẢNH MẪU (MŨ VAI CAM + CÁNH TAY TRẮNG VUỐT THON)
    // ------------------------------------------
    // Hàm tạo tay robot chuẩn theo ảnh mẫu (ảnh chụp cận cảnh của người dùng):
    const createArm = (isLeft: boolean) => {
      const armGroup = new THREE.Group();

      // 1. Khớp vai / Mũ giáp vai chéo màu cam (phần trên màu cam như trong ảnh)
      const capGroup = new THREE.Group();
      capGroup.rotation.z = isLeft ? -0.32 : 0.32;
      capGroup.rotation.x = 0.12;

      // Dome tròn đỉnh mũ vai
      const domeGeo = new THREE.SphereGeometry(0.26, 20, 20);
      domeGeo.scale(1.0, 1.25, 0.85);
      const domeMesh = new THREE.Mesh(domeGeo, orangeAccentMat);
      domeMesh.position.set(0, 0.10, 0);
      capGroup.add(domeMesh);

      // Ốp che chéo
      const capCollarGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.26, 20);
      const capCollar = new THREE.Mesh(capCollarGeo, orangeAccentMat);
      capCollar.position.set(0, -0.06, 0);
      capGroup.add(capCollar);

      armGroup.add(capGroup);

      // 2. Cánh tay vuốt thon màu trắng như ảnh (tapered teardrop limb in white)
      const limbGroup = new THREE.Group();
      limbGroup.rotation.z = isLeft ? -0.22 : 0.22;
      limbGroup.position.set(isLeft ? -0.04 : 0.04, -0.12, 0);

      // Thân cánh tay thon dần xuống dưới
      const limbGeo = new THREE.CylinderGeometry(0.25, 0.10, 0.78, 24);
      const limbMesh = new THREE.Mesh(limbGeo, whiteChassisMat);
      limbMesh.position.set(0, -0.36, 0);
      limbGroup.add(limbMesh);

      // Chóp tròn mềm mại ở đầu bàn tay
      const tipGeo = new THREE.SphereGeometry(0.10, 16, 16);
      const tipMesh = new THREE.Mesh(tipGeo, whiteChassisMat);
      tipMesh.position.set(0, -0.75, 0);
      limbGroup.add(tipMesh);

      armGroup.add(limbGroup);

      return { armGroup, limbGroup };
    };

    // Tay trái (bên trái người xem)
    const leftArmData = createArm(true);
    leftArmData.armGroup.position.set(-1.08, 0.35, 0.05);
    robotGroup.add(leftArmData.armGroup);

    // Tay phải (bên phải người xem)
    const rightArmData = createArm(false);
    rightArmData.armGroup.position.set(1.08, 0.35, 0.05);
    robotGroup.add(rightArmData.armGroup);

    // ------------------------------------------
    // D. ĐẦU ROBOT CHUẨN BAN ĐẦU
    // ------------------------------------------
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.25, 0);

    // Helmet màu trắng
    const headGeo = new THREE.BoxGeometry(1.1, 0.95, 0.95);
    const headMesh = new THREE.Mesh(headGeo, whiteChassisMat);
    headGroup.add(headMesh);

    // Kính ngắm visor vàng cam phát sáng
    const visorGeo = new THREE.BoxGeometry(0.92, 0.28, 0.2);
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    visorMesh.position.set(0, 0.08, 0.48);
    headGroup.add(visorMesh);

    // Tai tròn cảm biến màu cam hai bên
    const earGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.25, 16);
    earGeo.rotateZ(Math.PI / 2);
    const leftEar = new THREE.Mesh(earGeo, orangeAccentMat);
    leftEar.position.set(-0.62, 0.05, 0);
    const rightEar = new THREE.Mesh(earGeo, orangeAccentMat);
    rightEar.position.set(0.62, 0.05, 0);
    headGroup.add(leftEar, rightEar);

    // Ăng-ten đỉnh đầu
    const antennaMastGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.5, 8);
    const antennaMast = new THREE.Mesh(antennaMastGeo, darkChassisMat);
    antennaMast.position.set(-0.4, 0.65, -0.1);
    const antennaTipGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const antennaTip = new THREE.Mesh(antennaTipGeo, visorMat);
    antennaTip.position.set(-0.4, 0.9, -0.1);
    headGroup.add(antennaMast, antennaTip);

    robotGroup.add(headGroup);

    // ==========================================
    // 3. MOUSE TRACKING & INTERACTIVE CONTROLS
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: globalThis.MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / rect.width) * 2 - 1;
      mouseY = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // ==========================================
    // 4. ANIMATION LOOP
    // ==========================================
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // 1. THIÊN HÀ CHỈ XOAY TRÒN THUẦN TÚY QUANH TRỤC (KHÔNG LẮC NGANG)
      galaxySpinGroup.rotation.y = elapsed * 0.08;

      // 2. Smooth mouse tracking
      targetX += (mouseX * 0.45 - targetX) * 0.05;
      targetY += (mouseY * 0.35 - targetY) * 0.05;

      // 3. Hop bounce on click
      let jumpY = 0;
      if (robotHopRef.current > 0.01) {
        jumpY = Math.sin(robotHopRef.current * Math.PI) * 0.45;
        robotHopRef.current -= 0.035;
      }

      // 4. Floating idle bobbing + jump
      robotGroup.position.y = Math.sin(elapsed * 1.8) * 0.12 + jumpY;

      // 5. Robot Torso & Head follow cursor
      robotGroup.rotation.y = targetX * 0.8;
      robotGroup.rotation.x = -targetY * 0.5;

      headGroup.rotation.y = targetX * 0.5;
      headGroup.rotation.x = -targetY * 0.4;

      // 6. Tay robot cử động nhẹ nhàng khi bay / nhảy khi click
      const armSwing = Math.sin(elapsed * 1.8) * 0.04;
      leftArmData.armGroup.rotation.z = armSwing;
      rightArmData.armGroup.rotation.z = -armSwing;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      onClick={handleRobotClick}
      className="relative w-full h-[450px] sm:h-[500px] lg:h-[560px] flex items-center justify-center cursor-pointer select-none group"
      title="Nhấp vào tớ nhé!"
    >
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 z-10" />

      {/* Cosmic Nebula Soft Glow behind Galaxy */}
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-sky-400/10 blur-3xl opacity-80" />

      {/* Speech Bubble "Hi!" */}
      {showHi && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-all duration-300 ease-out">
          <div className="relative bg-[#ffffff] text-[#111827] px-5 py-2.5 rounded-2xl shadow-xl border-2 border-[#c2410c] flex items-center gap-2">
            <span className="font-heading font-black text-xl sm:text-2xl tracking-wider text-[#c2410c]">
              Hi! 👋
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111827]">
              Chào bạn, tớ là VIAI Bot!
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#c2410c]" />
          </div>
        </div>
      )}

      {/* Click invitation hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-xs text-[#4b5563] bg-white/95 px-4 py-1.5 rounded-full border border-black/8 shadow-xs font-semibold">
        Ấn vào robot để chào 👋
      </div>
    </div>
  );
};
