import Head from 'next/head';
import Image from 'next/image';
import { Suspense, } from 'react';
import styles from './index.module.scss';
import Three from './component/three';
import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <div className={styles.container} >
      <Canvas className={styles.canvas} shadows>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
    </div>
  )
}
