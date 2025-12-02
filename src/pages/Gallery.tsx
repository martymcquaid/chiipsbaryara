import { Link } from 'react-router-dom'

export default function Gallery(){
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
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-serif mb-4">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="h-40 bg-gradient-to-br from-[#333] to-[#555] rounded-lg flex items-center justify-center">Photo #{i+1}</div>
          ))}
        </div>
      </main>
    </div>
  )
}
