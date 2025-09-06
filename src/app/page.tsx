export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            DesignOnCue
          </h1>
          <h2 className="text-2xl font-medium mb-8">
            Your on-call web design partner.
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We plan, design, and build websites in <strong>WordPress, Webflow, and Framer</strong>—with bold type, dark-mode aesthetics, and kinetic moments that make people <em>feel</em> your brand.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-full font-semibold transition-colors text-white hover:opacity-90" style={{ backgroundColor: '#FF13F0' }}>
              Start a project
            </button>
            <button className="border-2 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-colors" style={{ borderColor: '#FF13F0' }}>
              See work
            </button>
          </div>
        </div>
      </section>

      {/* Proof of Fit */}
      <section className="px-4 py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-slate-300 leading-relaxed">
            Built for founders, marketers, and teams who need <strong>consistent creative output</strong>—without babysitting freelancers or wrangling endless bids.
          </p>
        </div>
      </section>

      {/* Why DesignOnCue */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why DesignOnCue
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Dedicated, not scattered</h3>
                <p className="text-slate-300">One point team that learns your brand, builds your site, and ships—again and again.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">A clear request → a fast result</h3>
                <p className="text-slate-300">Drop tasks into your <strong>design queue</strong> with a tight <strong>intake brief</strong>; we turn them into polished pages, sections, and assets with quick iterations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Human-crafted, AI-accelerated</h3>
                <p className="text-slate-300">We use AI to speed exploration and QA—your brand voice and visuals stay unmistakably human.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Platform-native builds</h3>
                <p className="text-slate-300">We design <strong>and</strong> implement directly in <strong>WordPress, Webflow, or Framer</strong>. No hand-off purgatory. No lost intent.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Creative ops you can count on</h3>
                <p className="text-slate-300">Structured workflow, versioned assets, and measurable progress—so your roadmap keeps moving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-4 py-20 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What we do (website-first)
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Website Design & Build <span className="text-slate-400">(WordPress / Webflow / Framer)</span></h3>
              <p className="text-slate-300 mb-4">Information architecture, wireframes, high-fidelity design, platform-native build, QA, and launch support.</p>
              <p className="text-slate-400 italic">Extras as needed: content migration, performance & accessibility checks, SEO basics, analytics setup.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Brand & Visual System Refresh</h3>
              <p className="text-slate-300">Logo refinement, typography & color system, component library, motion language (kinetic type, section transitions).</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Conversion & Growth Assets</h3>
              <p className="text-slate-300">Landing pages, pricing pages, sales decks, socials, email graphics—everything around the site that drives outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            How it works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-3">Kickoff & Brand Profile</h3>
              <p className="text-slate-300 text-sm">We align on goals, audience, tone, and visual anchors (dark-mode, bold type, motion).</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-3">Design Queue + Intake</h3>
              <p className="text-slate-300 text-sm">You submit requests with priorities. We clarify scope fast and get to work.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-3">Build & Iterate</h3>
              <p className="text-slate-300 text-sm">We design, implement in your chosen platform, and loop feedback in tight cycles.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold mb-3">Launch & Scale</h3>
              <p className="text-slate-300 text-sm">We help deploy, monitor, and keep your queue moving—new pages, experiments, and optimizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tracks */}
      <section className="px-4 py-20 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Service Tracks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Starter Studio</h3>
              <p className="text-slate-300">A focused launchpad: single-page or lean multi-section site, platform-native build, rapid design sprints.</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Growth Studio</h3>
              <p className="text-slate-300">3–7 core pages, component library, motion/kinetic typography accents, SEO & analytics basics, post-launch iteration window.</p>
            </div>
            <div className="bg-slate-700 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Super Studio</h3>
              <p className="text-slate-300">Larger IA, advanced interactions, gated content or CMS collections, ongoing design queue for continuous improvements.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-400 italic">Not sure where to start? We&apos;ll scope against your roadmap and recommend the right track.</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Results</h2>
          <p className="text-xl text-slate-300 mb-8">
            Websites that look sharp <em>and</em> ship fast—backed by a repeatable process.
          </p>
          <button className="border-2 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-colors" style={{ borderColor: '#FF13F0' }}>
            View case studies
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to put your website on a production schedule?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let&apos;s set up your design queue and get your first build moving.
          </p>
          <button className="px-8 py-4 rounded-full font-semibold text-lg transition-colors text-white hover:opacity-90" style={{ backgroundColor: '#FF13F0' }}>
            Start a project
          </button>
        </div>
      </section>
    </div>
  );
}
