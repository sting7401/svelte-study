<script>
    import * as THREE from 'three';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new THREE.FBXLoader();
    let model;

    loader.load('path/to/model.fbx', function (fbx) {
    model = fbx;
    // 선택적으로 원본 모델의 위치, 회전 및 크기를 조정할 수 있습니다.
    scene.add(model);
    });

</script>

<style>

</style>