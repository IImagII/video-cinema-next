//тут собраны все reducer нашего приложения а поотм передаются в store
import { reducer as toastrReducer } from 'react-redux-toastr'

import { userReducer } from './user/user.slice'

export const reducers = {
  toastr: toastrReducer,
  user: userReducer
}
