import { Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';
import Sidebar from './sidebar';
import Header from './header';

export default function DocsLayout() {
    useEffect(() => {
        document.documentElement.classList.add('dark');

        // Handle smooth scrolling for hash anchors
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        };

        // Scroll on mount if hash exists
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-[#23272f] text-[#f6f7f9] font-sans selection:bg-[#149eca]/30 selection:text-[#149eca]">
            <Header />

            <div className="flex pt-16 min-h-[calc(100vh-4rem)]">
                {/* Sidebar */}
                <div className="hidden lg:block w-64">
                    <div className="fixed top-16 left-0 bottom-0 w-64">
                        <Sidebar />
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}

