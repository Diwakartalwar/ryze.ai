import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          Ryze<span className="text-red-600">AI</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/product" className="text-gray-600 hover:text-black">
            Product
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-black">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-black">
            Blog
          </Link>
          <Link href="/case-studies" className="text-gray-600 hover:text-black">
            Case Studies
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black">
            About
          </Link>
          <Link href="/community" className="text-gray-600 hover:text-black">
            Community
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/get-started"
          className="bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}
