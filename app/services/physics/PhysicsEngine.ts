import { PhysicsBody } from './PhysicsBody';
import { Vector2 } from './Vector2';

export class PhysicsEngine {
  private bodies: Map<string, PhysicsBody> = new Map();
  private gravity: Vector2 = new Vector2(0, 1); // Default gravity down
  private running: boolean = false;
  private animationFrameId: number | null = null;
  private lastFrameTime: number = 0;
  private readonly fixedTimeStep: number = 1 / 60; // 60 FPS
  private accumulator: number = 0;

  setGravityDirection(direction: Vector2): void {
    this.gravity = direction.normalize().scale(9.8); // Standard gravity magnitude
  }

  registerBody(id: string, body: PhysicsBody): void {
    this.bodies.set(id, body);
  }

  unregisterBody(id: string): void {
    this.bodies.delete(id);
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.lastFrameTime = performance.now();
    this.animate();
  }

  stop(): void {
    this.running = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private animate = (): void => {
    if (!this.running) return;

    const currentTime = performance.now();
    const deltaTime = Math.min((currentTime - this.lastFrameTime) / 1000, 0.1); // Cap at 100ms
    this.lastFrameTime = currentTime;

    this.accumulator += deltaTime;

    // Fixed timestep physics updates
    while (this.accumulator >= this.fixedTimeStep) {
      this.update(this.fixedTimeStep);
      this.accumulator -= this.fixedTimeStep;
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private update(deltaTime: number): void {
    const bodies = Array.from(this.bodies.values());

    // Apply forces and update velocities
    for (const body of bodies) {
      body.applyForce(this.gravity);
      body.update(deltaTime);
    }

    // Resolve collisions
    this.resolveCollisions(bodies);

    // Apply boundary constraints
    for (const body of bodies) {
      this.applyBoundaryConstraints(body);
    }
  }

  private resolveCollisions(bodies: PhysicsBody[]): void {
    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        const colliding = this.isColliding(bodies[i], bodies[j]);
        if (colliding) {
          this.resolveCollision(bodies[i], bodies[j]);
        }
      }
    }
  }

  private isColliding(bodyA: PhysicsBody, bodyB: PhysicsBody): boolean {
    const boundsA = bodyA.getBounds();
    const boundsB = bodyB.getBounds();

    return (
      boundsA.left < boundsB.right &&
      boundsA.right > boundsB.left &&
      boundsA.top < boundsB.bottom &&
      boundsA.bottom > boundsB.top
    );
  }

  private resolveCollision(bodyA: PhysicsBody, bodyB: PhysicsBody): void {
    const boundsA = bodyA.getBounds();
    const boundsB = bodyB.getBounds();

    // Find minimum overlap
    const overlapLeft = boundsB.right - boundsA.left;
    const overlapRight = boundsA.right - boundsB.left;
    const overlapTop = boundsB.bottom - boundsA.top;
    const overlapBottom = boundsA.bottom - boundsB.top;

    const minHorizontal = Math.min(overlapLeft, overlapRight);
    const minVertical = Math.min(overlapTop, overlapBottom);

    // Separate bodies and apply bounce
    const elasticity = 0.4; // 40% bounce

    if (minHorizontal < minVertical) {
      // Horizontal collision
      const separationDistance = minHorizontal + 0.5;
      if (overlapLeft < overlapRight) {
        // A is to the left
        bodyA.position.x -= separationDistance / 2;
        bodyB.position.x += separationDistance / 2;
      } else {
        // A is to the right
        bodyA.position.x += separationDistance / 2;
        bodyB.position.x -= separationDistance / 2;
      }

      // Exchange velocity in X direction with elasticity
      const tempVx = bodyA.velocity.x * (1 - elasticity);
      bodyA.velocity.x = bodyB.velocity.x * (1 - elasticity);
      bodyB.velocity.x = tempVx;
    } else {
      // Vertical collision
      const separationDistance = minVertical + 0.5;
      if (overlapTop < overlapBottom) {
        // A is on top
        bodyA.position.y -= separationDistance / 2;
        bodyB.position.y += separationDistance / 2;
      } else {
        // A is on bottom
        bodyA.position.y += separationDistance / 2;
        bodyB.position.y -= separationDistance / 2;
      }

      // Exchange velocity in Y direction with elasticity
      const tempVy = bodyA.velocity.y * (1 - elasticity);
      bodyA.velocity.y = bodyB.velocity.y * (1 - elasticity);
      bodyB.velocity.y = tempVy;
    }
  }

  private applyBoundaryConstraints(body: PhysicsBody): void {
    const bounds = body.getBounds();
    const elasticity = 0.4;
    const padding = 5;

    // Right boundary
    if (bounds.right > window.innerWidth - padding) {
      body.position.x = window.innerWidth - bounds.width - padding;
      body.velocity.x *= -elasticity;
    }

    // Left boundary
    if (bounds.left < padding) {
      body.position.x = padding;
      body.velocity.x *= -elasticity;
    }

    // Bottom boundary
    if (bounds.bottom > window.innerHeight - padding) {
      body.position.y = window.innerHeight - bounds.height - padding;
      body.velocity.y *= -elasticity;
    }

    // Top boundary
    if (bounds.top < padding) {
      body.position.y = padding;
      body.velocity.y *= -elasticity;
    }
  }
}

// Global singleton
let instance: PhysicsEngine | null = null;

export function getPhysicsEngine(): PhysicsEngine {
  if (!instance) {
    instance = new PhysicsEngine();
  }
  return instance;
}
