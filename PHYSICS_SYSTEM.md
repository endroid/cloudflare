# Physics System

A complete physics engine for applying realistic physics to all UI elements on the page.

## Features

- **Gravity Control**: Use arrow keys or WASD to change gravity direction smoothly
- **Realistic Collisions**: Elements bounce off each other with 40% elasticity
- **Boundary Physics**: Elements bounce off page edges with elastic collisions
- **Air Resistance**: Smooth deceleration via drag coefficient
- **Fixed Timestep**: 60 FPS physics updates for consistency
- **Performance Optimized**: Uses CSS transforms for GPU acceleration

## Components

### Core Physics Engine

**`PhysicsEngine.ts`**
- Main physics simulation loop
- Gravity management
- Collision detection and resolution using AABB (axis-aligned bounding boxes)
- Boundary constraint handling
- Fixed 60 FPS physics updates with accumulator pattern

**`PhysicsBody.ts`**
- Represents a physics-enabled element
- Tracks position, velocity, acceleration, and mass
- Handles DOM synchronization via CSS transforms
- Provides bounds calculation for collision detection

**`Vector2.ts`**
- 2D vector math utilities
- Operations: add, subtract, scale, normalize, magnitude, dot product

### React Hooks

**`usePhysics()`**
- Wraps a DOM element to enable physics
- Automatically registers/unregisters with physics engine
- Returns ref to attach to element
- Sets `position: fixed` and `will-change: transform` for performance

**`useGravityControl()`**
- Listens to arrow keys (↑↓←→) and WASD
- Smoothly transitions gravity direction
- Updates physics engine with new gravity vector

### Module Exports

**`index.ts`**
- Centralized exports for all physics components

## Usage

### Basic Setup

1. **Enable gravity control in root component:**

```tsx
import { useGravityControl } from './services/physics';

export default function App() {
  useGravityControl();
  // ...
}
```

2. **Apply physics to elements:**

```tsx
import { usePhysics } from './services/physics';

export function PhysicsElement() {
  const ref = usePhysics();
  return <div ref={ref} className="w-16 h-16 bg-blue-500" />;
}
```

## Physics Behavior

### Gravity

- Default: 9.8 units/frame² downward
- Controlled by arrow keys for smooth direction changes
- Affects all physics bodies equally

### Collisions

- **Element-to-Element**: 
  - AABB collision detection
  - Separate overlapping bodies
  - Exchange momentum with 40% elasticity (inelastic)
  - Drag coefficient: 0.98 (2% air resistance per frame)

- **Boundary Collisions**:
  - Detect element position relative to viewport
  - 5px padding from edges
  - Bounce with 40% elasticity
  - Prevents elements from escaping viewport

### Motion

- Position updated via CSS `transform: translate()`
- GPU-accelerated for smooth rendering
- Fixed timestep ensures deterministic physics
- Accumulator pattern for variable frame rates

## Example: Physics Playground

See `/routes/physics.tsx` for a complete demo with 5 colored boxes that respond to gravity changes.

```
Controls:
↑ / W - Gravity up
↓ / S - Gravity down
← / A - Gravity left
→ / D - Gravity right
```

## Technical Details

### Fixed Timestep Physics

Uses accumulator pattern to ensure consistent physics updates regardless of frame rate:
- Physics runs at fixed 60 FPS (16.67ms steps)
- Render frame rate can vary
- Smoothly interpolates across frames

### Collision Resolution

Uses impulse-based resolution:
1. Detect overlapping AABBs
2. Calculate minimum separation distance
3. Push bodies apart by overlap amount
4. Exchange velocities with elasticity coefficient
5. Apply drag to reduce oscillation

### Performance Optimizations

- DOM updates via transform only (no layout recalculations)
- `will-change: transform` hint for browser
- Fixed positioning to avoid document flow
- Single global physics engine instance
- Efficient AABB collision checks (O(n²) but fast for small n)

## Limitations

- Only supports rectangular (AABB) collisions
- No rotation/angular momentum
- No friction between surfaces
- No continuous collision detection (fast-moving objects may tunnel)
- Linear mass model (all bodies have same gravity effect)

## Future Enhancements

- Rotational physics
- Friction and rolling resistance
- Continuous collision detection
- Different collision layers/groups
- Soft body physics
- Particle systems
