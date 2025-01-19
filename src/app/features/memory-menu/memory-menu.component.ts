import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

@Component({
  selector: 'app-memory-menu',
  templateUrl: './memory-menu.component.html',
  styleUrls: ['./memory-menu.component.css'],
})
export class MemoryMenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private modelGroup!: THREE.Group;
  private texture!: THREE.Texture;

  ngOnInit(): void {
    this.initThreeJS();
    this.loadFBXModel();
    this.animate();
  }

  ngAfterViewInit(): void {
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngOnDestroy(): void {
    this.renderer.dispose();
    this.scene.clear();
  }

  private initThreeJS(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 2, 5);

    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true //transparent background 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 10).normalize();
    this.scene.add(light);

    const textureLoader = new THREE.TextureLoader();
    this.texture = textureLoader.load('assets/models/memory card textuer.png');
    
    this.modelGroup = new THREE.Group();
    this.scene.add(this.modelGroup);
  }

  private loadFBXModel(): void {
    const loader = new FBXLoader();
    loader.load(
      'assets/models/ps2card.fbx',
      (object: THREE.Object3D<THREE.Object3DEventMap>) => {
        object.scale.set(0.10, 0.10, 0.10);
        object.position.set(0, 0, 0); // Ensure it's centered
        this.modelGroup.add(object); // Add to the group
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({ map: this.texture });
          }
        });
      },
      (xhr: { loaded: number; total: number }) => {
        console.log(`Model loading: ${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error: any) => {
        console.error('An error happened while loading the FBX model:', error);
      }
    );
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Rotate the model group instead of the model itself
    // this.modelGroup.rotation.x = 20;
    this.modelGroup.rotation.y += 0.01; 
    this.modelGroup.rotation.z = 25;
    
    this.renderer.render(this.scene, this.camera);
  }
}
