export default function ProductPage() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white py-20">
      
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full blur-[160px] animate-color-shift animate-glow" />
        <div className="absolute top-1/4 -right-48 h-[500px] w-[500px] rounded-full blur-[160px] animate-color-shift-2 animate-float" />
        <div className="absolute -bottom-56 left-1/3 h-[700px] w-[700px] rounded-full blur-[200px] animate-color-shift-3 animate-glow" />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="text-red-600">Product</span> Overview
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl">
          Discover how Ryze AI transforms your ad campaigns with intelligent automation and optimization.
        </p>
      </div>
    </section>
  )
}

