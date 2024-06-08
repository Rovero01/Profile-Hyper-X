import { constants } from '@/constatns/constants'
import { defineStore } from 'pinia'

interface State {
  opener: boolean
  topbar: boolean
  content: boolean
}

export const useCounterStore = defineStore({
  id: 'counter',
  state: (): State => ({
    opener: true,
    topbar: false,
    content: false
  }),
  actions: {
    setTrue(input: string) {
      switch (input) {
        case constants.content:
          this.content = !this.content
          break
        case constants.opener:
          this.opener = !this.opener
          break
        case constants.topbar:
          this.topbar = !this.topbar
          break

        default:
          break
      }
    }
  }
})
