import { createFileRoute, Link } from '@tanstack/react-router';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useFramework } from '../../providers/framework-provider';

export const Route = createFileRoute('/docs/soon')({
    component: ComingSoonPage,
});

function ComingSoonPage() {
    const { selectedFramework } = useFramework();

    const frameworkName = selectedFramework === 'react' ? 'React' :
        selectedFramework === 'svelte' ? 'Svelte' :
            selectedFramework === 'vue' ? 'Vue' :
                selectedFramework === 'angular' ? 'Angular' :
                    selectedFramework === 'core' ? 'Core' : 'this framework';

    return (
        <div className="relative min-h-screen bg-[#23272f] text-[#f6f7f9] font-sans">
            <Header />

            <main className="w-full pt-16">
                <section className="px-4 sm:px-6 py-24 md:py-32 max-w-[1400px] mx-auto text-center">
                    <div className="inline-block p-4 rounded-2xl bg-[#149eca]/10 border border-[#149eca]/20 mb-8 animate-bounce">
                        <svg className="w-12 h-12 text-[#149eca]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Integration Coming Soon
                    </h1>

                    <p className="text-xl text-[#ebecf0] max-w-2xl mx-auto mb-12 leading-relaxed">
                        We're working hard to bring <span className="text-[#149eca] font-semibold">{frameworkName}</span> support to geez-input. Stay tuned for updates!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/frameworks"
                            className="px-8 py-4 bg-[#149eca] hover:bg-[#149eca]/90 text-white rounded-full font-bold transition-all transform hover:scale-105"
                        >
                            Back to Frameworks
                        </Link>
                        <Link
                            to="/docs/getting-started"
                            className="px-8 py-4 bg-[#343a46] hover:bg-[#3e4551] text-[#f6f7f9] rounded-full font-bold transition-all transform hover:scale-105"
                        >
                            Read Getting Started
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
