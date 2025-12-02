import { Link } from 'react-router-dom'

// Vintage-modern barber homepage
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#0a2230] text-white">
      {/* Sticky Navbar */}
      <header className="w-full sticky top-0 z-50 bg-black/60 backdrop-filter backdrop-blur-md border-b border-[#333]">
        <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#C9A66B] flex items-center justify-center text-black font-bold">C</div>
            <span className="text-lg font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Chiip’s Barbers</span>
          </div>
          <ul className="hidden md:flex space-x-6 text-sm font-semibold text-[#F3EDE2]">
            <li><Link to="/services" className="hover:text-[#C9A66B]">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-[#C9A66B]">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-[#C9A66B]">Booking</Link></li>
            <li><Link to="/about" className="hover:text-[#C9A66B]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#C9A66B]">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[62vh] flex items-center justify-center">
        {/* barber pole stripes */}
        <div aria-label="barber-pole" className="absolute left-0 top-0 w-40 h-full bg-gradient-to-b from-[#e6e6e6] to-[#e6e6e6]" style={{ clipPath: 'polygon(0 0, 75% 0, 75% 25%, 0 25%, 0 0)' }} />
        <div className="absolute left-6 top-10 w-8 h-60 bg-red-500 opacity-60 mix-blend-multiply" />
        <div className="absolute left-0 right-0 bottom-0 top-0 bg-gradient-to-br from-black/60 to-transparent" />
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-[#F3EDE2] mb-4" style={{ textShadow: '0 2px 0 rgba(0,0,0,.4)' }}>
            Traditional Barbering. Modern Style.
          </h2>
          <p className="text-[#F3EDE2] text-lg md:text-xl mb-6" style={{ maxWidth: '42ch', marginInline: 'auto' }}>
            Classic cuts, sharp shaves, and authentic craftsmanship.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/booking" className="bg-[#C9A66B] text-black font-semibold py-3 px-5 rounded shadow hover:bg-[#b58949]">Book Appointment</Link>
            <Link to="/services" className="border border-[#F3EDE2] text-[#F3EDE2] font-semibold py-3 px-5 rounded hover:bg-white/5">View Services</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gradient-to-br from-[#141414] via-[#1e1e1e] to-[#0b0b0b] text-[#F3EDE2] py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-72 bg-black rounded-lg shadow-inner overflow-hidden">
            {/* simple vintage photo placeholder */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%22360%22><rect width=%22640%22 height=%22360%22 fill=%22%23999999%22 opacity=%220.15%22/><circle cx=%22320%22 cy=%20200%22 r=%22140%22 fill=%22%23ffffff%22 opacity=%0.15/></svg>')] bg-cover" />
          </div>
          <div>
            <span className="inline-block mb-2 px-3 py-1 bg-[#8B1E23] text-white text-xs font-semibold" style={{ borderRadius: 6 }}>Est. 1989</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-3" style={{ fontWeight: 700, letterSpacing: '.5px' }}>Crafting sharp looks since 1989</h3>
            <p className="text-sm text-[#F3EDE2] leading-relaxed mb-4">
              We’ve built a culture around true craftsmanship, a warm community, and a timeless approach to grooming. Our barbers blend traditional techniques with modern precision for every haircut, shave, and beard trim.
            </p>
            <Link to="/about" className="text-[#C9A66B] font-semibold">Read More</Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h4 className="text-2xl md:text-3xl font-serif mb-6 text-[#F3EDE2]">Featured Services</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Haircuts', desc: 'Traditional cuts and modern silhouettes.', color: '#8B1E23' },
              { title: 'Beard Trims', desc: 'Precise shaping and conditioning.', color: '#0A2240' },
              { title: 'Hot Towel Shave', desc: 'Classic straight-razor finish.', color: '#C9A66B' },
              { title: 'Skin Fade', desc: 'Seamless blends, sharp lines.', color: '#1A1A1A' },
              { title: 'Grooming Packages', desc: 'Full-service grooming experiences.', color: '#8B1E23' },
              { title: 'Kids Cuts', desc: 'Gentle, fun, kid-friendly styles.', color: '#0A2240' }
            ].slice(0,3).map((s, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-5 flex flex-col">
                <div className="h-12 w-12 rounded-full mb-3" style={{ background: s.color, opacity: .9 }} />
                <h5 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>{s.title}</h5>
                <p className="text-sm text-[#F3EDE2] mb-4">{s.desc}</p>
                <Link to="/services" className="mt-auto text-[#C9A66B] font-semibold">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h4 className="text-2xl md:text-3xl font-serif mb-4">Gallery</h4>
          <div className="flex space-x-4 overflow-x-auto py-2 -mx-2">
            {Array.from({ length:6 }).map((_,i)=> (
              <div key={i} className="min-w-[180px] h-48 bg-gradient-to-br from-[#333] to-[#555] rounded-lg border border-[#444] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-sm text-white/80">Photo #{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 bg-gradient-to-r from-[#0a2230] to-[#8B1E23] text-white/90">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <span>Walk-ins Welcome • Bookings Recommended</span>
          <Link to="/booking" className="bg-[#F3EDE2] text-[#0a2230] font-semibold px-5 py-3 rounded">Book Now</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-[#141414] text-[#F3EDE2]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            'Real barbers. Real skill. – 5 stars',
            'Craftsmanship you can feel in every cut.',
            'Warm, welcoming, and expertly precise.'
          ].map((t, idx)=> (
            <blockquote key={idx} className="bg-white/5 border border-white/10 rounded p-4">
              <p className="text-sm">"{t}"</p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 text-[#F3EDE2] py-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-lg font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>Chiip’s Barbers</div>
            <p className="text-sm">Award-winning traditional barbering with a modern edge.</p>
          </div>
          <div>
            <div className="text-sm mb-2">Hours</div>
            <div className="text-xs">Mon–Sat: 9am–6pm</div>
            <div className="text-xs">Sun: Closed</div>
          </div>
          <div>
            <div className="text-sm mb-2">Contact</div>
            <div className="text-xs">Phone: (555) 012-3456</div>
            <div className="text-xs">Email: hello@chiipsbarbers.example</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
