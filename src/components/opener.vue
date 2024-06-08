<template>
  <div>
    <AnimatedDisplay />
  </div>
</template>

<script>
import { Display } from 'react-7-segment-display'
import { animated, useSpring } from 'react-spring'
import { defineComponent } from 'vue'

const AnimatedDisplay = animated(Display)

const { number } = useSpring({
  from: { number: 0 },
  to: { number: 100 },
  config: { duration: 2000 }
})

export default defineComponent({
  name: 'Opener',
  mounted() {
    this.renderReactComponent()
  },
  methods: {
    renderReactComponent() {
      ReactDOM.render(
        React.createElement(
          AnimatedDisplay({
            height: 150,
            value: () => number.to((value) => Math.round(value).toString())
          })
        ),
        this.$refs.reactContainer
      )
    }
  },
  beforeUnmount() {
    ReactDOM.unmountComponentAtNode(this.$refs.reactContainer)
  }
})
</script>
