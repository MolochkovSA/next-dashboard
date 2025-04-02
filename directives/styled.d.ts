// portal
import 'styled-components'
import { PortalTheme } from '@pochta/ui/themes/portal'

declare module 'styled-components' {
  export interface DefaultTheme extends PortalTheme {}
}
