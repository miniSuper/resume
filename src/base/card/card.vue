<template>
  <div class="card">
    <div class="main" ref="main" :style="{'border' :`1px solid ${themeColor}`,'box-shadow': `0px 6px 30px ${themeColor}`  }">
      <div class="time" :style="{'backgroundColor': themeColor}">
        <span class="time-item time-start">{{time[0]}}</span>
        <span class="time-item time-end">{{time[1]}}</span>
      </div>
      <div class="company" :style="{'color': themeColor}">{{company}}</div>
      <div class="see-more" :style="{'backgroundColor': themeColor}" @click="show">
        查看
      </div>
      <transition name="shadow-fade">
        <div class="shadow" v-show="showFlag">
          hhdlldlslsll
        </div>
      </transition>
    </div>
    <transition name="detail-jump">
      <div class="detail" v-show="showFlag">
        <div class="detail-item" v-for="(value,key,index) in detail" :key="index">
          <h3 class="title">{{key}}</h3>
          <p class="text" v-for="(item,index) in value" :key="index">
            {{item}}
          </p>
        </div>
        <button class="close" @click="hide">关闭</button>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    time: {
      type: Array,
      default () {
        return []
      }
    },
    themeColor: {
      type: String,
      default: '#ff8beb'
    },
    company: {
      type: String,
      default: ''
    },
    detail: {
      type: Object,
      default () {
        return {}
      }
    },
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.$emit('onShowDetail', this.cardIndex)
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'

.card
  width 90%
  height $card-height

  .main
    position relative
    display flex
    flex-flow row wrap
    justify-content space-between
    align-items center
    background-color #fff
    border-radius $card-radius
    width 100%
    height 100%

    .time
      display flex
      flex-flow column wrap
      justify-content center
      align-items center
      width 25%
      height 100%
      border-radius $card-radius 0 0 $card-radius

      .time-item
        width 100%
        font-size $font-size-medium
        padding 5px
        font-weight bold

    .company
      line-height $card-height
      font-size $font-size-medium-x

    .see-more
      width 50px
      height 26px
      font-size $font-size-medium
      margin-right 20px
      line-height 26px
      border-radius 4px
      color #ffffff

    .shadow
      position absolute
      top 0
      left 5%
      width 90%
      height 100%
      box-shadow 0px 6px 30px $color-theme-r
      background-color transparent
      z-index -1

    &.shadow-fade-active, &.shadow-fade-leave-active
      all 0.5s

    &.shadow-enter, &.shadow-fade-leave-to
      opacity 0

  .detail
    position fixed
    top 0px
    left 0
    width 100%
    height 100%
    box-sizing border-box
    z-index 200
    background-color #f5f6f7
    padding 20px 50px
    color $color-text-dark
    border 1px solid #555

    &.detail-jump-enter-active
      animation zoom 0.3s cubic-bezier(0.5, 0.01, 0.18, 1)

    &.detail-jump-leave-active
      animation zoom 0.3s reverse cubic-bezier(0.5, 0.01, 0.18, 1)

    .detail-item
      display flex
      flex-flow column nowrap
      align-items flex-start
      margin-top 30px

      .title
        font-size 30px
        position relative
        margin 30px 0
        display inline-block

        &::after
          display block
          position absolute
          top 10px
          z-index -1
          left 15px
          content ''
          width 80px
          height 30px
          background #fff240

      .text
        font-size $font-size-large-x
        padding 10px 0

    .close
      position absolute
      right 60px
      bottom 30px
      background-color #333
      color #ffffff
      padding 6px 18px
      font-size $font-size-large
      border 0 none

@keyframes zoom
  0%
    transform scale(0)

  50%
    transform scale(1.1)

  100%
    transform scale(1)
</style>
