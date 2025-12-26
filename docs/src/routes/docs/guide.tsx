import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/docs/guide')({
  component: GuidePage,
});

function GuidePage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-[#f6f7f9] mb-6">Phonetic Guide</h1>

      <p className="text-lg text-[#ebecf0] mb-8 leading-relaxed">
        Learn how to type in Geez script using intuitive phonetic mappings. Type Latin characters
        and they automatically transform to Geez script.
      </p>

      <section id="wikipedia-reference" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">About Amharic</h2>
        <p className="text-[#ebecf0] mb-6">
          Learn more about the Amharic language and its writing system from Wikipedia:
        </p>
        <div className="bg-[#23272f] border border-[#343a46] rounded-xl overflow-hidden">
          <iframe
            src="https://en.wikipedia.org/wiki/Amharic"
            title="Amharic - Wikipedia"
            className="w-full h-[800px] border-0"
            allow="fullscreen"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-[#99a1b3] mt-4">
          Source: <a
            href="https://en.wikipedia.org/wiki/Amharic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#149eca] hover:underline"
          >
            Amharic - Wikipedia
          </a>
        </p>
      </section>

      <section id="consonants" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Consonants</h2>
        <p className="text-[#ebecf0] mb-6">
          Basic consonant mappings:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { latin: 'h', geez: 'ህ' },
            { latin: 'l', geez: 'ል' },
            { latin: 'm', geez: 'ም' },
            { latin: 's', geez: 'ስ' },
            { latin: 'r', geez: 'ር' },
            { latin: 'n', geez: 'ን' },
            { latin: 'b', geez: 'ብ' },
            { latin: 't', geez: 'ት' },
            { latin: 'k', geez: 'ክ' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#23272f] border border-[#343a46] p-4 rounded-xl hover:border-[#149eca]/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[#ebecf0] font-mono text-lg">{item.latin}</span>
                <span className="text-2xl text-[#149eca]">→</span>
                <span className="text-2xl text-[#f6f7f9]">{item.geez}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="syllables" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Syllables</h2>
        <p className="text-[#ebecf0] mb-6">
          Type a consonant followed by a vowel to form syllables:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { latin: 'he', geez: 'ሀ' },
            { latin: 'lu', geez: 'ሉ' },
            { latin: 'mi', geez: 'ሚ' },
            { latin: 'sa', geez: 'ሰ' },
            { latin: 'su', geez: 'ሱ' },
            { latin: 'si', geez: 'ሲ' },
            { latin: 'ra', geez: 'ራ' },
            { latin: 're', geez: 'ሬ' },
            { latin: 'ro', geez: 'ሮ' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#23272f] border border-[#343a46] p-4 rounded-xl hover:border-[#149eca]/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[#ebecf0] font-mono text-lg">{item.latin}</span>
                <span className="text-2xl text-[#149eca]">→</span>
                <span className="text-2xl text-[#f6f7f9]">{item.geez}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="complex-sounds" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Complex Sounds</h2>
        <p className="text-[#ebecf0] mb-6">
          Multi-character combinations for complex sounds:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { latin: 'sh', geez: 'ሽ' },
            { latin: 'ch', geez: 'ች' },
            { latin: 'zh', geez: 'ዥ' },
            { latin: 'sha', geez: 'ሻ' },
            { latin: 'chu', geez: 'ቹ' },
            { latin: 'ny', geez: 'ኘ' },
            { latin: 'nya', geez: 'ኛ' },
            { latin: 'nyu', geez: 'ኙ' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#23272f] border border-[#343a46] p-4 rounded-xl hover:border-[#149eca]/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[#ebecf0] font-mono text-lg">{item.latin}</span>
                <span className="text-2xl text-[#149eca]">→</span>
                <span className="text-2xl text-[#f6f7f9]">{item.geez}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="double-vowels" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Double Vowels</h2>
        <p className="text-[#ebecf0] mb-6">
          Type the same vowel twice for alternate forms:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { latin: 'ha', geez: 'ሃ' },
            { latin: 'hee', geez: 'ሄ' },
            { latin: 'lee', geez: 'ሌ' },
            { latin: 'maa', geez: 'ማ' },
            { latin: 'see', geez: 'ሴ' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#23272f] border border-[#343a46] p-4 rounded-xl hover:border-[#149eca]/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[#ebecf0] font-mono text-lg">{item.latin}</span>
                <span className="text-2xl text-[#149eca]">→</span>
                <span className="text-2xl text-[#f6f7f9]">{item.geez}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="punctuation" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Punctuation</h2>
        <p className="text-[#ebecf0] mb-6">
          Geez punctuation marks:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { latin: ':', geez: '፡', desc: 'Word separator' },
            { latin: '::', geez: '።', desc: 'Sentence ending' },
            { latin: ',', geez: '፣', desc: 'Comma' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#23272f] border border-[#343a46] p-4 rounded-xl hover:border-[#149eca]/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#ebecf0] font-mono text-lg">{item.latin}</span>
                <span className="text-2xl text-[#149eca]">→</span>
                <span className="text-2xl text-[#f6f7f9]">{item.geez}</span>
              </div>
              <p className="text-sm text-[#99a1b3]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="examples" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Examples</h2>
        <p className="text-[#ebecf0] mb-6">
          Type phonetically to get Geez text:
        </p>
        <div className="space-y-4">
          {[
            { latin: 'selam', geez: 'ስላም', meaning: 'hello' },
            { latin: 'ethiopia', geez: 'ኢትዮጵያ', meaning: 'Ethiopia' },
            { latin: 'tena yistilign', geez: 'ጤና ይስጥልኝ', meaning: 'greetings' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#23272f] border border-[#343a46] p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#ebecf0] font-mono text-lg">{item.latin}</span>
                <span className="text-2xl text-[#149eca]">→</span>
                <span className="text-2xl text-[#f6f7f9]">{item.geez}</span>
              </div>
              <p className="text-sm text-[#99a1b3] italic">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

