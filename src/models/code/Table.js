/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Rocco Giandomenico (https://sketchfab.com/Rocco.Giandomenico)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/stylized-low-poly-wood-table-f5d94d0555a14cb0901be4e43cf82ab3
title: Stylized Low-poly Wood Table
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/stylized_low-poly_wood_table.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 40.08, 0]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0, 40.08, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0, 11.81, 0]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0, 11.81, 0]} rotation={[Math.PI, 0, -Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_3.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[0, 121.42, 0]}
            rotation={[Math.PI, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_4.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0, 121.42, 0]} rotation={[Math.PI, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_5.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0, 149.69, 0]} rotation={[Math.PI, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_6.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0, 149.69, 0]} rotation={[-Math.PI, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_7.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[0, 80.75, 0]} scale={[0.23, 0.61, 0.23]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_8.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[-0.52, 171.5, -0.41]} scale={[1.08, 1, 1.08]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_9.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/stylized_low-poly_wood_table.glb");