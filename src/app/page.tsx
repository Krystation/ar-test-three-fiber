"use client"
import Image from "next/image";
import styles from "./page.module.css";

// imports
import {useRef, useState} from "react";
import {Canvas, useFrame, ThreeElements} from "@react-three/fiber";

// import components
import TestScene from '@/app/components/testScene';

export default function Home() {
  // states for hover and clicked events
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <main>
      <div className={styles.container}>
        <p>Hello World</p>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <TestScene />
        </Canvas>
      </div>
    </main>
  );
}
