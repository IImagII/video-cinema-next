import { FC } from 'react'

//второй заголовок который применятся в админке в Statistic.tsx
const SubHeading: FC<{ title: string }> = ({ title }) => {
  return <h2 className="text-white text-opacity-80 font-semibold">{title}</h2>
}

export default SubHeading
