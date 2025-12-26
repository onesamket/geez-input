import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import CodeBlock from '../components/code-block';
import Demo from '../components/demo';
import FormDemo from '../components/form-demo';
import Header from '../components/header';
import Footer from '../components/footer';

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  // Enforce dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-[#23272f] text-[#f6f7f9] font-sans selection:bg-[#149eca]/30 selection:text-[#149eca]">
      <Header />

      <main className="w-full">
        {/* React.dev Style Hero */}
        <section className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 text-center max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="mb-6 sm:mb-8 relative group">
              <div className="absolute -inset-1 rounded-full bg-[#149eca] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#23272f] rounded-full border border-[#149eca]/30 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#149eca]">ግ</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f6f7f9] mb-4 sm:mb-6 tracking-tight px-4">
              Geez Input
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#ebecf0] max-w-3xl mx-auto mb-8 sm:mb-10 leading-normal font-normal px-4">
              The library for <span className="text-[#149eca]">Ethiopic web interfaces</span>. Type Latin, get Geez instantly with zero configuration.
            </p>

            <div className="flex items-center gap-4 px-4">
              <a href="#playground" className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#343a46] text-white font-bold text-base sm:text-lg hover:bg-[#3e4551] transition-all flex items-center gap-2">
                Try Demo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Feature Grid (React.dev style) */}
        <section className="px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24 max-w-[1400px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#343a46] p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-[#f6f7f9] mb-3 sm:mb-4 flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#343a46] border border-[#f6f7f9]/20 flex items-center justify-center text-xl sm:text-2xl">⚡</div>
                Lightning Fast
              </h3>
              <p className="text-[#ebecf0] leading-relaxed text-[15px] sm:text-[17px]">
                Real-time phonetic conversion with zero lag. Optimized for performance and user experience.
              </p>
            </div>

            <div className="bg-[#23272f] border border-[#343a46] p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-[#f6f7f9] mb-3 sm:mb-4 flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#343a46] border border-[#f6f7f9]/20 flex items-center justify-center text-xl sm:text-2xl">🛡️</div>
                Type Safe
              </h3>
              <p className="text-[#ebecf0] leading-relaxed text-[15px] sm:text-[17px]">
                Written in TypeScript. Enjoy full type inference and comprehensive type definitions out of the box.
              </p>
            </div>

            <div className="bg-[#343a46] p-6 sm:p-8 rounded-2xl sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#f6f7f9] mb-3 sm:mb-4 flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#343a46] border border-[#f6f7f9]/20 flex items-center justify-center text-xl sm:text-2xl">🧩</div>
                Drop-in Ready
              </h3>
              <p className="text-[#ebecf0] leading-relaxed text-[15px] sm:text-[17px]">
                Framework-agnostic core engine with React components available now. More frameworks coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* Playground */}
        <div className="w-full h-px bg-[#343a46]" />
        <section id="playground" className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f6f7f9] mb-8 sm:mb-12 text-center px-4">Interactive Playground</h2>
          <div className="bg-[#16181d] rounded-2xl sm:rounded-3xl border border-[#343a46] overflow-hidden">
            <Demo />
          </div>
        </section>

        {/* Form Demo */}
        <div className="w-full h-px bg-[#343a46]" />
        <section id="form-demo" className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-[1400px] mx-auto">
          <div className="mb-8 sm:mb-12 text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f6f7f9] mb-3 sm:mb-4">Integrates with Everything</h2>
            <p className="text-[#ebecf0] text-base sm:text-lg">Use it with React Hook Form, Formik, or plain React state.</p>
          </div>
          <FormDemo />
        </section>

        {/* Framework Support */}
        <div className="w-full h-px bg-[#343a46]" />
        <section id="frameworks" className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-[1400px] mx-auto">
          <div className="mb-12 text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f6f7f9] mb-3 sm:mb-4">Framework Support</h2>
            <p className="text-[#ebecf0] text-base sm:text-lg max-w-2xl mx-auto">
              Built with a modular architecture. Use the core engine with any framework, or choose ready-made components.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* React */}
            <div className="bg-[#23272f] border-2 border-[#149eca]/30 p-6 sm:p-8 rounded-2xl hover:border-[#149eca]/50 transition-all relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#f6f7f9]">React</h3>
                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#149eca] bg-[#149eca]/10 rounded border border-[#149eca]/20">Available</span>
              </div>
              <p className="text-[#ebecf0] text-sm mb-4 leading-relaxed">
                Ready-to-use components and hooks with full TypeScript support.
              </p>
              <CodeBlock code={`import { GeezInput } from "geez-input/react";`} language="tsx" filename="React" />
            </div>

            {/* Svelte */}
            <div className="bg-[#23272f] border border-[#343a46] p-6 sm:p-8 rounded-2xl relative opacity-75">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#f6f7f9]">Svelte</h3>
                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#99a1b3] bg-[#343a46] rounded border border-[#343a46]">Coming Soon</span>
              </div>
              <p className="text-[#99a1b3] text-sm mb-4 leading-relaxed">
                Svelte components coming soon! Use the core engine directly in the meantime.
              </p>
              <div className="bg-[#16181d] border border-[#343a46] rounded-lg p-4 text-[#5e6677] text-xs font-mono">
                {/* Placeholder for code */}
              </div>
            </div>

            {/* Angular */}
            <div className="bg-[#23272f] border border-[#343a46] p-6 sm:p-8 rounded-2xl relative opacity-75">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#f6f7f9]">Angular</h3>
                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#99a1b3] bg-[#343a46] rounded border border-[#343a46]">Coming Soon</span>
              </div>
              <p className="text-[#99a1b3] text-sm mb-4 leading-relaxed">
                Angular directives coming soon! Use the core engine directly in the meantime.
              </p>
              <div className="bg-[#16181d] border border-[#343a46] rounded-lg p-4 text-[#5e6677] text-xs font-mono">
                {/* Placeholder for code */}
              </div>
            </div>

            {/* Vue */}
            <div className="bg-[#23272f] border border-[#343a46] p-6 sm:p-8 rounded-2xl relative opacity-75">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#f6f7f9]">Vue</h3>
                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#99a1b3] bg-[#343a46] rounded border border-[#343a46]">Coming Soon</span>
              </div>
              <p className="text-[#99a1b3] text-sm mb-4 leading-relaxed">
                Vue components coming soon! Use the core engine directly in the meantime.
              </p>
              <div className="bg-[#16181d] border border-[#343a46] rounded-lg p-4 text-[#5e6677] text-xs font-mono">
                {/* Placeholder for code */}
              </div>
            </div>
          </div>

          {/* Core Engine Section */}
          <div className="mt-12 bg-[#23272f] border border-[#343a46] rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">Core Engine</h3>
            <p className="text-[#ebecf0] text-sm mb-4 leading-relaxed">
              Framework-agnostic core that works with any JavaScript framework or vanilla JS.
            </p>
            <CodeBlock code={`import { GeezEngine } from "geez-input/core";

const result = GeezEngine.transform("h", "", "a");
// result.transformedValue === "ሀ"`} language="ts" filename="Core Engine" />
          </div>
        </section>

        {/* Docs */}
        <div className="w-full h-px bg-[#343a46]" />
        <section id="installation" className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-4xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f6f7f9] mb-4 sm:mb-6 px-4 sm:px-0">Installation</h2>
            <p className="text-[#ebecf0] mb-6 sm:mb-8 text-base sm:text-lg px-4 sm:px-0">Add the package to your project using your preferred package manager.</p>
            <div className="space-y-0">
              <CodeBlock code="npm install geez-input" language="bash" />
              <CodeBlock code="bun add geez-input" language="bash" />
            </div>
          </div>

          {/* React Usage Guide */}
          <div id="react-usage">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f6f7f9] mb-4 sm:mb-6 px-4 sm:px-0">React Usage</h2>
            <p className="text-[#ebecf0] mb-6 sm:mb-8 text-base sm:text-lg px-4 sm:px-0">
              Get started with React components in minutes.
            </p>

            <div className="space-y-6 px-4 sm:px-0">
              <div>
                <h3 className="text-lg font-bold text-[#f6f7f9] mb-3">Basic Components</h3>
                <CodeBlock code={`import { GeezInput, GeezTextArea } from "geez-input/react";

function App() {
  return (
    <div>
      <GeezInput placeholder="Type in Geez..." />
      <GeezTextArea placeholder="Write longer text..." rows={5} />
    </div>
  );
}`} language="tsx" filename="App.tsx" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#f6f7f9] mb-3">Controlled Components</h3>
                <CodeBlock code={`import { GeezInput } from "geez-input/react";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  return (
    <GeezInput
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}`} language="tsx" filename="MyForm.tsx" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#f6f7f9] mb-3">Custom Hook</h3>
                <CodeBlock code={`import { useGeez } from "geez-input/react";

function CustomInput() {
  const { onKeyDown } = useGeez({
    onTransform: (result) => {
      console.log("Transformed:", result.transformedValue);
    },
  });

  return <input onKeyDown={onKeyDown} />;
}`} language="tsx" filename="CustomInput.tsx" />
              </div>
            </div>
          </div>

          {/* Core Engine Usage */}
          <div id="core-usage">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f6f7f9] mb-4 sm:mb-6 px-4 sm:px-0">Core Engine</h2>
            <p className="text-[#ebecf0] mb-6 sm:mb-8 text-base sm:text-lg px-4 sm:px-0">
              Use the core engine for custom integrations with any framework.
            </p>

            <div className="space-y-6 px-4 sm:px-0">
              <div>
                <h3 className="text-lg font-bold text-[#f6f7f9] mb-3">Basic Usage</h3>
                <CodeBlock code={`import { GeezEngine } from "geez-input/core";

const result = GeezEngine.transform("h", "", "a");
// result.transformedValue === "ሀ"
// result.newCursorPosition === 1
// result.isReplacement === true`} language="ts" filename="transform.ts" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#f6f7f9] mb-3">Vanilla JavaScript Integration</h3>
                <CodeBlock code={`import { GeezEngine } from "geez-input/core";

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  // Skip special keys
  if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;

  e.preventDefault();

  const target = e.target;
  const { selectionStart, selectionEnd, value } = target;

  const before = value.substring(0, selectionStart || 0);
  const after = value.substring(selectionEnd || 0);

  const result = GeezEngine.transform(before, after, e.key);

  target.value = result.transformedValue;
  target.setSelectionRange(
    result.newCursorPosition,
    result.newCursorPosition
  );
});`} language="ts" filename="vanilla-js.ts" />
              </div>
            </div>
          </div>

          <div id="guide">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f6f7f9] mb-6 sm:mb-8 px-4 sm:px-0">Phonetic Guide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-0">
              {[
                { label: 'Consonants', examples: 's → ስ, l → ል, m → ም' },
                { label: 'Syllables', examples: 'sa → ሰ, su → ሱ, si → ሲ' },
                { label: 'Nya Family (ኘ)', examples: 'ny → ኘ, nya → ኛ, nyu → ኙ' },
                { label: 'Complex Sounds', examples: 'sh → ሽ, ch → ች, zh → ዥ' },
                { label: 'Double Vowels', examples: 'sa → ሳ, see → ሴ' },
                { label: 'Punctuation', examples: ': → ፡, :: → ።' }
              ].map((item, i) => (
                <div key={i} className="bg-[#23272f] border border-[#343a46] p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:border-[#149eca]/30 transition-colors">
                  <span className="block text-[#99a1b3] uppercase tracking-wider text-xs font-bold mb-2">{item.label}</span>
                  <span className="text-[#f6f7f9] font-mono text-base sm:text-lg">{item.examples}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
