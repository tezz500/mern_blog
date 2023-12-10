import { useEffect } from 'react';
import * as THREE from 'three';
const ThreeComponent = ()=>{
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera( 75, 1080 / 500, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( 1080, 500 );
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );

    const  animate = ()=> {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    const initializeThree = ()=>{
        document.getElementById('test-three').appendChild( renderer.domElement );
        scene.add( cube );
        camera.position.z = 5;
    }
    
    useEffect(()=>{
        initializeThree();
        animate();
    }, []);
    return(
        <div id='test-three'>
            
        </div>
    )
}

export default ThreeComponent;