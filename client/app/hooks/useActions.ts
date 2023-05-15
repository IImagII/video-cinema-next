import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { rootAction } from '@/store/root-actions'

/**хук который позволяет удобно добираться до наших action
 * причем они будут меняться ели у нас будет изменяться dispatch а так они будут
 * браться из кеша так как мы используем хук useMemo
 *
 */
export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}

/**это по сути удобная замена такой записи dispatch(register())
 * теперь эта запись будет выглядить так
 * const {register}=useActions() без использования dispatch он у настут внутри
 * а использовать просто register()
 */
