import * as types from './mutation-types'
import { shuffle } from 'common/js/util'
export const playSong = ({ commit, state }, { list, index }) => {
  let randomList = shuffle(list)
  commit(types.SET_URL_LIST, randomList)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_PLAYING_STATE, true)
}
