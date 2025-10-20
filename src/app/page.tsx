"use client";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Yellow background (signature look) */}
      <section className="px-4 py-20" style={{ backgroundColor: 'var(--brand-yellow)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 uppercase tracking-wide" style={{ color: 'var(--brand-dark-burgundy)' }}>
            DesignOnCue
          </h1>
          <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--brand-dark-burgundy)' }}>
            Your on-call web design partner.
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--brand-dark-burgundy)' }}>
            We plan, design, and build websites in <strong>WordPress, Webflow, and Framer</strong>—with bold type, warm colors, and kinetic moments that make people <em>feel</em> your brand.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-4 font-bold uppercase transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--brand-dark-burgundy)',
                color: 'var(--brand-yellow)',
                borderRadius: '3px'
              }}
            >
              Start a project
            </button>
            <button
              className="px-8 py-4 font-semibold uppercase transition-all"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--brand-orange)',
                border: '2px solid var(--brand-orange)',
                borderRadius: '3px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-orange)';
                e.currentTarget.style.color = 'var(--brand-yellow)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--brand-orange)';
              }}
            >
              See work
            </button>
          </div>
        </div>
      </section>

      {/* Proof of Fit - Terracotta background */}
      <section className="px-4 py-16" style={{ backgroundColor: 'var(--brand-burgundy)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed font-medium" style={{ color: 'var(--brand-yellow)' }}>
            Built for founders, marketers, and teams who need <strong>consistent creative output</strong>—without babysitting freelancers or wrangling endless bids.
          </p>
        </div>
      </section>

      {/* Why DesignOnCue - White background */}
      <section className="px-4 py-20" style={{ backgroundColor: 'var(--pure-white)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-wide" style={{ color: 'var(--brand-dark-burgundy)' }}>
            Why DesignOnCue
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>Dedicated, not scattered</h3>
                <p style={{ color: 'var(--brand-dark-burgundy)' }}>One point team that learns your brand, builds your site, and ships—again and again.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>A clear request → a fast result</h3>
                <p style={{ color: 'var(--brand-dark-burgundy)' }}>Drop tasks into your <strong>design queue</strong> with a tight <strong>intake brief</strong>; we turn them into polished pages, sections, and assets with quick iterations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>Human-crafted, AI-accelerated</h3>
                <p style={{ color: 'var(--brand-dark-burgundy)' }}>We use AI to speed exploration and QA—your brand voice and visuals stay unmistakably human.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>Platform-native builds</h3>
                <p style={{ color: 'var(--brand-dark-burgundy)' }}>We design <strong>and</strong> implement directly in <strong>WordPress, Webflow, or Framer</strong>. No hand-off purgatory. No lost intent.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>Creative ops you can count on</h3>
                <p style={{ color: 'var(--brand-dark-burgundy)' }}>Structured workflow, versioned assets, and measurable progress—so your roadmap keeps moving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do - Yellow background */}
      <section className="px-4 py-20" style={{ backgroundColor: 'var(--brand-yellow)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-wide" style={{ color: 'var(--brand-dark-burgundy)' }}>
            What we do (website-first)
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--brand-dark-burgundy)' }}>Website Design & Build <span style={{ color: 'var(--brand-orange)' }}>(WordPress / Webflow / Framer)</span></h3>
              <p className="mb-4" style={{ color: 'var(--brand-dark-burgundy)' }}>Information architecture, wireframes, high-fidelity design, platform-native build, QA, and launch support.</p>
              <p className="italic" style={{ color: 'var(--brand-burgundy)' }}>Extras as needed: content migration, performance & accessibility checks, SEO basics, analytics setup.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--brand-dark-burgundy)' }}>Brand & Visual System Refresh</h3>
              <p style={{ color: 'var(--brand-dark-burgundy)' }}>Logo refinement, typography & color system, component library, motion language (kinetic type, section transitions).</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--brand-dark-burgundy)' }}>Conversion & Growth Assets</h3>
              <p style={{ color: 'var(--brand-dark-burgundy)' }}>Landing pages, pricing pages, sales decks, socials, email graphics—everything around the site that drives outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - White background */}
      <section className="px-4 py-20" style={{ backgroundColor: 'var(--pure-white)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-wide" style={{ color: 'var(--brand-dark-burgundy)' }}>
            How it works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4" style={{ backgroundColor: 'var(--brand-orange)', color: 'var(--brand-yellow)' }}>1</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>Kickoff & Brand Profile</h3>
              <p className="text-sm" style={{ color: 'var(--brand-dark-burgundy)' }}>We align on goals, audience, tone, and visual anchors (warm colors, bold type, motion).</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4" style={{ backgroundColor: 'var(--brand-orange)', color: 'var(--brand-yellow)' }}>2</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>Design Queue + Intake</h3>
              <p className="text-sm" style={{ color: 'var(--brand-dark-burgundy)' }}>You submit requests with priorities. We clarify scope fast and get to work.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4" style={{ backgroundColor: 'var(--brand-orange)', color: 'var(--brand-yellow)' }}>3</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>Build & Iterate</h3>
              <p className="text-sm" style={{ color: 'var(--brand-dark-burgundy)' }}>We design, implement in your chosen platform, and loop feedback in tight cycles.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4" style={{ backgroundColor: 'var(--brand-orange)', color: 'var(--brand-yellow)' }}>4</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--brand-dark-burgundy)' }}>Launch & Scale</h3>
              <p className="text-sm" style={{ color: 'var(--brand-dark-burgundy)' }}>We help deploy, monitor, and keep your queue moving—new pages, experiments, and optimizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tracks - Burgundy background */}
      <section className="px-4 py-20" style={{ backgroundColor: 'var(--brand-dark-burgundy)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-wide" style={{ color: 'var(--brand-yellow)' }}>
            Service Tracks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8" style={{ backgroundColor: 'var(--brand-dark-burgundy-light)', borderRadius: '8px' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--brand-yellow)' }}>Starter Studio</h3>
              <p style={{ color: 'var(--brand-yellow)' }}>A focused launchpad: single-page or lean multi-section site, platform-native build, rapid design sprints.</p>
            </div>
            <div className="p-8" style={{ backgroundColor: 'var(--brand-dark-burgundy-light)', borderRadius: '8px' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--brand-yellow)' }}>Growth Studio</h3>
              <p style={{ color: 'var(--brand-yellow)' }}>3–7 core pages, component library, motion/kinetic typography accents, SEO & analytics basics, post-launch iteration window.</p>
            </div>
            <div className="p-8" style={{ backgroundColor: 'var(--brand-dark-burgundy-light)', borderRadius: '8px' }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--brand-yellow)' }}>Super Studio</h3>
              <p style={{ color: 'var(--brand-yellow)' }}>Larger IA, advanced interactions, gated content or CMS collections, ongoing design queue for continuous improvements.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="italic" style={{ color: 'var(--brand-orange)' }}>Not sure where to start? We&apos;ll scope against your roadmap and recommend the right track.</p>
          </div>
        </div>
      </section>

      {/* Results - Yellow background */}
      <section className="px-4 py-16" style={{ backgroundColor: 'var(--brand-yellow)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 uppercase" style={{ color: 'var(--brand-dark-burgundy)' }}>Results</h2>
          <p className="text-xl mb-8" style={{ color: 'var(--brand-dark-burgundy)' }}>
            Websites that look sharp <em>and</em> ship fast—backed by a repeatable process.
          </p>
          <button
            className="px-8 py-3 uppercase font-semibold transition-all"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--brand-orange)',
              border: '2px solid var(--brand-orange)',
              borderRadius: '3px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-orange)';
              e.currentTarget.style.color = 'var(--brand-yellow)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--brand-orange)';
            }}
          >
            View case studies
          </button>
        </div>
      </section>

      {/* CTA - Terracotta background */}
      <section className="px-4 py-20" style={{ backgroundColor: 'var(--brand-burgundy)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-wide" style={{ color: 'var(--brand-yellow)' }}>
            Ready to put your website on a production schedule?
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--brand-yellow)' }}>
            Let&apos;s set up your design queue and get your first build moving.
          </p>
          <button
            className="px-8 py-4 font-bold text-lg uppercase transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--brand-dark-burgundy)',
              color: 'var(--brand-yellow)',
              borderRadius: '3px'
            }}
          >
            Start a project
          </button>
        </div>
      </section>
    </div>
  );
}
