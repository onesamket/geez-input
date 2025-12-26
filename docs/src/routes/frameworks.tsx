import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useFramework } from '../providers/framework-provider';
import Header from '../components/header';
import Footer from '../components/footer';

// Helper function to convert hex to rgba
function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const Route = createFileRoute('/frameworks')({
    component: FrameworksPage,
});

const frameworks = [
    {
        id: 'react' as const,
        name: 'React',
        description: 'Ready-to-use components and hooks with full TypeScript support.',
        status: 'available',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
        color: '#61DAFB',
        path: '/docs/react',
    },
    {
        id: 'svelte' as const,
        name: 'Svelte',
        description: 'Svelte components with reactive bindings and full TypeScript support.',
        status: 'coming-soon',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg',
        color: '#FF3E00',
        path: '/docs/soon',
    },
    {
        id: 'vue' as const,
        name: 'Vue',
        description: 'Vue 3 components with Composition API and full TypeScript support.',
        status: 'coming-soon',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
        color: '#4FC08D',
        path: '/docs/soon',
    },
    {
        id: 'angular' as const,
        name: 'Angular',
        description: 'Angular directives and services with full TypeScript support.',
        status: 'coming-soon',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg',
        color: '#DD0031',
        path: '/docs/soon',
    },
    {
        id: 'core' as const,
        name: 'Core / Vanilla',
        description: 'Framework-agnostic core engine that works with any JavaScript framework or vanilla JS.',
        status: 'available',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        color: '#F7DF1E',
        path: '/docs/core',
    },
];

function FrameworksPage() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const { selectedFramework, setFramework } = useFramework();
    const navigate = useNavigate();

    const handleFrameworkSelect = (frameworkId: typeof frameworks[number]['id'], path: string) => {
        setFramework(frameworkId);
        navigate({ to: path });
    };

    return (
        <div className="relative min-h-screen bg-[#23272f] text-[#f6f7f9] font-sans selection:bg-[#149eca]/30 selection:text-[#149eca]">
            <Header />

            <main className="w-full pt-16">
                <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-[1400px] mx-auto">
                    <div className="mb-12 text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f6f7f9] mb-4 sm:mb-6 tracking-tight">
                            Framework Support
                        </h1>
                        <p className="text-lg sm:text-xl text-[#ebecf0] max-w-3xl mx-auto leading-normal">
                            Choose your framework and see the theme adapt. Built with a modular architecture for maximum flexibility.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {frameworks.map((framework) => {
                            const isSelected = selectedFramework === framework.id;
                            const isAvailable = framework.status === 'available';

                            return (
                                <button
                                    key={framework.id}
                                    onClick={() => handleFrameworkSelect(framework.id, framework.path)}
                                    className={`relative p-6 sm:p-8 rounded-2xl border-2 transition-all text-left group flex flex-col h-full bg-[#23272f] ${isSelected
                                        ? 'border-[#149eca]'
                                        : 'border-[#343a46] hover:border-[#3e4551]'
                                        } cursor-pointer`}
                                    style={
                                        isSelected
                                            ? {
                                                borderColor: framework.color,
                                                backgroundColor: hexToRgba(framework.color, 0.1),
                                            }
                                            : undefined
                                    }
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src={framework.icon}
                                                alt={`${framework.name} logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <span
                                            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${isAvailable
                                                ? ''
                                                : 'text-[#99a1b3] bg-[#343a46] border-[#343a46]'
                                                }`}
                                            style={
                                                isAvailable
                                                    ? {
                                                        color: framework.color,
                                                        backgroundColor: hexToRgba(framework.color, 0.15),
                                                        borderColor: hexToRgba(framework.color, 0.3),
                                                    }
                                                    : undefined
                                            }
                                        >
                                            {isAvailable ? 'Available' : 'Coming Soon'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold text-[#f6f7f9] mb-3">{framework.name}</h3>
                                    <p className="text-[#ebecf0] text-sm sm:text-base leading-relaxed grow">
                                        {framework.description}
                                    </p>

                                    <div className="mt-6 flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform" style={{ color: framework.color }}>
                                        {isAvailable ? 'Read documentation' : 'Coming soon'}
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>

                                    {isSelected && (
                                        <div
                                            className="absolute top-4 right-4 w-2 h-2 rounded-full animate-ping"
                                            style={{ backgroundColor: framework.color }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

