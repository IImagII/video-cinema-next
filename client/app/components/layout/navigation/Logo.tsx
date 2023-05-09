import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LOGO from '@/assets/images/logo.svg'

const Logo: FC = () => {
  return (
    <Link href="/" className="px-layout mb-10 block">
      {/* draggable - это длят ого чтобы отключить перетаскивание изображения */}
      <Image src={LOGO} alt="logo" width={247} height={34} draggable={false} />
    </Link>
  )
}

export default Logo
