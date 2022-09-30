const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2d572c);
const texture = new THREE.TextureLoader();
const matcap = texture.load("./imagen/background-made-from-bricks.jpg");
var loader = new THREE.TextureLoader();
loader.load('./imagen/bloquesmamahurvo.jpeg', function(texture){
        scene.background = texture; 
    }
);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );



camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 40;

function animate (){
	requestAnimationFrame( animate );
	mesh.rotation.y += 0.05
	/* cone.rotation.x += 0.04 */
	mesh.rotation.z += 0.05
	renderer.render( scene, camera )
}

animate()