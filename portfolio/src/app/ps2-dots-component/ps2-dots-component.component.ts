import { Component, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-ps2-dots-component',
  imports: [],
  templateUrl: './ps2-dots-component.component.html',
  styleUrls: ['./ps2-dots-component.component.css']
})
export class PS2DotsComponentComponent implements OnInit, AfterViewInit, OnDestroy {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private dot!: THREE.Mesh;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Initialize scene
    this.scene = new THREE.Scene();

    // Initialize camera
    const width = this.el.nativeElement.offsetWidth;
    const height = this.el.nativeElement.offsetHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Initialize renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.el.nativeElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.15, 15, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.dot = new THREE.Mesh(geometry, material);
    this.scene.add(this.dot);

    
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  ngAfterViewInit(): void {
    this.animate();
    this.onWindowResize()
  }

	ngOnDestroy(): void {
		window.removeEventListener('resize', this.onWindowResize.bind(this));
	}

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.dot.rotation.x += 0.01;
    this.dot.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  //handle window resizing
  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
