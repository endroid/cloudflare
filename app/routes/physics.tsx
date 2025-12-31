import { usePhysics } from '../services/physics';

export const meta = () => [
  { title: 'Physics Playground' },
  { name: 'description', content: 'Interactive physics system with gravity control' },
];

export default function PhysicsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Physics Playground</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Use arrow keys or WASD to change gravity direction. Watch elements bounce and collide
          realistically.
        </p>
      </div>

      <div className="relative w-full h-96 border-2 border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
        <PhysicsElement color="bg-blue-500">Box 1</PhysicsElement>
        <PhysicsElement color="bg-red-500">Box 2</PhysicsElement>
        <PhysicsElement color="bg-green-500">Box 3</PhysicsElement>
        <PhysicsElement color="bg-yellow-500">Box 4</PhysicsElement>
        <PhysicsElement color="bg-purple-500">Box 5</PhysicsElement>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center text-gray-500 dark:text-gray-400">
          <span className="text-sm bg-white dark:bg-gray-950 px-4 py-2 rounded">
            Press arrow keys or WASD to control gravity
          </span>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Controls:</h2>
        <ul className="text-sm space-y-1">
          <li>↑ / W - Gravity up</li>
          <li>↓ / S - Gravity down</li>
          <li>← / A - Gravity left</li>
          <li>→ / D - Gravity right</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Features:</h2>
        <ul className="text-sm space-y-1">
          <li>✓ Realistic gravity simulation</li>
          <li>✓ Smooth gravity direction transitions</li>
          <li>✓ Elastic collisions between elements</li>
          <li>✓ Boundary bounce with 40% elasticity</li>
          <li>✓ Air resistance for natural movement</li>
          <li>✓ Fixed 60 FPS physics updates</li>
        </ul>
      </div>
    </div>
  );
}

function PhysicsElement({ color, children }: { color: string; children: React.ReactNode }) {
  const ref = usePhysics();

  return (
    <div
      ref={ref}
      className={`${color} w-16 h-16 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xs text-center p-1 cursor-grab active:cursor-grabbing`}
    >
      {children}
    </div>
  );
}
