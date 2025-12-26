import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GeezInput, GeezTextArea } from 'geez-input';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useGeezMode } from '../providers/geez-mode-provider';
import CodeBlock from './code-block';

// Define Zod schema for form validation
const formSchema = z.object({
    name: z.string().min(2, 'ስም ቢያንስ 2 ፊደላት መሆን አለበት'),
    email: z.string().email('ትክክለኛ ኢሜይል አድራሻ ያስገቡ'),
    message: z.string().min(10, 'መልእክት ቢያንስ 10 ፊደላት መሆን አለበት'),
});

type FormData = z.infer<typeof formSchema>;

export default function FormDemo() {
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);
    const { mode } = useGeezMode();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmittedData(data);
        reset();
    };

    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Form Section */}
                <div className="bg-[#23272f] rounded-2xl p-8 border border-[#343a46] relative overflow-hidden">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-[#f6f7f9] mb-2">
                            Contact Us
                        </h3>
                        <p className="text-[#99a1b3] text-sm">
                            Powered by React Hook Form & Zod
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-bold text-[#ebecf0] mb-2">
                                ስም (Name)
                            </label>

                            <GeezInput
                                mode={mode}
                                {...register('name')}
                                placeholder="Start typing name..."
                                className={`w-full px-6 py-4 rounded-full border ${errors.name
                                    ? 'border-red-500/50 bg-[#16181d] text-red-200'
                                    : 'border-[#343a46] bg-[#16181d] text-[#f6f7f9] hover:border-[#99a1b3]'
                                    } focus:outline-none focus:border-[#149eca] focus:ring-4 focus:ring-[#149eca]/20 transition-all placeholder-[#5e6677] text-lg`}
                            />

                            {errors.name && (
                                <div className="flex items-center gap-2 mt-2 text-red-400 text-sm font-medium">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.name.message}</span>
                                </div>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-bold text-[#ebecf0] mb-2">
                                ኢሜይል (Email)
                            </label>
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="example@email.com"
                                className={`w-full px-6 py-4 rounded-full border ${errors.email
                                    ? 'border-red-500/50 bg-[#16181d] text-red-200'
                                    : 'border-[#343a46] bg-[#16181d] text-[#f6f7f9] hover:border-[#99a1b3]'
                                    } focus:outline-none focus:border-[#149eca] focus:ring-4 focus:ring-[#149eca]/20 transition-all placeholder-[#5e6677] text-lg`}
                            />
                            {errors.email && (
                                <div className="flex items-center gap-2 mt-2 text-red-400 text-sm font-medium">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.email.message}</span>
                                </div>
                            )}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="block text-sm font-bold text-[#ebecf0] mb-2">
                                መልእክት (Message)
                            </label>
                            <GeezTextArea
                                mode={mode}
                                {...register('message')}
                                rows={5}
                                placeholder="Write your message here..."
                                className={`w-full px-6 py-4 rounded-3xl border ${errors.message
                                    ? 'border-red-500/50 bg-[#16181d] text-red-200'
                                    : 'border-[#343a46] bg-[#16181d] text-[#f6f7f9] hover:border-[#99a1b3]'
                                    } focus:outline-none focus:border-[#149eca] focus:ring-4 focus:ring-[#149eca]/20 transition-all placeholder-[#5e6677] resize-none text-lg`}
                            />
                            {errors.message && (
                                <div className="flex items-center gap-2 mt-2 text-red-400 text-sm font-medium">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.message.message}</span>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-6 py-3.5 bg-[#149eca] hover:bg-[#149eca]/90 text-white font-bold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Form'}
                        </button>
                    </form>
                </div>

                {/* Preview Section */}
                <div className="bg-[#23272f] rounded-2xl p-8 border border-[#343a46] flex flex-col relative overflow-hidden">
                    <div className="mb-6 relative z-10">
                        <h3 className="text-xl font-bold text-[#f6f7f9] mb-2">
                            Live Preview
                        </h3>
                        <p className="text-[#99a1b3] text-sm">
                            Real-time data inspection
                        </p>
                    </div>

                    <div className="flex-1 rounded-xl bg-[#16181d] border border-[#343a46] p-6 relative overflow-hidden">
                        {submittedData ? (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
                                <div className="flex items-center gap-2 text-green-400 mb-6 bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20 w-fit">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="font-bold text-sm">Success!</span>
                                </div>

                                <div className="space-y-6 font-mono text-sm">
                                    <div>
                                        <div className="text-[#99a1b3] uppercase tracking-wider text-xs font-bold mb-1">
                                            Name
                                        </div>
                                        <div className="text-[#f6f7f9]">
                                            "{submittedData.name}"
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[#99a1b3] uppercase tracking-wider text-xs font-bold mb-1">
                                            Email
                                        </div>
                                        <div className="text-[#f6f7f9]">
                                            "{submittedData.email}"
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[#99a1b3] uppercase tracking-wider text-xs font-bold mb-1">
                                            Message
                                        </div>
                                        <div className="text-[#f6f7f9] whitespace-pre-wrap">
                                            "{submittedData.message}"
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[#5e6677]">
                                <div className="text-center">
                                    <p className="font-medium text-sm">Submit form to view data</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Code Example */}
            <div className="mt-12">
                <CodeBlock
                    code={`import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GeezInput, GeezTextArea } from 'geez-input';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GeezInput {...register('name')} placeholder="Name..." />
      {errors.name && <span>{errors.name.message}</span>}
      
      <input {...register('email')} type="email" />
      {errors.email && <span>{errors.email.message}</span>}
      
      <GeezTextArea {...register('message')} rows={5} />
      {errors.message && <span>{errors.message.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}`}
                    language="tsx"
                    filename="ContactForm.tsx"
                />
            </div>
        </div>
    );
}
