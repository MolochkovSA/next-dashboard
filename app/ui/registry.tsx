'use client'

import styled from 'styled-components'
import { PortalThemeProvider } from '@pochta/ui/themes/portal'
import { MapHomeAltHierarchicalIcon } from '@pochta/react-icons'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

export const Registry = () => (
  <Wrapper>
    <PortalThemeProvider withFonts>
      Hello World! <MapHomeAltHierarchicalIcon size="inherit" color={'palettes.text.brand.deep.base'} />
    </PortalThemeProvider>
  </Wrapper>
)
