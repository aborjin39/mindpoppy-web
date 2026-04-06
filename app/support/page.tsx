export const metadata = { title: 'Support - MindPoppy' };

export default function Support() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>Support</h1>
        <p className="mb-12" style={{color:'var(--text-muted)'}}>We're here to help! Find answers to common questions or reach out to us.</p>
        
        {/* Contact */}
        <div className="p-8 rounded-2xl border mb-12" style={{background:'var(--card)', borderColor:'var(--card-border)'}}>
          <h2 className="text-2xl font-bold mb-4">📧 Contact Us</h2>
          <p className="mb-4" style={{color:'var(--text-muted)'}}>
            Have a question, bug report, or feature request? We'd love to hear from you.
          </p>
          <a href="mailto:support@mindpoppy.com" 
            className="inline-block px-6 py-3 rounded-xl font-semibold text-white transition hover:scale-105"
            style={{background:'linear-gradient(135deg, #818cf8, #6366f1)'}}>
            support@mindpoppy.com
          </a>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What is MindPoppy?', a: 'MindPoppy is an idea-capture app where your thoughts become floating balloons. Repeated ideas grow bigger, and you can pop the ones you\'re done with.' },
            { q: 'Is MindPoppy free?', a: 'Yes! The core features are free. MindPoppy Pro unlocks unlimited balloons, group creation, and more.' },
            { q: 'Are group balloons really anonymous?', a: 'Absolutely. Group balloons use random tokens instead of user IDs. Even group leaders cannot see who wrote which balloon.' },
            { q: 'How do I create a group?', a: 'Go to the Home screen, tap the + button, create your group with a name and category, then share the 6-digit invite code with friends.' },
            { q: 'Can I recover a popped balloon?', a: 'Yes! Popped balloons go to the trash. You can restore them or permanently delete them.' },
            { q: 'How do I change the app language?', a: 'Go to Settings and tap the Language option. MindPoppy supports 13 languages.' },
            { q: 'How do I cancel my subscription?', a: 'You can manage your subscription through your Apple ID settings. Go to Settings > Apple ID > Subscriptions on your iPhone.' },
            { q: 'How do I delete my account?', a: 'Go to Settings > tap your profile > scroll down to "Delete Account". This will permanently remove all your data.' },
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded-xl border" style={{background:'var(--card)', borderColor:'var(--card-border)'}}>
              <h3 className="font-bold mb-2">{faq.q}</h3>
              <p className="text-sm" style={{color:'var(--text-muted)'}}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
