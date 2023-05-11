import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
  return (
    <Meta
      title="watch online cinema"
      description="watch online cinema and TV on the site and TV on the site and TV on the siteand TV on the siteand TV on the siteand TV on the siteand TV on the siteand TV on the site"
    >
      <Heading
        title="Watch movie cinema"
        className="text-gray-300 mb-8 text-xl"
      />
    </Meta>
  )
}

export default Home
