<template>
  <div class="tab">
    <!-- <div class="tab-item job">
      <span class="icon" :class="{'icon-active':currentIndex === 0}"></span>
      <span class="text">experience</span>
    </div>
    <div class="tab-item design">
      <span class="icon" :class="{'icon-active':currentIndex === 1}"></span>
      <span class="text">deisign</span>
    </div>
    <div class="tab-item contact">
      <span class="icon" :class="{'icon-active':currentIndex === 2}"></span>
      <span class="text">contact</span>
    </div> -->
    <div class="tab-item" :class="item" v-for="(item,index) in tabList" :key="index" @click="tabClick(index)">
      <span class="icon" :class="{'icon-active':currentIndex === index}"></span>
      <span class="text">{{item}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      tabList: ['experience', 'design', 'contact'],
      currentIndex: 0
    }
  },
  watch: {
    currentIndex (newIndex, oldIndex) {
      if (newIndex === oldIndex) {
        return
      }
      if (newIndex === 0) {
        this.$router.push('/timeline')
      } else if (newIndex === 1) {
        this.$router.push('/design')
      } else if (newIndex === 2) {
        this.$router.push('/contact')
      }
    }
  },
  methods: {
    tabClick (index) {
      this.currentIndex = index
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/mixin'
@import '~common/stylus/variable'

.tab
  position fixed
  bottom 0
  width 100%
  height 70px
  display flex
  flex-flow row nowrap
  justify-content space-between
  align-items flex-end
  background-color #fff

  .tab-item
    width 100%
    height 100%
    display flex
    flex-flow column nowrap
    justify-content space-between
    align-items center

    .icon
      width 100%
      height 54px
      // padding-top 48%
      background-repeat no-repeat
      background-size 34px 34px
      background-position center

    .text
      // display inline-block
      position relative
      top -6px
      font-size $font-size-medium
      color #000

  .experience
    .icon
      bg-image('tab1')

      &.icon-active
        bg-image('tab1_sel')

  .design
    .icon
      bg-image('tab2')

      &.icon-active
        bg-image('tab2_sel')

  .contact
    .icon
      bg-image('tab3')

      &.icon-active
        bg-image('tab3_sel')
</style>
