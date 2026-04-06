export const metadata = { title: 'Privacy Policy - MindPoppy' };

export default function Privacy() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>Privacy Policy</h1>
        <p className="mb-8 text-sm" style={{color:'var(--text-muted)'}}>Last updated: April 6, 2025</p>
        
        <div className="space-y-8 leading-relaxed" style={{color:'var(--text-muted)'}}>
          <section>
            <h2 className="text-xl font-bold mb-3 text-white">1. Introduction</h2>
            <p>MindPoppy ("we", "our", "us") is a mobile application that helps users capture and organize their ideas as visual balloons. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">2. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>
            <p><strong className="text-white">Account Information:</strong> When you create an account, we collect your name, email address, and password (encrypted).</p>
            <p className="mt-2"><strong className="text-white">User Content:</strong> Ideas and thoughts you add as balloons, notes, group names, and categories.</p>
            <p className="mt-2"><strong className="text-white">Usage Data:</strong> App usage statistics, device type, operating system version, and language preference.</p>
            <p className="mt-2"><strong className="text-white">Group Data:</strong> When using group features, balloon content is stored anonymously — no user identity is linked to group balloons.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">3. How We Use Your Information</h2>
            <p>We use your information to provide and improve the MindPoppy service, sync your data across devices, process subscription payments, send optional reminders (with your permission), and provide customer support.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">4. Data Storage & Security</h2>
            <p>Your data is stored on Supabase (PostgreSQL) servers. All data is encrypted in transit (TLS/SSL) and at rest. We implement Row Level Security (RLS) to ensure users can only access their own personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">5. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <p className="mt-2"><strong className="text-white">Supabase</strong> — Database, authentication, and real-time sync</p>
            <p><strong className="text-white">RevenueCat</strong> — Subscription and payment management</p>
            <p><strong className="text-white">Apple App Store</strong> — App distribution and in-app purchases</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">6. Anonymity in Groups</h2>
            <p>Group balloons are completely anonymous. We use random tokens instead of user IDs for group content. Even group leaders cannot see who wrote which balloon. This anonymity is guaranteed by our database design.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">7. Your Rights</h2>
            <p>You have the right to access your personal data, request deletion of your account and all associated data, export your data, and opt out of optional communications. To exercise these rights, contact us at support@mindpoppy.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">8. Children's Privacy</h2>
            <p>MindPoppy is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">9. Data Retention</h2>
            <p>We retain your data as long as your account is active. Popped (deleted) balloons are permanently removed. When you delete your account, all personal data is removed from our servers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes through the app or by email.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <p className="mt-2"><strong className="text-white">Email:</strong> support@mindpoppy.com</p>
            <p><strong className="text-white">Website:</strong> https://mindpoppy.com/support</p>
          </section>
        </div>
      </div>
    </main>
  );
}
