import React, { useCallback, useEffect, useRef, useState } from "react";
import { employees, Employee } from "../data/organogramData";
import { X, Mail, Phone, Users } from "lucide-react";

/* ─────────────────────────────────────────────
   Layout helpers
───────────────────────────────────────────── */
interface NodePos {
  emp: Employee;
  x: number;
  y: number;
  radius: number; // ring level (0 = centre)
}

function buildLayout(containerW: number, containerH: number): NodePos[] {
  const cx = containerW / 2;
  const cy = containerH / 2;

  // Build adjacency: managerId → children
  const childrenOf = new Map<string | null, Employee[]>();
  employees.forEach((e) => {
    const key = e.managerId ?? null;
    if (!childrenOf.has(key)) childrenOf.set(key, []);
    childrenOf.get(key)!.push(e);
  });

  const positions: NodePos[] = [];

  // Root (CEO) at centre
  const roots = childrenOf.get(null) ?? [];
  const root = roots[0];
  if (!root) return [];
  positions.push({ emp: root, x: cx, y: cy, radius: 0 });

  // BFS outward
  const ringGap = Math.min(containerW, containerH) * 0.22;
  const queue: { emp: Employee; ring: number }[] = [{ emp: root, ring: 1 }];

  while (queue.length > 0) {
    const { emp, ring } = queue.shift()!;
    const children = childrenOf.get(emp.id) ?? [];
    if (!children.length) continue;

    const angleStep = (2 * Math.PI) / children.length;
    // Offset ring 1 slightly so it doesn't all bunch at 0°
    const angleOffset = ring === 1 ? -Math.PI / 2 : -Math.PI / 2;

    children.forEach((child, i) => {
      const angle = angleOffset + i * angleStep;
      const r = ring * ringGap;
      positions.push({
        emp: child,
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
        radius: ring,
      });
      queue.push({ emp: child, ring: ring + 1 });
    });
  }

  return positions;
}

