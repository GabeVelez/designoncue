export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            DesignOnCue
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Your creative partner for branding, web design, and visual identity. 
            We help businesses tell their story through exceptional design.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              View Our Work
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Branding</h3>
              <p className="text-slate-600">Complete brand identity packages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Web Design</h3>
              <p className="text-slate-600">Modern, responsive websites</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏷️</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Logo Design</h3>
              <p className="text-slate-600">Memorable logos that stand out</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Graphic Design</h3>
              <p className="text-slate-600">Print and digital graphics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-600 mb-8">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
