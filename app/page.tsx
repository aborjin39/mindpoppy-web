export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5" style={{background:'rgba(10,14,26,0.85)'}}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎈</span>
            <span className="text-xl font-bold" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>mindpoppy</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm hidden sm:block hover:text-white transition" style={{color:'var(--text-muted)'}}>Features</a>
            <a href="#how" className="text-sm hidden sm:block hover:text-white transition" style={{color:'var(--text-muted)'}}>How It Works</a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:scale-105"
              style={{background:'linear-gradient(135deg, #818cf8, #ec4899)'}}>
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{background:'radial-gradient(circle, #818cf8, transparent 70%)'}} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{background:'radial-gradient(circle, #ec4899, transparent 70%)'}} />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="text-7xl mb-6 animate-bounce" style={{animationDuration:'3s'}}>🎈</div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>
            Your mind is full of ideas
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed" style={{color:'var(--text-muted)'}}>
            Capture ideas as floating balloons. Repeated thoughts grow bigger. 
            Pop the rest. Simple, visual, satisfying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com" target="_blank" rel="noopener"
              className="px-8 py-4 rounded-2xl text-lg font-bold text-white transition hover:scale-105 hover:shadow-2xl"
              style={{background:'linear-gradient(135deg, #818cf8, #6366f1)'}}>
               Download for iOS
            </a>
            <a href="#features"
              className="px-8 py-4 rounded-2xl text-lg font-semibold transition hover:scale-105"
              style={{background:'var(--card)', border:'1px solid var(--card-border)', color:'var(--text)'}}>
              Learn More ↓
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>
            How your mind works, visualized
          </h2>
          <p className="text-center mb-16 max-w-xl mx-auto" style={{color:'var(--text-muted)'}}>
            Every idea becomes a balloon. The more it comes back, the bigger it gets.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '💡', title: 'Capture Ideas', desc: 'Type your thought and watch it float as a colorful balloon on your canvas.' },
              { emoji: '🔁', title: 'Repeat & Grow', desc: 'Same idea again? The balloon grows bigger. Important thoughts stand out naturally.' },
              { emoji: '💥', title: 'Pop & Release', desc: 'Done with a thought? Pop it with a satisfying explosion and confetti.' },
              { emoji: '👥', title: 'Group Brainstorm', desc: 'Create anonymous groups. Everyone adds ideas freely without judgment.' },
              { emoji: '🗳️', title: 'Vote Together', desc: 'Group members vote on balloons. Best ideas rise to the top.' },
              { emoji: '🌐', title: '13 Languages', desc: 'Available in Turkish, English, German, French, Spanish, and 8 more languages.' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border transition hover:scale-[1.02] hover:border-white/15"
                style={{background:'var(--card)', borderColor:'var(--card-border)'}}>
                <div className="text-3xl mb-3">{f.emoji}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--text-muted)'}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6" style={{background:'rgba(255,255,255,0.02)'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>
            Simple as 1, 2, pop!
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Add a balloon', desc: 'Type your idea. Choose a category. Watch it float.', emoji: '🎈' },
              { step: '2', title: 'Watch it grow', desc: 'Same thought comes back? Add it again. The balloon grows.', emoji: '🚀' },
              { step: '3', title: 'Pop or keep', desc: 'Done with a thought? Long press to pop. Satisfying. Therapeutic.', emoji: '🎉' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                  style={{background:'linear-gradient(135deg, #818cf8, #ec4899)', color:'#fff'}}>
                  {s.step}
                </div>
                <div className="text-4xl mb-2">{s.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm" style={{color:'var(--text-muted)'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">🎈</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>
            Ready to free your mind?
          </h2>
          <p className="text-lg mb-10" style={{color:'var(--text-muted)'}}>
            Download MindPoppy and start capturing your ideas as balloons.
          </p>
          <a href="https://apps.apple.com" target="_blank" rel="noopener"
            className="inline-block px-10 py-5 rounded-2xl text-xl font-bold text-white transition hover:scale-105 hover:shadow-2xl"
            style={{background:'linear-gradient(135deg, #818cf8, #ec4899)'}}>
             Download for iOS
          </a>
        </div>
      </section>
    </main>
  );
}
