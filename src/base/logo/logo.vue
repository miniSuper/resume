<template>
  <div class="logo" v-show="showFlag">
    <div class="logo-content" :class="addCls">
      <div class="logo-img" :class="getShineCls">
      </div>
    </div>
    <!-- <music-btn class="music-btn"></music-btn> -->
  </div>
</template>

<script type="text/ecmascript-6">
// import MusicBtn from 'base/music-btn/music-btn'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      showFlag: true
    }
  },
  computed: {
    addCls () {
      return this.playing ? 'play' : 'play pause'
    },
    getShineCls () {
      return this.playing ? 'play' : ''
    },
    ...mapGetters([
      'playing'
    ])
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/mixin'

.logo
  width 100%
  position relative
  margin-bottom 20px

  .logo-content
    position relative
    width 20%
    padding-top 20%
    height 0
    display inline-block
    margin 0 auto

    .logo-img
      position absolute
      top -4px
      left -4px
      width 100%
      height 100%
      border-radius 50%
      bg-image('head')
      background-size cover
      border 4px solid #9949fe

      &.play
        animation shine 1s ease alternate infinite

    &.play
      animation rotate 20s linear infinite

    &.pause
      animation-play-state paused

@keyframes rotate
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)

@keyframes shine
  0%
    box-shadow 0px 0px 0px #ffe70d

  100%
    box-shadow 0px 0px 50px #ffe70d
</style>
