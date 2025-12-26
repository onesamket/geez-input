import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type GeezMode = 'geez' | 'latin';

interface GeezModeContextType {
    mode: GeezMode;
    setMode: (mode: GeezMode) => void;
    useGeez: boolean;
}

const GeezModeContext = createContext<GeezModeContextType | undefined>(undefined);

export function GeezModeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<GeezMode>('geez');

    return (
        <GeezModeContext.Provider
            value={{
                mode,
                setMode,
                useGeez: mode === 'geez',
            }}
        >
            {children}
        </GeezModeContext.Provider>
    );
}

export function useGeezMode() {
    const context = useContext(GeezModeContext);
    if (context === undefined) {
        throw new Error('useGeezMode must be used within a GeezModeProvider');
    }
    return context;
}

