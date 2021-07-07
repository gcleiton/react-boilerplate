import React, { SVGProps } from 'react'
import { AvailableIcons, iconsData } from '@/presentation/shared'

type Props = SVGProps<SVGElement> & {
  name: AvailableIcons
}

const Icon: React.FC<Props> = ({ name, ...rest }) => {
  const IconType = iconsData[name]

  return <IconType width={'1rem'} {...rest} />
}

export default Icon
