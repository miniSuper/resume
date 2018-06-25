<template>
  <div class="design">
    <scroll class="design-content" :data="playerOptions" ref="scroll">
      <div class="content-items">
        <div class="video-item">
          <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions[0]" :playsinline="true" customEventName="customstatechangedeventname">
          </video-player>
        </div>
        <div class="video-item">
          <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions[1]" :playsinline="true" customEventName="customstatechangedeventname">
          </video-player>
        </div>
        <div class="video-item">
          <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions[2]" :playsinline="true" customEventName="customstatechangedeventname">
          </video-player>
        </div>
        <div class="code-item">
          <div class="pic minghe"></div>
          <div class="text">企业官网/响应式</div>
        </div>
        <div class="code-item">
          <div class="pic wechat"></div>
          <div class="text">微信小程序</div>
        </div>
        <!-- <div class="code-item">
          <div class="pic"></div>
          <div class="text">vue外卖App/练手项目</div>
        </div> -->
        <div class="code-item">
          <div class="pic music"></div>
          <div class="text">vue音乐App/练手项目</div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
export default {
  data () {
    return {
      videoList: [
        '../../assets/video/dr_news.mp4',
        '../../assets/video/91launcher.mp4',
        '../../assets/video/clean_faster.mp4',
        '../../assets/video/clean_v3.mp4',
        '../../assets/video/g5.mp4'
      ],
      playerOptions: [
        {
        // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: '/static/video/dr_news.mp4'
          }],
          poster: '/static/img/news.png',
          height: 200
        },
        {
        // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: '/static/video/clean_faster.mp4'
          }],
          // poster: '/static/images/author.jpg'
          height: 200
        },
        {
        // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            src: '/static/video/clean_v3.mp4'
          }],
          // poster: '/static/images/author.jpg'
          height: 200
        }

      ]
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  },
  components: {
    Scroll
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/mixin'

.design
  position fixed
  width 100%
  top 0
  bottom 70px

  .design-content
    height 100%
    overflow hidden

    .content-items
      display flex
      flex-flow column nowrap
      align-items center
      justify-content center
      width 100%

      .video-item
        width 90%
        height 200px
        overflow hidden
        margin 40px 0
        box-shadow 0px 6px 30px #c7d0d3
        border-radius 8px

      .code-item
        margin-bottom 60px

        .pic
          display block
          width 160px
          height 160px
          background-size cover
          box-shadow 0px 6px 30px #c7d0d3

          &.minghe
            bg-image('minghe')

          &.wechat
            bg-image('wechat')

          &.music
            bg-image('music')

        .text
          margin-top 20px
          font-size 14px
</style>
