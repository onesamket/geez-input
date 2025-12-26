import React, { useState } from 'react';
import { GeezInput, GeezTextArea } from 'geez-input';
import { useGeezMode } from '../providers/geez-mode-provider';

const Demo: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const { mode } = useGeezMode();

    return (
        <div className="w-full bg-[#16181d] p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Input Example */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-[#f6f7f9]">GeezInput</h3>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#149eca] bg-[#149eca]/10 px-2 py-1 rounded border border-[#149eca]/20">Active</span>
                        </div>
                        <p className="text-[#99a1b3] text-sm font-medium">Standard single-line input with phonetic support.</p>
                    </div>

                    <div className="flex-1 space-y-4">
                        <GeezInput
                            mode={mode}
                            className="w-full px-8 py-5 bg-[#23272f] border border-[#343a46] rounded-full text-2xl text-[#f6f7f9] placeholder-[#5e6677] focus:ring-4 focus:ring-[#149eca]/20 focus:border-[#149eca] outline-none transition-all geez-font hover:border-[#99a1b3]"
                            placeholder="Type 'selam'..."
                            value={inputValue}
                            onChange={(e: any) => setInputValue(e.target.value)}
                        />
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#99a1b3] px-1">
                            <span>Result: {inputValue || '—'}</span>
                            <span className="text-[#149eca]">{mode === 'geez' ? 'Phonetic Mode' : 'Latin Mode'}</span>
                        </div>
                    </div>
                </div>

                {/* TextArea Example */}
                <div className="flex flex-col lg:border-l lg:border-[#343a46] lg:pl-12">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-[#f6f7f9]">GeezTextArea</h3>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#149eca] bg-[#149eca]/10 px-2 py-1 rounded border border-[#149eca]/20">Multi-line</span>
                        </div>
                        <p className="text-[#99a1b3] text-sm font-medium">Multi-line editor for longer compositions.</p>
                    </div>

                    <div className="flex-1 space-y-4">
                        <GeezTextArea
                            mode={mode}
                            className="w-full h-40 px-6 py-5 bg-[#23272f] border border-[#343a46] rounded-3xl text-xl text-[#f6f7f9] placeholder-[#5e6677] focus:ring-4 focus:ring-[#149eca]/20 focus:border-[#149eca] outline-none transition-all resize-none geez-font hover:border-[#99a1b3]"
                            placeholder="Type 'itYopya'..."
                            value={textAreaValue}
                            onChange={(e: any) => setTextAreaValue(e.target.value)}
                            rows={5}
                        />
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#99a1b3] px-1">
                            <span>Chars: {textAreaValue.length}</span>
                            <span className="text-[#149eca]">Auto-Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;
