import { createFileRoute } from '@tanstack/react-router';
import CodeBlock from '../../components/code-block';

export const Route = createFileRoute('/docs/getting-started')({
    component: GettingStartedPage,
});

function GettingStartedPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-[#f6f7f9] mb-6">Getting Started</h1>

            <p className="text-lg text-[#ebecf0] mb-8 leading-relaxed">
                Get up and running with Geez Input in minutes. This guide will help you install the library
                and start using it in your React application.
            </p>

            <section id="installation" className="mb-12">
                <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Installation</h2>
                <p className="text-[#ebecf0] mb-6">
                    Add the package to your project using your preferred package manager.
                </p>

                <div className="space-y-4">
                    <CodeBlock code="npm install geez-input" language="bash" />
                    <CodeBlock code="bun add geez-input" language="bash" />
                    <CodeBlock code="yarn add geez-input" language="bash" />
                    <CodeBlock code="pnpm add geez-input" language="bash" />
                </div>
            </section>

            <section id="quick-start" className="mb-12">
                <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Quick Start</h2>
                <p className="text-[#ebecf0] mb-6">
                    The fastest way to get started is using the React components. Import and use them just like
                    regular input elements.
                </p>

                <CodeBlock
                    code={`import { GeezInput, GeezTextArea } from "geez-input/react";

function App() {
  return (
    <div>
      <GeezInput placeholder="Type in Geez..." />
      <GeezTextArea placeholder="Write longer text..." rows={5} />
    </div>
  );
}`}
                    language="tsx"
                    filename="App.tsx"
                />
            </section>

            <section id="what-next" className="mb-12">
                <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">What's Next?</h2>
                <p className="text-[#ebecf0] mb-6">
                    Now that you've installed Geez Input, explore the documentation to learn more:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#ebecf0] ml-4">
                    <li>
                        <a href="/docs/react" className="text-[#149eca] hover:underline">
                            React Guide
                        </a>{' '}
                        - Learn about React components and hooks
                    </li>
                    <li>
                        <a href="/docs/core" className="text-[#149eca] hover:underline">
                            Core Engine
                        </a>{' '}
                        - Use the framework-agnostic core engine
                    </li>
                    <li>
                        <a href="/docs/guide" className="text-[#149eca] hover:underline">
                            Phonetic Guide
                        </a>{' '}
                        - Learn how to type in Geez script
                    </li>
                </ul>
            </section>
        </div>
    );
}

