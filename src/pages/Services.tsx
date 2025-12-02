import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    { cat: 'Haircuts', items: ['Traditional Cut', 'Fade', 'Crew Cut', 'Scissor Cut'] },
    { cat: 'Beard Services', items: ['Beard Trim', 'Beard Shaping', 'Beard Conditioning'] },
    { cat: 'Shaves', items: ['Straight Razor Shave', 'Hot Towel Shave'] },
    { cat: 'Packages', items: ['The Gentleman’s Package', 'Deluxe Grooming Experience'] },
    { cat: 'Kids', items: ['Kids Cut'] },
  ]
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <header className="w-full sticky top-0 z-50 bg-black/60 backdrop-filter backdrop-blur-md border-b border-[#333]">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#C9A66B] flex items-center justify-center text-black font-bold">C</div>
            <span className="text-lg font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Chiip’s Barbers</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-semibold"></div>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif mb-6">Our Services</h1>
        {services.map((s, idx) => (
          <section key={idx} className="mb-6 p-4 border border-white/10 rounded bg-white/4">
            <h2 className="text-xl font-semibold mb-2">{s.cat}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {s.items.map((it, i) => (
                <div key={i} className="p-2 border border-white/10 rounded bg-black/20">{it}</div>
              ))}
            </div>
          </section>
        ))}
        <Link to="/booking" className="inline-block mt-4 bg-[#C9A66B] text-black font-semibold px-4 py-2 rounded">Book a Service</Link>
      </main>
    </div>
  )
}
