export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-900 to-canvas py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Welcome to <span className="text-primary">Autopro</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your complete automotive ecosystem - Parts, Services & Vehicle History
          </p>
          
          {/* Search Bar Placeholder */}
          <div className="max-w-2xl mx-auto bg-surface-1 rounded-lg p-4 border border-primary/20">
            <div className="text-gray-400">
              🔍 Search by VIN, Part Number, or Vehicle Model...
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-surface-1 rounded-lg p-6 border border-surface-2 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Compatible Parts
            </h3>
            <p className="text-gray-400">
              Find parts that perfectly match your vehicle using our advanced compatibility engine
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-surface-1 rounded-lg p-6 border border-surface-2 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Book Services
            </h3>
            <p className="text-gray-400">
              Connect with trusted mechanics and book appointments instantly
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-surface-1 rounded-lg p-6 border border-surface-2 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Vehicle History
            </h3>
            <p className="text-gray-400">
              Track maintenance, repairs, and service history for all your vehicles
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-surface-1 border-t border-surface-2 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2026 Autopro. Built for Algeria & Nigeria.</p>
        </div>
      </footer>
    </main>
  );
}
