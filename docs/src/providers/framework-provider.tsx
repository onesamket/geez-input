import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Framework = 'react' | 'svelte' | 'vue' | 'angular' | 'core' | null;

interface FrameworkContextType {
    selectedFramework: Framework;
    setFramework: (framework: Framework) => void;
}

const FrameworkContext = createContext<FrameworkContextType | undefined>(undefined);

export function FrameworkProvider({ children }: { children: ReactNode }) {
    const [selectedFramework, setSelectedFramework] = useState<Framework>(() => {
        // Try to get from localStorage
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('geez-framework');
            if (saved && ['react', 'svelte', 'vue', 'angular', 'core'].includes(saved)) {
                return saved as Framework;
            }
        }
        return null;
    });

    const setFramework = (framework: Framework) => {
        setSelectedFramework(framework);
        if (typeof window !== 'undefined') {
            if (framework) {
                localStorage.setItem('geez-framework', framework);
            } else {
                localStorage.removeItem('geez-framework');
            }
        }
    };

    useEffect(() => {
        const root = document.documentElement;

        // Remove all framework classes
        root.classList.remove('framework-react', 'framework-svelte', 'framework-vue', 'framework-angular', 'framework-core');

        // Add the selected framework class and update theme color
        if (selectedFramework) {
            root.classList.add(`framework-${selectedFramework}`);

            // Update meta theme-color
            const themeColors: Record<string, string> = {
                react: '#61DAFB',
                svelte: '#FF3E00',
                vue: '#4FC08D',
                angular: '#DD0031',
                core: '#F7DF1E',
            };

            const metaTheme = document.querySelector('meta[name="theme-color"]');
            if (metaTheme) {
                metaTheme.setAttribute('content', themeColors[selectedFramework] || '#2563eb');
            }
        } else {
            const metaTheme = document.querySelector('meta[name="theme-color"]');
            if (metaTheme) {
                metaTheme.setAttribute('content', '#2563eb');
            }
        }
    }, [selectedFramework]);

    return (
        <FrameworkContext.Provider value={{ selectedFramework, setFramework }}>
            {children}
        </FrameworkContext.Provider>
    );
}

export function useFramework() {
    const context = useContext(FrameworkContext);
    if (context === undefined) {
        throw new Error('useFramework must be used within a FrameworkProvider');
    }
    return context;
}

