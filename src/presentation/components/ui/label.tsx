import React from 'react'
import { Label as ShadcnLabel } from '../../../components/ui/label'

export type LabelProps = React.ComponentProps<typeof ShadcnLabel>

export function Label(props: LabelProps) {
  return <ShadcnLabel {...props} />
}

export default Label
