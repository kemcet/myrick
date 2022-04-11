/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef,useEffect,useState } from 'react' 
import { useGLTF, useAnimations } from "@react-three/drei"

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export default function Model({modell}) { 
    const previousAction = usePrevious(modell);
    const [blink,setBlink]=useState(0)
    const [send,setSend]=useState(0)
    const group = useRef() 
    const { nodes, materials, animations } = useGLTF('/ALLIN.glb') 
    const { actions } = useAnimations(animations, group)
 
    useEffect(()=>{
      if (previousAction) {
        actions[previousAction].fadeOut(0.2);
        actions[previousAction].stop();
        actions['aradasend'].stop()
        actions['aradasend'].fadeOut(0.2);
      }
      if(modell=='sendsmt'){
        let yolla = setTimeout(()=>{
          setSend(send+1)
        },7125)
      }
      setSend(0)
      setBlink(blink+1)
      if(modell!=='twerk'){actions[modell].repetitions=1}
        actions[modell].clampWhenFinished=true
        actions[modell].play()
        actions[modell].fadeIn(0.2);
        return ()=>{
          clearTimeout(yolla)
        }
  },[modell])
    useEffect(()=>{
      if(modell=='normal'){
        let blinkT= (Math.random()*3+2)*1000
        let timeBlink = setTimeout(()=>{
          actions[modell].stop()
          actions[modell].play()
          setBlink(blink+1)
        },blinkT)}
      return ()=>{
        clearTimeout(timeBlink)
      }
    },[blink])
    useEffect(()=>{
        if(modell=='sendsmt'&&send!=0){
          let sendT= (Math.random()*2+1)*1000
          actions['aradasend'].repetitions=1
          actions['aradasend'].clampWhenFinished=true
          let timeSend = setTimeout(()=>{
            actions['aradasend'].stop()
            actions['aradasend'].play()
            setSend(send+1)
          },sendT)}
      return ()=>{
        clearTimeout(timeSend)
      }
    },[send,modell])
      
    return ( 
    <group position={[0, 0.3, 0]} rotation={[0, 0, 0]} scale={0.2} ref={group} dispose={null}>
      <group>
        <group>
          <primitive object={nodes.spine} />
          <primitive object={nodes.kas} />
          <primitive object={nodes['o-xkapalı-yısıran-z']} />
          <primitive object={nodes.ustkapaklar} />
          <primitive object={nodes.altkapaklar} />
          <primitive object={nodes['acıkmutlu-xacıkmutsuz-ymutlu-z']} />
          <primitive object={nodes['kusma1-xkusma2-yuzgun-z']} />
          <primitive object={nodes['dil_z-normalx-kıvrıky-dısarda']} />
          <primitive object={nodes.dis} />
          <primitive object={nodes.dil_yukseklik} />
          <primitive object={nodes.goz} />
          <primitive object={nodes.kasyukseklikverotate} />
          <skinnedMesh geometry={nodes.onluk.geometry} material={materials.beyzz} skeleton={nodes.onluk.skeleton} />
          <skinnedMesh geometry={nodes.sac.geometry} material={materials.sac} skeleton={nodes.sac.skeleton} />
          <skinnedMesh geometry={nodes.saggoz.geometry} material={materials.sagoznorm} skeleton={nodes.saggoz.skeleton} />
          <skinnedMesh geometry={nodes.solgoz.geometry} material={materials.solgoznorm} skeleton={nodes.solgoz.skeleton} />
          <group>
            <skinnedMesh name="body_1" geometry={nodes.body_1.geometry} material={materials.ten} skeleton={nodes.body_1.skeleton} morphTargetDictionary={nodes.body_1.morphTargetDictionary} morphTargetInfluences={nodes.body_1.morphTargetInfluences} />
            <skinnedMesh name="body_2" geometry={nodes.body_2.geometry} material={materials.ayakkubli} skeleton={nodes.body_2.skeleton} morphTargetDictionary={nodes.body_2.morphTargetDictionary} morphTargetInfluences={nodes.body_2.morphTargetInfluences} />
            <skinnedMesh name="body_3" geometry={nodes.body_3.geometry} material={materials.beyzz} skeleton={nodes.body_3.skeleton} morphTargetDictionary={nodes.body_3.morphTargetDictionary} morphTargetInfluences={nodes.body_3.morphTargetInfluences} />
            <skinnedMesh name="body_4" geometry={nodes.body_4.geometry} material={materials.pantul} skeleton={nodes.body_4.skeleton} morphTargetDictionary={nodes.body_4.morphTargetDictionary} morphTargetInfluences={nodes.body_4.morphTargetInfluences} />
            <skinnedMesh name="body_5" geometry={nodes.body_5.geometry} material={materials.kemer} skeleton={nodes.body_5.skeleton} morphTargetDictionary={nodes.body_5.morphTargetDictionary} morphTargetInfluences={nodes.body_5.morphTargetInfluences} />
            <skinnedMesh name="body_6" geometry={nodes.body_6.geometry} material={materials.kemertoka} skeleton={nodes.body_6.skeleton} morphTargetDictionary={nodes.body_6.morphTargetDictionary} morphTargetInfluences={nodes.body_6.morphTargetInfluences} />
            <skinnedMesh name="body_7" geometry={nodes.body_7.geometry} material={materials.gomlek} skeleton={nodes.body_7.skeleton} morphTargetDictionary={nodes.body_7.morphTargetDictionary} morphTargetInfluences={nodes.body_7.morphTargetInfluences} />
            <skinnedMesh name="body_8" geometry={nodes.body_8.geometry} material={materials.agızic} skeleton={nodes.body_8.skeleton} morphTargetDictionary={nodes.body_8.morphTargetDictionary} morphTargetInfluences={nodes.body_8.morphTargetInfluences} />
            <skinnedMesh name="body_9" geometry={nodes.body_9.geometry} material={materials.dis} skeleton={nodes.body_9.skeleton} morphTargetDictionary={nodes.body_9.morphTargetDictionary} morphTargetInfluences={nodes.body_9.morphTargetInfluences} />
          </group>
          <group>
            <skinnedMesh name="dil_1" geometry={nodes.dil_1.geometry} material={materials.dil} skeleton={nodes.dil_1.skeleton} morphTargetDictionary={nodes.dil_1.morphTargetDictionary} morphTargetInfluences={nodes.dil_1.morphTargetInfluences} />
            <skinnedMesh name="dil_2" geometry={nodes.dil_2.geometry} material={materials['Material.002']} skeleton={nodes.dil_2.skeleton} morphTargetDictionary={nodes.dil_2.morphTargetDictionary} morphTargetInfluences={nodes.dil_2.morphTargetInfluences} />
          </group>
          <skinnedMesh name="kas_1" geometry={nodes.kas_1.geometry} material={materials.sac} skeleton={nodes.kas_1.skeleton} morphTargetDictionary={nodes.kas_1.morphTargetDictionary} morphTargetInfluences={nodes.kas_1.morphTargetInfluences} />
          <skinnedMesh name="sagaltkapak" geometry={nodes.sagaltkapak.geometry} material={nodes.sagaltkapak.material} skeleton={nodes.sagaltkapak.skeleton} morphTargetDictionary={nodes.sagaltkapak.morphTargetDictionary} morphTargetInfluences={nodes.sagaltkapak.morphTargetInfluences} />
          <skinnedMesh name="solaltkapak" geometry={nodes.solaltkapak.geometry} material={nodes.solaltkapak.material} skeleton={nodes.solaltkapak.skeleton} morphTargetDictionary={nodes.solaltkapak.morphTargetDictionary} morphTargetInfluences={nodes.solaltkapak.morphTargetInfluences} />
          <skinnedMesh name="ustkapaksag" geometry={nodes.ustkapaksag.geometry} material={nodes.ustkapaksag.material} skeleton={nodes.ustkapaksag.skeleton} morphTargetDictionary={nodes.ustkapaksag.morphTargetDictionary} morphTargetInfluences={nodes.ustkapaksag.morphTargetInfluences} />
          <skinnedMesh name="ustkapaksol" geometry={nodes.ustkapaksol.geometry} material={nodes.ustkapaksol.material} skeleton={nodes.ustkapaksol.skeleton} morphTargetDictionary={nodes.ustkapaksol.morphTargetDictionary} morphTargetInfluences={nodes.ustkapaksol.morphTargetInfluences} />
          <skinnedMesh name="saggozic" geometry={nodes.saggozic.geometry} material={materials.sagic} skeleton={nodes.saggozic.skeleton} morphTargetDictionary={nodes.saggozic.morphTargetDictionary} morphTargetInfluences={nodes.saggozic.morphTargetInfluences} />
          <skinnedMesh name="solgozic" geometry={nodes.solgozic.geometry} material={materials.solic} skeleton={nodes.solgozic.skeleton} morphTargetDictionary={nodes.solgozic.morphTargetDictionary} morphTargetInfluences={nodes.solgozic.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ALLIN.glb')