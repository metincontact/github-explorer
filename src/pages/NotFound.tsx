import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-7 px-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[20rem] font-black text-white/[0.018] select-none leading-none tracking-tighter">
          404
        </span>
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-violet-800/[0.08] blur-[100px]" />

      <div className="relative text-center space-y-2">
        <h1 className="text-2xl font-bold text-white">Page not found</h1>
        <p className="text-slate-500 text-sm">This page doesn't exist or was moved.</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="relative flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
      >
        <ArrowLeft className="w-4 h-4" />
        Go home
      </button>
    </div>
  );
}

export default NotFound;
