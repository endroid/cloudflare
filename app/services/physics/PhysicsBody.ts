import { Vector2 } from './Vector2';

export interface Bounds {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

export class PhysicsBody {
  position: Vector2;
  velocity: Vector2 = new Vector2(0, 0);
  acceleration: Vector2 = new Vector2(0, 0);
  mass: number = 1;
  private element: HTMLElement | null = null;
  private width: number = 0;
  private height: number = 0;
  private dragCoefficient: number = 0.98; // Air resistance

  constructor(public id: string) {
    this.position = new Vector2(0, 0);
  }

  setElement(element: HTMLElement): void {
    this.element = element;
    this.updateDimensions();
    // Initialize position from element's current position
    const rect = element.getBoundingClientRect();
    this.position.x = rect.left;
    this.position.y = rect.top;
  }

  private updateDimensions(): void {
    if (!this.element) return;
    const rect = this.element.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
  }

  applyForce(force: Vector2): void {
    this.acceleration = force.scale(1 / this.mass);
  }

  update(deltaTime: number): void {
    // Update velocity based on acceleration
    this.velocity.x += this.acceleration.x * deltaTime;
    this.velocity.y += this.acceleration.y * deltaTime;

    // Apply drag coefficient
    this.velocity.x *= this.dragCoefficient;
    this.velocity.y *= this.dragCoefficient;

    // Update position based on velocity
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;

    // Apply to DOM
    this.syncToDOM();

    // Reset acceleration each frame
    this.acceleration = new Vector2(0, 0);
  }

  private syncToDOM(): void {
    if (!this.element) return;
    this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
  }

  getBounds(): Bounds {
    this.updateDimensions();
    return {
      left: this.position.x,
      right: this.position.x + this.width,
      top: this.position.y,
      bottom: this.position.y + this.height,
      width: this.width,
      height: this.height,
    };
  }
}
