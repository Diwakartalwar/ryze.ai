export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Ryze<span className="text-red-600">AI</span>
          </h3>
          <p className="mt-4 text-sm">
            AI that audits, fixes, and scales your ad campaigns automatically.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/product" className="hover:text-white">Overview</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/community" className="hover:text-white">Community</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-sm">
        © {new Date().getFullYear()} Reaze AI. All rights reserved.
      </div>
    </footer>
  );
}
