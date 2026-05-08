// apps/admin/app/page.tsx
// Autopro 2.0 — Minimal Landing Page
// Phone-optimized, no dependencies

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-2xl shadow-lg">
            A
          </div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            Autopro
          </h1>
        </div>

        {/* Welcome Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Welcome back 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Your automotive ecosystem is loading...
          </p>
          
          {/* Quick Actions */}
          <div className="space-y-3">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors">
              🚗 My Garage
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-4 rounded-xl transition-colors">
              🔍 Find Parts
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-4 rounded-xl transition-colors">
              🛠️ Services
            </button>
          </div>
        </div>

        {/* Status */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Autopro 2.0 • Building on phone ✨
        </p>
      </div>
    </main>
  );
}
