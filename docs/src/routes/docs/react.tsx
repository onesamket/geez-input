import { createFileRoute } from '@tanstack/react-router';
import CodeBlock from '../../components/code-block';

export const Route = createFileRoute('/docs/react')({
    component: ReactPage,
});

function ReactPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-[#f6f7f9] mb-6">React</h1>

            <p className="text-lg text-[#ebecf0] mb-8 leading-relaxed">
                Geez Input provides ready-to-use React components with full TypeScript support. Use them
                just like regular input elements with automatic phonetic transformation.
            </p>

            <section id="installation" className="mb-12">
                <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Installation</h2>
                <p className="text-[#ebecf0] mb-6">
                    React components are included in the main package. No additional installation needed.
                </p>
                <CodeBlock
                    code={`import { GeezInput, GeezTextArea } from "geez-input/react";`}
                    language="tsx"
                />
            </section>

            <section id="components" className="mb-12">
                <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Components</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">GeezInput</h3>
                    <p className="text-[#ebecf0] mb-4">
                        A styled input component with built-in Geez phonetic keyboard support. Supports all
                        standard HTML input attributes.
                    </p>
                    <CodeBlock
                        code={`import { GeezInput } from "geez-input/react";

function MyForm() {
  return (
    <GeezInput
      placeholder="Enter your name"
      required
      maxLength={50}
      autoComplete="name"
    />
  );
}`}
                        language="tsx"
                        filename="MyForm.tsx"
                    />
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">GeezTextArea</h3>
                    <p className="text-[#ebecf0] mb-4">
                        A styled textarea component for longer text input. Supports all standard HTML textarea
                        attributes.
                    </p>
                    <CodeBlock
                        code={`import { GeezTextArea } from "geez-input/react";

function MyForm() {
  return (
    <GeezTextArea
      placeholder="Write your story..."
      rows={5}
      required
      maxLength={500}
    />
  );
}`}
                        language="tsx"
                        filename="MyForm.tsx"
                    />
                </div>
            </section>

            <section id="controlled-components" className="mb-12">
                <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Controlled Components</h2>
                <p className="text-[#ebecf0] mb-6">
                    Both components support controlled and uncontrolled patterns, just like native React inputs.
                </p>
                <CodeBlock
                    code={`import { GeezInput } from "geez-input/react";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  return (
    <GeezInput
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}`}
                    language="tsx"
                    filename="MyForm.tsx"
                />
            </section>

            <section id="hooks" className="mb-12">
                <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Hooks</h2>
                <p className="text-[#ebecf0] mb-6">
                    For custom implementations, use the <code className="bg-[#343a46] px-1.5 py-0.5 rounded text-sm">useGeez</code> hook.
                </p>
                <CodeBlock
                    code={`import { useGeez } from "geez-input/react";

function CustomInput() {
  const { onKeyDown } = useGeez({
    onTransform: (result) => {
      console.log("Transformed:", result.transformedValue);
    },
  });

  return <input onKeyDown={onKeyDown} />;
}`}
                    language="tsx"
                    filename="CustomInput.tsx"
                />
            </section>

            <section id="examples" className="mb-12">
                <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Examples</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">Form Integration</h3>
                    <p className="text-[#ebecf0] mb-4">
                        Works seamlessly with React Hook Form, Formik, and other form libraries.
                    </p>
                    <CodeBlock
                        code={`import { GeezInput } from "geez-input/react";
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <GeezInput
        {...register("name")}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
                        language="tsx"
                        filename="MyForm.tsx"
                    />
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">TypeScript Support</h3>
                    <p className="text-[#ebecf0] mb-4">
                        Full TypeScript support with autocomplete for all HTML attributes.
                    </p>
                    <CodeBlock
                        code={`import { GeezInput } from "geez-input/react";
import type { GeezInputProps } from "geez-input/react";

function MyForm() {
  return (
    <GeezInput
      type="text"
      placeholder="Your name"
      required
      maxLength={50}
      autoComplete="name"
      autoFocus
      disabled={false}
      readOnly={false}
      name="fullName"
      id="name-input"
      aria-label="Full name input"
      aria-required="true"
      onFocus={(e) => console.log("Focused")}
      onBlur={(e) => console.log("Blurred")}
      onChange={(e) => console.log(e.target.value)}
    />
  );
}`}
                        language="tsx"
                        filename="MyForm.tsx"
                    />
                </div>
            </section>
        </div>
    );
}

