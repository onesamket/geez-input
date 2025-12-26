import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash', filename }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // React.dev style code block
    return (
        <div className="relative group rounded-lg overflow-hidden bg-[#16181d] border border-[#343a46] my-4 shadow-lg">
            {/* Header bar - React.dev style */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1d23] border-b border-[#343a46]">
                <div className="flex items-center gap-3">
                    {/* Dot indicators */}
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28ca42]"></div>
                    </div>
                    {filename && (
                        <span className="text-xs font-medium text-[#99a1b3] font-mono">{filename}</span>
                    )}
                    {!filename && (
                        <span className="text-[10px] font-semibold text-[#5e6677] uppercase tracking-wider font-mono">
                            {language}
                        </span>
                    )}
                </div>
                <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded-md hover:bg-[#23272f] transition-all text-[#99a1b3] hover:text-[#f6f7f9] active:scale-95 group/btn"
                    title="Copy to clipboard"
                >
                    {copied ? (
                        <Check size={14} className="text-[#28ca42]" />
                    ) : (
                        <Copy size={14} className="group-hover/btn:text-[#149eca]" />
                    )}
                </button>
            </div>
            {/* Code content - React.dev style */}
            <div className="relative">
                <pre className="p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#343a46] scrollbar-track-transparent">
                    <code className="text-sm text-[#e5e7eb] font-mono leading-relaxed block whitespace-pre">
                        {code}
                    </code>
                </pre>
                {/* Gradient fade on the right */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#16181d] to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
};

export default CodeBlock;
