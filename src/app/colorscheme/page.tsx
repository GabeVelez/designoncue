export default function ColorSchemePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">DesignOnCue Color Palette</h1>
        <p className="text-xl text-slate-300 mb-16 text-center max-w-3xl mx-auto">
          Our brand color system designed for bold, modern aesthetics with high contrast and accessibility in mind.
        </p>

        {/* Primary Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Primary Colors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Electric Pink - Primary Brand */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: '#FF13F0' }}></div>
              <h3 className="text-xl font-semibold mb-2">Electric Pink</h3>
              <p className="text-slate-300 mb-2">Primary Brand Color</p>
              <div className="space-y-1 text-sm">
                <p><span className="text-slate-400">HEX:</span> #FF13F0</p>
                <p><span className="text-slate-400">RGB:</span> 255, 19, 240</p>
                <p><span className="text-slate-400">HSL:</span> 306°, 100%, 54%</p>
              </div>
            </div>

            {/* Electric Pink Dark */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: '#D310CC' }}></div>
              <h3 className="text-xl font-semibold mb-2">Electric Pink Dark</h3>
              <p className="text-slate-300 mb-2">Primary Hover State</p>
              <div className="space-y-1 text-sm">
                <p><span className="text-slate-400">HEX:</span> #D310CC</p>
                <p><span className="text-slate-400">RGB:</span> 211, 16, 204</p>
                <p><span className="text-slate-400">HSL:</span> 302°, 86%, 45%</p>
              </div>
            </div>

            {/* Electric Pink Light */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: '#FF4CF4' }}></div>
              <h3 className="text-xl font-semibold mb-2">Electric Pink Light</h3>
              <p className="text-slate-300 mb-2">Accent & Highlights</p>
              <div className="space-y-1 text-sm">
                <p><span className="text-slate-400">HEX:</span> #FF4CF4</p>
                <p><span className="text-slate-400">RGB:</span> 255, 76, 244</p>
                <p><span className="text-slate-400">HSL:</span> 304°, 100%, 65%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Theme Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Dark Theme Palette</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-24 bg-slate-900 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Slate 900</h3>
              <p className="text-slate-300 text-sm mb-2">Primary Background</p>
              <p className="text-sm text-slate-400">#0f172a</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-24 bg-slate-800 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Slate 800</h3>
              <p className="text-slate-300 text-sm mb-2">Secondary Background</p>
              <p className="text-sm text-slate-400">#1e293b</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-24 bg-slate-700 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Slate 700</h3>
              <p className="text-slate-300 text-sm mb-2">Cards & Components</p>
              <p className="text-sm text-slate-400">#334155</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-24 bg-slate-600 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Slate 600</h3>
              <p className="text-slate-300 text-sm mb-2">Borders & Dividers</p>
              <p className="text-sm text-slate-400">#475569</p>
            </div>
          </div>
        </section>

        {/* Text Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Text Colors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-16 bg-white rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-900 font-semibold">Primary Text</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">White</h3>
              <p className="text-slate-300 text-sm mb-2">Primary Text on Dark</p>
              <p className="text-sm text-slate-400">#ffffff</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-16 bg-slate-300 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-900 font-semibold">Secondary Text</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Slate 300</h3>
              <p className="text-slate-300 text-sm mb-2">Secondary Text</p>
              <p className="text-sm text-slate-400">#cbd5e1</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-16 bg-slate-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-900 font-semibold">Tertiary Text</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Slate 400</h3>
              <p className="text-slate-300 text-sm mb-2">Tertiary/Muted Text</p>
              <p className="text-sm text-slate-400">#94a3b8</p>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Usage Examples</h2>
          <div className="space-y-8">
            
            {/* Button Examples */}
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 rounded-full font-semibold transition-colors" style={{ backgroundColor: '#FF13F0', color: 'white' }}>
                  Primary Button
                </button>
                <button className="px-8 py-3 rounded-full font-semibold transition-colors border-2 text-white hover:bg-slate-700" style={{ borderColor: '#FF13F0' }}>
                  Secondary Button
                </button>
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors">
                  White Button
                </button>
              </div>
            </div>

            {/* Text Examples */}
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Typography</h3>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">Heading 1 - White</h1>
                <h2 className="text-2xl font-semibold" style={{ color: '#FF13F0' }}>Heading 2 - Electric Pink</h2>
                <p className="text-slate-300">Body text in Slate 300 for optimal readability on dark backgrounds.</p>
                <p className="text-slate-400 text-sm">Small text and captions in Slate 400 for subtle information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Notes */}
        <section className="bg-slate-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Accessibility & Usage Notes</h2>
          <div className="space-y-4 text-slate-300">
            <p>• <strong>Electric Pink (#FF13F0)</strong> should be used sparingly for high-impact elements like primary CTAs</p>
            <p>• Always ensure sufficient contrast ratios (4.5:1 minimum for normal text, 3:1 for large text)</p>
            <p>• White text on Electric Pink background provides excellent contrast</p>
            <p>• Use Slate 300 for body text on dark backgrounds for optimal readability</p>
            <p>• Slate 400 is perfect for subtle text like captions and metadata</p>
            <p>• Electric Pink works best as accent color against dark slate backgrounds</p>
          </div>
        </section>
      </div>
    </div>
  );
}