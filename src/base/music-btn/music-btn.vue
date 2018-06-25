<template>
  <div class="music-btn" :class="getBtnCls" @click="togglePlay" v-show="playBtn">
    <audio ref="audio" :src="currentSongUrl"></audio>
  </div>
</template>

<script type="text/ecmascript-6">
import {shuffle} from 'common/js/util'
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  data () {
    return {

    }
  },
  watch: {
    playing (newPlaying) {
      newPlaying ? this.$refs.audio.play() : this.$refs.audio.pause()
    }
  },
  computed: {
    currentSongUrl () {
      return this.urlList[1]
    },
    getBtnCls () {
      return this.playing ? 'play' : 'jjj'
    },
    ...mapGetters([
      // 'playlist',
      // 'sequenceList',
      'urlList',
      'currentIndex',
      'playing',
      'playBtn'
    ])
  },
  methods: {
    togglePlay (event) {
      this.setPlayingState(!this.playing)
      this.$emit('onPlayBtnClick', event.target)
    },
    ...mapMutations({
      // 'setPlaylist': 'SET_PLAYLIST',
      // 'setSequenceList': 'SET_SEQUENCE_LIST',
      'setPlayingState': 'SET_PLAYING_STATE',
      'setUrlList': 'SET_URL_LIST'
    }),
    ...mapActions([
      'playSong'
    ])
  },
  created () {
    this.setUrlList(shuffle([
      '/static/music/1.mp3',
      '/static/music/2.mp3',
      '/static/music/3.mp3',
      '/static/music/4.mp3',
      '/static/music/5.mp3'
    ]))
  },
  mounted () {
    // this.$refs.audio.play()
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/mixin'

.music-btn
  position absolute
  top 30px
  right 30px
  z-index 150
  width 40px
  height 40px
  border-radius 50%
  bg-image('music')
  background-size 30px 30px
  background-repeat no-repeat
  background-position center
  border 1px solid #000

  &.play
    bg-image('play')
</style>
