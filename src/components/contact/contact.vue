<template>
  <div class="contact">
    <div class="info">
      <div class="info-item" :class="key" v-for="(value,key) in info" :key="value">
        <span class="icon" :class="getIconCls(key)">
        </span>
        <span class="text">
          {{value}}
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      info: {
        qq: '516143986',
        wechat: 'walkon365',
        phone: '130-6733-9136'
      }
    }
  },
  methods: {
    getIconCls (val) {
      return `icon-${val}`
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/mixin'

.contact
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center

  .info
    width 80%

    .info-item
      display flex
      justify-content space-between
      background-color #ffffff
      border-radius 4px
      margin 60px 0

      &.qq
        border 1px solid #4fd4ff
        box-shadow 0px 6px 30px #4fd4ff

      &.wechat
        border 1px solid #4becd7
        box-shadow 0px 6px 30px #4becd7

      &.phone
        border 1px solid #ff91d7
        box-shadow 0px 6px 30px #ff91d7

      .icon
        flex 0 0 80px
        height 60px
        background-repeat no-repeat
        background-position center
        background-size 24px 24px

        &.icon-qq
          bg-image('qq')
          background-color #4fd4ff

        &.icon-wechat
          bg-image('wechat')
          background-color #4becd7

        &.icon-phone
          bg-image('phone')
          background-color #ff91d7

      .text
        flex 1
        line-height 60px
        text-align left
        font-size 22px
        padding-left 40px
</style>
