import { NextPage } from 'next'

import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Error500 = () => {
  return (
    <Meta title="Page not found">
      <Heading title="500 - Page Not Found" />
    </Meta>
  )
}

export default Error500
