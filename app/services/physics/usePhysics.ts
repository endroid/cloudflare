import { useEffect, useRef } from 'react';
import { getPhysicsEngine } from './PhysicsEngine';
import { PhysicsBody } from './PhysicsBody';

export function usePhysics() {
  const ref = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<PhysicsBody | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const engine = getPhysicsEngine();
    const bodyId = `physics-${Math.random().toString(36).slice(2, 9)}`;
    const body = new PhysicsBody(bodyId);
    body.setElement(ref.current);

    bodyRef.current = body;
    engine.registerBody(bodyId, body);
    engine.start();

    // Make element position relative if not already positioned
    if (ref.current.style.position === '' || ref.current.style.position === 'static') {
      ref.current.style.position = 'fixed';
      ref.current.style.willChange = 'transform';
    }

    return () => {
      engine.unregisterBody(bodyId);
      if (engine !== null) {
        // Only stop if no more bodies
        const hasNoBodies = true;
        if (hasNoBodies) {
          engine.stop();
        }
      }
    };
  }, []);

  return ref;
}