/* ─────────────────────────────────────────────
   Detail panel
───────────────────────────────────────────── */
function DetailPanel({ emp, onClose }: { emp: Employee; onClose: () => void }) {
  return (
    <div
      className="absolute right-4 top-4 z-30 w-72 rounded-2xl border border-border bg-card shadow-premium-lg p-6 animate-fade-in"
      style={{ maxHeight: "calc(100% - 2rem)", overflowY: "auto" }}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close"
      >
        <X size={14} />
      </button>

      {/* Avatar */}
      <div className="flex items-center gap-3 mb-4">
        {emp.photo ? (
          <img
            src={emp.photo}
            alt={emp.name}
            className="w-14 h-14 rounded-full object-cover object-top border-2 border-gold/40"
          />
        ) : (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold border-2 border-gold/40"
            style={{ background: "rgba(198,161,91,0.12)", color: "#C6A15B", fontFamily: "'Manrope', sans-serif" }}
          >
            {emp.name[0]}
          </div>
        )}
        <div>
          <p className="font-bold text-foreground text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {emp.name}
          </p>
          <p className="text-xs text-gold">{emp.role}</p>
          <p className="text-[10px] text-muted-foreground">{emp.department}</p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed mb-4">{emp.description}</p>

      {/* Contact */}
      {(emp.email || emp.phone) && (
        <div className="mb-4 space-y-1.5">
          {emp.email && (
            <a
              href={`mailto:${emp.email}`}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors"
            >
              <Mail size={11} /> {emp.email}
            </a>
          )}
          {emp.phone && (
            <a
              href={`tel:${emp.phone}`}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors"
            >
              <Phone size={11} /> {emp.phone}
            </a>
          )}
        </div>
      )}

      {/* Responsibilities */}
      {emp.responsibilities && emp.responsibilities.length > 0 && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-2 flex items-center gap-1.5">
            <Users size={10} /> Responsibilities
          </p>
          <ul className="space-y-1">
            {emp.responsibilities.map((r) => (
              <li key={r} className="text-xs text-muted-foreground flex items-start gap-1.5">
                <span className="text-gold mt-0.5">·</span> {r}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main graph
───────────────────────────────────────────── */
const NODE_R = 32; // px radius of each circle node

export default function OrganogramGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 900, h: 600 });
  const [positions, setPositions] = useState<NodePos[]>([]);
  const [selected, setSelected] = useState<Employee | null>(null);
  const [visible, setVisible] = useState(false);

  // Pan & Zoom
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const dragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  // Measure container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) setDims({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Rebuild layout when dimensions change
  useEffect(() => {
    setPositions(buildLayout(dims.w, dims.h));
    // Trigger entrance animation
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [dims]);

  // ─── Drag to pan ────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
  }, []);

  const onMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  // ─── Scroll to zoom ──────────────────────────
  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.max(0.4, Math.min(2.5, z - e.deltaY * 0.001)));
  }, []);

  // ─── Touch to pan ────────────────────────────
  const lastTouch = useRef({ x: 0, y: 0 });
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    lastTouch.current = { x: t.clientX, y: t.clientY };
  }, []);
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const t = e.touches[0];
    const dx = t.clientX - lastTouch.current.x;
    const dy = t.clientY - lastTouch.current.y;
    lastTouch.current = { x: t.clientX, y: t.clientY };
    setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
  }, []);

  // Position lookup map
  const posMap = new Map(positions.map((p) => [p.emp.id, p]));

  return (
    <div className="relative w-full h-full select-none" ref={containerRef}>
      {/* Zoom controls */}
      <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-1.5">
        <button
          onClick={() => setZoom((z) => Math.min(2.5, z + 0.15))}
          className="w-8 h-8 rounded-lg border border-border bg-card text-foreground hover:border-gold/40 hover:text-gold transition-colors text-sm font-bold flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(0.4, z - 0.15))}
          className="w-8 h-8 rounded-lg border border-border bg-card text-foreground hover:border-gold/40 hover:text-gold transition-colors text-sm font-bold flex items-center justify-center"
        >
          −
        </button>
        <button
          onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
          className="w-8 h-8 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors text-[10px] flex items-center justify-center"
          title="Reset"
        >
          ⌖
        </button>
      </div>

      {/* Hint */}
      <p className="absolute bottom-4 right-4 z-20 text-[10px] text-muted-foreground pointer-events-none">
        Scroll to zoom · Drag to pan · Click a node for details
      </p>

      {/* SVG Canvas */}
      <svg
        width={dims.w}
        height={dims.h}
        className="cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
        style={{ touchAction: "none" }}
      >
        <g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}>
          {/* ── Connector lines ── */}
          {positions.map(({ emp }) => {
            if (!emp.managerId) return null;
            const from = posMap.get(emp.managerId);
            const to = posMap.get(emp.id);
            if (!from || !to) return null;
            return (
              <line
                key={`line-${emp.id}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(198,161,91,0.25)"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.8s ease 0.3s",
                }}
              />
            );
          })}

          {/* ── Nodes ── */}
          {positions.map(({ emp, x, y, radius }, i) => {
            const isSelected = selected?.id === emp.id;
            const isRoot = radius === 0;
            const nodeR = isRoot ? NODE_R + 8 : NODE_R;
            const delay = 0.1 + i * 0.07;

            return (
              <g
                key={emp.id}
                transform={`translate(${x},${y})`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(isSelected ? null : emp);
                }}
                className="cursor-pointer"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? `translate(${x}px,${y}px) scale(1)`
                    : `translate(${x}px,${y}px) scale(0.4)`,
                  transition: `opacity 0.5s ease ${delay}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
                }}
              >
                {/* Outer glow ring on select */}
                {isSelected && (
                  <circle
                    r={nodeR + 8}
                    fill="none"
                    stroke="rgba(198,161,91,0.4)"
                    strokeWidth={2}
                    className="animate-pulse"
                  />
                )}

                {/* Shadow circle */}
                <circle r={nodeR + 2} fill="rgba(0,0,0,0.25)" cy={3} />

                {/* Main circle */}
                <circle
                  r={nodeR}
                  fill={isRoot ? "rgba(198,161,91,0.18)" : "hsl(var(--card))"}
                  stroke={isSelected ? "#C6A15B" : isRoot ? "rgba(198,161,91,0.7)" : "rgba(198,161,91,0.25)"}
                  strokeWidth={isRoot ? 2 : 1.5}
                />

                {/* Photo or initial */}
                {emp.photo ? (
                  <image
                    href={emp.photo}
                    x={-nodeR + 3}
                    y={-nodeR + 3}
                    width={(nodeR - 3) * 2}
                    height={(nodeR - 3) * 2}
                    clipPath={`url(#clip-${emp.id})`}
                    preserveAspectRatio="xMidYMid slice"
                  />
                ) : (
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={isRoot ? 20 : 16}
                    fontWeight="700"
                    fill="#C6A15B"
                    fontFamily="'Manrope', sans-serif"
                  >
                    {emp.name[0]}
                  </text>
                )}

                {/* Clip path for photo */}
                <defs>
                  <clipPath id={`clip-${emp.id}`}>
                    <circle r={nodeR - 3} />
                  </clipPath>
                </defs>

                {/* Name label */}
                <text
                  y={nodeR + 14}
                  textAnchor="middle"
                  fontSize={isRoot ? 11 : 9.5}
                  fontWeight={isRoot ? "700" : "600"}
                  fill={isRoot ? "#C6A15B" : "hsl(var(--foreground))"}
                  fontFamily="'Space Grotesk', sans-serif"
                >
                  {emp.name}
                </text>

                {/* Role label */}
                <text
                  y={nodeR + 26}
                  textAnchor="middle"
                  fontSize={8}
                  fill="hsl(var(--muted-foreground))"
                  fontFamily="'Inter', sans-serif"
                >
                  {emp.role.length > 22 ? emp.role.slice(0, 20) + "…" : emp.role}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Detail panel */}
      {selected && (
        <DetailPanel emp={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
