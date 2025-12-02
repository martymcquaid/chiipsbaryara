import { Link } from 'react-router-dom'

export default function Booking(){
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
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-serif mb-4">Booking</h1>
        <p className="text-sm text-gray-300 mb-6">Use this placeholder booking form. Integrate with your booking backend later.</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 rounded bg-black/30 border border-white/20" placeholder="Your name" />
          <input className="p-3 rounded bg-black/30 border border-white/20" placeholder="Phone" />
          <input className="p-3 rounded bg-black/30 border border-white/20" placeholder="Email" />
          <select className="p-3 rounded bg-black/30 border border-white/20">
            <option>Service</option>
            <option>Haircut</option>
            <option>Beard Trim</option>
            <option>Shave</option>
          </select>
          <input className="p-3 rounded bg-black/30 border border-white/20" placeholder="Preferred date" />
          <button className="bg-[#C9A66B] text-black font-semibold py-2 px-4 rounded">Confirm Booking</button>
        </form>
      </main>
    </div>
  )
}
