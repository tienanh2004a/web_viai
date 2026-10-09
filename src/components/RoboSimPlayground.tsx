import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Compass, Crosshair, Cpu, Award, Zap, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Terminal } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

export const RoboSimPlayground: React.FC = () => {
  const GRID_SIZE = 7;
  const [robotPos, setRobotPos] = useState<Position>({ x: 1, y: 1 });
  const [robotAngle, setRobotAngle] = useState<number>(90); // 0: Up, 90: Right, 180: Down, 270: Left
  const [score, setScore] = useState<number>(0);
  const [isRunningScript, setIsRunningScript] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([
    'RoboSim v2.6 Ready. Khởi động sa bàn Khu vực miền Bắc 2026.',
    'Vị trí ban đầu: [X: 1, Y: 1]. Cảm biến siêu âm: Hoạt động.',
  ]);

  // Obstacles and targets
  const obstacles: Position[] = [
    { x: 3, y: 1 },
    { x: 3, y: 2 },
    { x: 5, y: 4 },
    { x: 2, y: 4 },
    { x: 4, y: 5 },
  ];

  const [targets, setTargets] = useState<Position[]>([
    { x: 4, y: 2 },
    { x: 5, y: 3 },
    { x: 2, y: 5 },
    { x: 5, y: 5 },
  ]);

  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev.slice(-6), msg]);
  };

  const isObstacle = (x: number, y: number) => {
    return obstacles.some((o) => o.x === x && o.y === y);
  };

  const moveRobot = (dx: number, dy: number, newAngle: number) => {
    setRobotAngle(newAngle);
    const newX = robotPos.x + dx;
    const newY = robotPos.y + dy;

    if (newX < 0 || newX >= GRID_SIZE || newY < 0 || newY >= GRID_SIZE) {
      addLog(`[CẢNH BÁO] Chạm viền sa bàn! Tọa độ giữ nguyên [${robotPos.x}, ${robotPos.y}]`);
      return;
    }

    if (isObstacle(newX, newY)) {
      addLog(`[CẢM BIẾN] Phát hiện vật cản tại [${newX}, ${newY}]! Robot tự động phanh.`);
      return;
    }

    setRobotPos({ x: newX, y: newY });
    addLog(`Di chuyển tới [${newX}, ${newY}] thành công.`);

    // Check target collection
    const targetIdx = targets.findIndex((t) => t.x === newX && t.y === newY);
    if (targetIdx !== -1) {
      setScore((s) => s + 25);
      setTargets((prev) => prev.filter((_, idx) => idx !== targetIdx));
      addLog(`[ĐIỂM SỐ +25] Đã thu thập cờ mục tiêu tại [${newX}, ${newY}]!`);
    }
  };

  const resetArena = () => {
    setRobotPos({ x: 1, y: 1 });
    setRobotAngle(90);
    setScore(0);
    setTargets([
      { x: 4, y: 2 },
      { x: 5, y: 3 },
      { x: 2, y: 5 },
      { x: 5, y: 5 },
    ]);
    setLogs([
      'Sa bàn được đặt lại về trạng thái xuất phát.',
      'Sẵn sàng cho lượt thi thử tiếp theo!',
    ]);
  };

  // Run autonomous code demonstration
  const runAutoScript = async () => {
    if (isRunningScript) return;
    setIsRunningScript(true);
    resetArena();
    addLog('[AI AUTO-RUN] Đang thực thi chuỗi lệnh lập trình RoboSim...');

    const steps = [
      { dx: 1, dy: 0, angle: 90, msg: 'Tiến thẳng 1 ô (East)' },
      { dx: 0, dy: 1, angle: 180, msg: 'Rẽ phải 90°, tiến 1 ô (South)' },
      { dx: 1, dy: 0, angle: 90, msg: 'Quét cảm biến, tiến tới mục tiêu 1' },
      { dx: 1, dy: 0, angle: 90, msg: 'Đạt cờ 1! Tiến tiếp tránh vật cản' },
      { dx: 0, dy: 1, angle: 180, msg: 'Chuyển hướng về cờ mục tiêu 2' },
      { dx: 0, dy: 1, angle: 180, msg: 'Robot đạt cờ 2 hoàn hảo!' },
    ];

    let current = { x: 1, y: 1 };
    for (let i = 0; i < steps.length; i++) {
      await new Promise((r) => setTimeout(r, 700));
      const step = steps[i];
      current = { x: current.x + step.dx, y: current.y + step.dy };
      setRobotAngle(step.angle);
      setRobotPos({ ...current });
      addLog(`[BƯỚC ${i + 1}] ${step.msg}`);
      // Check target
      setTargets((prev) => {
        const remaining = prev.filter((t) => !(t.x === current.x && t.y === current.y));
        if (remaining.length < prev.length) {
          setScore((s) => s + 25);
        }
        return remaining;
      });
    }

    addLog('[HOÀN THÀNH] Chuỗi lệnh tự hành kết thúc xuất sắc!');
    setIsRunningScript(false);
  };

  return (
    <section id="robosim" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-y border-gray-200/80">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 mb-4">
            <Zap className="h-4 w-4 text-orange-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-800">
              ĐỘC QUYỀN TẠI VIAI ACADEMY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0c0a08] mb-4">
            Trải Nghiệm Trực Quan Sa Bàn{' '}
            <span className="text-gradient-warm">RoboSim 3D</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600">
            Phần mềm mô phỏng bắt buộc của <strong className="text-orange-600">Cuộc thi Sáng tạo Robotics tại 3 tỉnh, Khu vực miền Bắc 2026</strong>. 
            Bạn có thể thử điều khiển chú robot ảo ngay dưới đây!
          </p>
        </div>

        {/* Playground Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf9f6] border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          {/* Left: Virtual Arena Board */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-3 px-1">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-700">
                <Compass className="h-4 w-4 text-orange-600" />
                <span>SA BÀN MÔ PHỎNG: 7x7 CHUẨN KHU VỰC MIỀN BẮC 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 font-medium">Điểm:</span>
                <span className="font-mono text-sm font-bold text-orange-700 bg-orange-100/70 border border-orange-200 px-2.5 py-0.5 rounded-lg">
                  {score} / 100 PTS
                </span>
              </div>
            </div>

            {/* Arena Grid */}
            <div className="relative w-full aspect-square max-w-[420px] bg-white border-2 border-gray-200 rounded-2xl p-2 grid grid-cols-7 grid-rows-7 gap-1 shadow-inner">
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                const x = index % GRID_SIZE;
                const y = Math.floor(index / GRID_SIZE);
                const isRobot = robotPos.x === x && robotPos.y === y;
                const isObs = isObstacle(x, y);
                const isTarget = targets.some((t) => t.x === x && t.y === y);

                return (
                  <div
                    key={`${x}-${y}`}
                    className={`relative rounded-md flex items-center justify-center transition-colors duration-200 ${
                      isObs
                        ? 'bg-red-50 border border-red-200 text-red-600'
                        : isTarget
                        ? 'bg-amber-50 border border-amber-300 text-amber-600 animate-pulse'
                        : 'bg-zinc-50 border border-zinc-100 hover:border-orange-200'
                    }`}
                  >
                    {/* Obstacle Icon */}
                    {isObs && <div className="text-[10px] font-mono font-bold text-red-500">OBST</div>}

                    {/* Target Flag */}
                    {isTarget && (
                      <div className="flex flex-col items-center">
                        <Award className="h-4 w-4 text-amber-500" />
                      </div>
                    )}

                    {/* Robot */}
                    {isRobot && (
                      <div
                        className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-600 flex items-center justify-center shadow-md shadow-orange-500/40 transition-transform duration-300"
                        style={{ transform: `rotate(${robotAngle - 90}deg)` }}
                      >
                        <ChevronRight className="h-5 w-5 text-white font-black" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs text-zinc-500 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-orange-600" />
                <span>Robot VIAI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-100 border border-amber-400" />
                <span>Cờ điểm (+25)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-red-100 border border-red-300" />
                <span>Vật cản</span>
              </div>
            </div>
          </div>

          {/* Right: Controller & Telemetry Log */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Telemetry Status Box */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                  <Cpu className="h-4 w-4 text-orange-600" />
                  <span>TELEMETRY ROBOT TRỰC TIẾP</span>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">ONLINE</span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="bg-[#faf9f6] p-2.5 rounded-xl border border-gray-200/80">
                  <span className="text-zinc-500 block text-[11px]">TỌA ĐỘ (X, Y)</span>
                  <span className="text-zinc-900 font-bold text-sm">
                    [{robotPos.x}, {robotPos.y}]
                  </span>
                </div>
                <div className="bg-[#faf9f6] p-2.5 rounded-xl border border-gray-200/80">
                  <span className="text-zinc-500 block text-[11px]">HƯỚNG ĐẦU ROBOT</span>
                  <span className="text-orange-600 font-bold text-sm">{robotAngle}°</span>
                </div>
              </div>
            </div>

            {/* D-Pad Controls */}
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 p-4 rounded-2xl">
              <span className="text-xs font-bold text-zinc-600 mb-2.5">BÀN ĐIỀU KHIỂN HƯỚNG</span>
              <div className="grid grid-cols-3 gap-2 w-44">
                <div />
                <button
                  onClick={() => moveRobot(0, -1, 0)}
                  disabled={isRunningScript}
                  aria-label="Tiến lên"
                  className="h-10 rounded-xl bg-gray-100 hover:bg-orange-600 hover:text-white active:scale-95 text-zinc-800 flex items-center justify-center transition-all disabled:opacity-40"
                >
                  <ChevronUp className="h-5 w-5" />
                </button>
                <div />

                <button
                  onClick={() => moveRobot(-1, 0, 270)}
                  disabled={isRunningScript}
                  aria-label="Rẽ trái"
                  className="h-10 rounded-xl bg-gray-100 hover:bg-orange-600 hover:text-white active:scale-95 text-zinc-800 flex items-center justify-center transition-all disabled:opacity-40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={resetArena}
                  disabled={isRunningScript}
                  title="Đặt lại vị trí"
                  className="h-10 rounded-xl bg-gray-50 hover:bg-gray-200 active:scale-95 text-zinc-500 flex items-center justify-center transition-all border border-gray-200"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => moveRobot(1, 0, 90)}
                  disabled={isRunningScript}
                  aria-label="Rẽ phải"
                  className="h-10 rounded-xl bg-gray-100 hover:bg-orange-600 hover:text-white active:scale-95 text-zinc-800 flex items-center justify-center transition-all disabled:opacity-40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div />
                <button
                  onClick={() => moveRobot(0, 1, 180)}
                  disabled={isRunningScript}
                  aria-label="Lùi lại"
                  className="h-10 rounded-xl bg-gray-100 hover:bg-orange-600 hover:text-white active:scale-95 text-zinc-800 flex items-center justify-center transition-all disabled:opacity-40"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 w-full mt-3">
                <button
                  onClick={runAutoScript}
                  disabled={isRunningScript}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-orange-600 hover:bg-orange-700 px-3 py-2.5 text-xs font-bold text-white active:scale-95 transition-all shadow-xs disabled:opacity-50"
                >
                  <Play className="h-3.5 w-3.5 fill-white" />
                  <span>{isRunningScript ? 'Đang chạy tự hành...' : 'Lập trình mẫu (AI Script)'}</span>
                </button>
              </div>
            </div>

            {/* Terminal Live Logs */}
            <div className="rounded-2xl border border-gray-200 bg-[#18181b] p-3 font-mono text-[11px] text-zinc-300 h-28 overflow-y-auto">
              <div className="flex items-center gap-1.5 text-zinc-400 border-b border-zinc-800 pb-1 mb-1.5">
                <Terminal className="h-3 w-3 text-orange-400" />
                <span>ROBOSIM LIVE CONSOLE</span>
              </div>
              <div className="space-y-1">
                {logs.map((log, i) => (
                  <p key={i} className="leading-tight text-zinc-300">
                    <span className="text-orange-400 mr-1">&gt;</span> {log}
                  </p>
                ))}
                <div ref={logsEndRef} />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs hover:border-orange-300 transition-all">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="h-9 w-9 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60 flex items-center justify-center">
                <Crosshair className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0c0a08] text-base">Độc quyền thi đấu 2026</h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              RoboSim là phần mềm bắt buộc tại Cuộc thi Sáng tạo Robotics tại 3 tỉnh, Khu vực miền Bắc 2026. VIAI Academy là đơn vị duy nhất đào tạo và cung cấp bản quyền.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs hover:border-purple-300 transition-all">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="h-9 w-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/60 flex items-center justify-center">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0c0a08] text-base">Tư duy thuật toán thực chiến</h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Trẻ được rèn luyện từ tư duy khối lệnh (Scratch) đến thuật toán xử lý cảm biến siêu âm, dò đường, tránh vật cản như kỹ sư nhí thực thụ.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0c0a08] text-base">Cam kết Vé vàng Chung kết</h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Gói VIAI8 cam kết bằng văn bản học viên vượt vòng loại vào Chung kết Miền Trung tại Nghệ An (13/09/2026), hoàn 100% học phí nếu không đạt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
