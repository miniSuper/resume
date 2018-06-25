import * as types from './mutation-types'
const mutations = {
  [types.SET_PLAYLIST] (state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST] (state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_URL_LIST] (state, list) {
    state.urlList = list
  },
  [types.SET_PLAY_BUTTON] (state, flag) {
    state.playBtn = flag
  }
}
export default mutations
