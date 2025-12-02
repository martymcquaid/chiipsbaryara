import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <header className="w-full sticky top-0 z-50 bg-black/60 backdrop-filter backdrop-blur-md border-b border-[#333]">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#C9A66B] flex items-center justify-center text-black font-bold">C</div>
            <span className="text-lg font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Chiip’s Barbers</span>
          </div>
          <div className="hidden md:block"></div>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <section>
          <span className="inline-block mb-2 px-3 py-1 bg-[#8B1E23] text-white text-xs font-semibold" style={{ borderRadius: 6 }}>Est. 1989</span>
          <h1 className="text-3xl md:text-4xl font-serif mt-2">About Chiip’s Barbers</h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-200">
            We stand for traditional craftsmanship and a welcoming, masculine environment. Our barbers celebrate the art of grooming with timeless techniques and modern precision.
          </p>
        </section>
        <section className="bg-white/5 rounded-lg p-4">
          <div className="h-40 bg-gradient-to-br from-[#333] to-[#555] rounded-md flex items-center justify-center text-sm text-white/80">Team photos and shop history placeholder</div>
        </section>
        <section className="md:col-span-2 bg-black/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold">Our Barbers</h3>
          <p className="text-sm text-gray-200">Profiles coming soon.</p>
        </section>
      </main>
    </div>
  )
}
