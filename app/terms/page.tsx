export const metadata = { title: 'Terms of Service - MindPoppy' };

export default function Terms() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{fontFamily:'Caveat, cursive', color:'var(--gold)'}}>Terms of Service</h1>
        <p className="mb-8 text-sm" style={{color:'var(--text-muted)'}}>Last updated: April 6, 2025</p>
        
        <div className="space-y-8 leading-relaxed" style={{color:'var(--text-muted)'}}>
          <section>
            <h2 className="text-xl font-bold mb-3 text-white">1. Acceptance of Terms</h2>
            <p>By downloading, installing, or using MindPoppy, you agree to be bound by these Terms of Service. If you do not agree, do not use the application.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">2. Description of Service</h2>
            <p>MindPoppy is an idea-capture mobile application that allows users to create, organize, and manage ideas as visual balloons. The service includes personal balloon management, group brainstorming features, and optional premium subscriptions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">3. User Accounts</h2>
            <p>You must create an account to use MindPoppy. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">4. User Content</h2>
            <p>You retain ownership of the content you create in MindPoppy. By using the service, you grant us a limited license to store, process, and display your content solely for the purpose of providing the service. Group balloon content is stored anonymously and cannot be attributed to individual users.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">5. Acceptable Use</h2>
            <p>You agree not to use MindPoppy to post illegal, harmful, or offensive content, harass or harm other users, attempt to access other users' data, reverse engineer or modify the application, or use the service for any unauthorized commercial purpose.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">6. Subscriptions & Payments</h2>
            <p>MindPoppy offers free and premium (Pro) tiers. Pro subscriptions are billed through Apple App Store. Prices are displayed in the app before purchase. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period. Refunds are handled according to Apple's refund policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">7. Termination</h2>
            <p>We may suspend or terminate your account if you violate these terms. You may delete your account at any time through the app settings. Upon termination, your personal data will be deleted from our servers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">8. Disclaimer of Warranties</h2>
            <p>MindPoppy is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or secure at all times.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, MindPoppy shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">10. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-white">11. Contact</h2>
            <p>For questions about these terms, contact us at support@mindpoppy.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
