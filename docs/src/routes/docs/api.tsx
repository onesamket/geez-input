import { createFileRoute } from '@tanstack/react-router';
import CodeBlock from '../../components/code-block';

export const Route = createFileRoute('/docs/api')({
  component: ApiPage,
});

function ApiPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-[#f6f7f9] mb-6">API Reference</h1>
      
      <p className="text-lg text-[#ebecf0] mb-8 leading-relaxed">
        Complete API reference for all exports from the Geez Input library.
      </p>

      <section id="react" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">React Package</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">GeezInput</h3>
          <p className="text-[#ebecf0] mb-4">
            React input component with Geez phonetic transformation.
          </p>
          <CodeBlock
            code={`import { GeezInput } from "geez-input/react";
import type { GeezInputProps } from "geez-input/react";

// Props extend HTMLInputElement attributes
interface GeezInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mode?: "geez" | "latin"; // Input mode (default: "geez")
}`}
            language="tsx"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">GeezTextArea</h3>
          <p className="text-[#ebecf0] mb-4">
            React textarea component with Geez phonetic transformation.
          </p>
          <CodeBlock
            code={`import { GeezTextArea } from "geez-input/react";
import type { GeezTextAreaProps } from "geez-input/react";

// Props extend HTMLTextAreaElement attributes
interface GeezTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  mode?: "geez" | "latin"; // Input mode (default: "geez")
}`}
            language="tsx"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">useGeez</h3>
          <p className="text-[#ebecf0] mb-4">
            React hook for custom Geez input implementations.
          </p>
          <CodeBlock
            code={`import { useGeez } from "geez-input/react";

interface UseGeezOptions {
  mode?: "geez" | "latin";
  onTransform?: (result: EngineResult) => void;
}

interface UseGeezReturn {
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function useGeez(options?: UseGeezOptions): UseGeezReturn`}
            language="tsx"
          />
        </div>
      </section>

      <section id="core" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Core Package</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">GeezEngine</h3>
          <p className="text-[#ebecf0] mb-4">
            Core transformation engine class.
          </p>
          <CodeBlock
            code={`import { GeezEngine } from "geez-input/core";

class GeezEngine {
  static transform(
    textBeforeCursor: string,
    textAfterCursor: string,
    key: string
  ): EngineResult;
}`}
            language="ts"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">EngineResult</h3>
          <p className="text-[#ebecf0] mb-4">
            Result object returned by the transform method.
          </p>
          <CodeBlock
            code={`interface EngineResult {
  transformedValue: string;  // The complete transformed text value
  newCursorPosition: number; // The new cursor position after transformation
  isReplacement: boolean;    // Whether this transformation replaced existing characters
}`}
            language="ts"
          />
        </div>
      </section>

      <section id="types" className="mb-12">
        <h2 className="text-2xl font-bold text-[#f6f7f9] mb-4 mt-8">Type Exports</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">React Types</h3>
          <CodeBlock
            code={`import type {
  GeezInputProps,
  GeezTextAreaProps,
} from "geez-input/react";`}
            language="ts"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#f6f7f9] mb-3">Core Types</h3>
          <CodeBlock
            code={`import type {
  EngineResult,
  GeezOptions,
} from "geez-input/core";`}
            language="ts"
          />
        </div>
      </section>
    </div>
  );
}

