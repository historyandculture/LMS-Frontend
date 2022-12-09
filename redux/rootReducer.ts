import { CombinedState } from 'redux'
import { AnyAction, combineReducers } from 'redux'

interface ReducerState {}

const rootReducer = (
  state: ReducerState | undefined,
  action: AnyAction
): CombinedState<ReducerState> => {
  const combinedReducer = combineReducers({})
  return combinedReducer(state, action)
}

export default rootReducer
