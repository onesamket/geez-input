import { Outlet, createRootRoute } from '@tanstack/react-router'
import { GeezModeProvider } from '../providers/geez-mode-provider'

export const Route = createRootRoute({
  component: () => (
    <GeezModeProvider>
      <Outlet />
    </GeezModeProvider>
  ),
})
