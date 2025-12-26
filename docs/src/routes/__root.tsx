import { Outlet, createRootRoute } from '@tanstack/react-router'
import { GeezModeProvider } from '../providers/geez-mode-provider'
import { FrameworkProvider } from '../providers/framework-provider'

export const Route = createRootRoute({
  component: () => (
    <FrameworkProvider>
      <GeezModeProvider>
        <Outlet />
      </GeezModeProvider>
    </FrameworkProvider>
  ),
})
