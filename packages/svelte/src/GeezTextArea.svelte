<script lang="ts">
  import { useGeez } from "./use-geez";

  interface Props {
    value?: string;
    placeholder?: string;
    mode?: "geez" | "latin";
    className?: string;
  }

  let { value = $bindable(""), placeholder = "", mode = "geez", className = "", ...rest }: Props = $props();
</script>

<textarea
  bind:value
  {placeholder}
  class={className}
  use:useGeez={{ mode }}
  {...rest}
></textarea>

<style>
  /* Component styles can be added here if needed */
</style>

