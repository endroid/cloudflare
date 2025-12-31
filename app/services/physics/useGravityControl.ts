import { useEffect } from 'react';
import { getPhysicsEngine } from './PhysicsEngine';
import { Vector2 } from './Vector2';

const GRAVITY_SPEED = 0.1; // Smooth transition speed for gravity direction

export function useGravityControl(): void {
  useEffect(() => {
    let currentGravity = new Vector2(0, 1);
    let targetGravity = new Vector2(0, 1);
    let animationFrameId: number | null = null;

    const handleKeyDown = (event: KeyboardEvent): void => {
      switch (event.key.toLowerCase()) {
        case 'arrowup':
        case 'w':
          targetGravity = new Vector2(0, -1);
          event.preventDefault();
          break;
        case 'arrowdown':
        case 's':
          targetGravity = new Vector2(0, 1);
          event.preventDefault();
          break;
        case 'arrowleft':
        case 'a':
          targetGravity = new Vector2(-1, 0);
          event.preventDefault();
          break;
        case 'arrowright':
        case 'd':
          targetGravity = new Vector2(1, 0);
          event.preventDefault();
          break;
      }
    };

    const updateGravity = (): void => {
      // Smoothly transition gravity direction
      currentGravity.x += (targetGravity.x - currentGravity.x) * GRAVITY_SPEED;
      currentGravity.y += (targetGravity.y - currentGravity.y) * GRAVITY_SPEED;

      const engine = getPhysicsEngine();
      engine.setGravityDirection(currentGravity);

      // Continue animating if we haven't reached target
      const diff = currentGravity.subtract(targetGravity).magnitude();
      if (diff > 0.01) {
        animationFrameId = requestAnimationFrame(updateGravity);
      }
    };

    // Trigger initial gravity update loop
    animationFrameId = requestAnimationFrame(updateGravity);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
}
