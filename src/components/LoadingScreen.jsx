import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function RotatingKnot() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="#003366" metalness={0.8} roughness={0.1} />
    </mesh>
  );
}

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 300);

    const timeout = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#002147] text-white relative">
      {/* Rotating 3D Element */}
      <div className="w-32 h-32 mb-4">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <RotatingKnot />
          {/* Increased autoRotateSpeed */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10} />
        </Canvas>
      </div>

      {/* Loading Text */}
      <p className="text-lg font-semibold text-blue-300 mb-4">Profile Loading...</p>

      {/* Loading Bar */}
      <div className="w-72 h-6 bg-[#001f3f] border border-[#00bfff] rounded-md overflow-hidden shadow-md">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-[#00d4ff]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        />
      </div>
    </div>
  );
}
