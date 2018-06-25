<template>
  <div class="timeline" ref="timeline">
    <logo ref="logo"></logo>
    <!-- <card class="card" :themeColor="themeColor.one" :time="time[0]"></card> -->
    <!-- <card class="card" :themeColor="themeColor.two" :time="time[1]"></card>
    <card class="card" :themeColor="themeColor.three" :time="time[2]"></card> -->
    <card @onShowDetail="onShowDetail" v-for="(item,index) in job" :key="item.id" :ref="getCardRef(index)" :cardIndex="index" :themeColor="themeColor[index]" :time="job[index].time" :company="job[index].company" :detail="job[index].detail"></card>
  </div>
</template>

<script type="text/ecmascript-6">
import Card from 'base/card/card'
import Logo from 'base/logo/logo'
import {mapGetters, mapMutations} from 'vuex'
export default {
  data () {
    return {
      themeColor: [
        '#ff8beb',
        '#8bcaff',
        '#4becd7'
      ],
      time: [
        {
          startTime: '2015/7',
          endTime: '2016/1'
        },
        {
          startTime: '2016/4',
          endTime: '2017/4'
        },
        {
          startTime: '2017/9',
          endTime: '2018/3'
        }
      ],
      job: []
    }
  },
  computed: {
    ...mapGetters(['playBtn'])
  },
  methods: {
    _getJobsInfo () {
      // this.$http.get('api/job', {
      //   params: {
      //     rand: Date.now()
      //   }
      // }).then(res => {
      //   if (res.data.errno === 0) {
      //     this.job = res.data.data
      //   }
      // })
      this.$http.get('/static/data.json').then(res => {
        this.job = res.data.job
      })
    },
    onShowDetail (index) {
      if (this.currentCardIndex === undefined) {
        this.currentCardIndex = index
        return
      }
      if (index !== this.currentCardIndex) {
        let cardRef = `card${this.currentCardIndex}`
        this.$refs[cardRef][0].hide()
      }
      this.currentCardIndex = index
    },
    getCardRef (index) {
      return `card${index}`
    },
    ...mapMutations({
      'setPlayButton': 'SET_PLAY_BUTTON'
    })
  },
  components: {
    Card,
    Logo
  },
  created () {
    this._getJobsInfo()
    this.setPlayButton(true)
  },
  beforeDestroy () {
    this.setPlayButton(false)
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'

.timeline
  display flex
  flex-flow row wrap
  justify-content center
  color $color-text

  .card
    margin 30px
</style>
