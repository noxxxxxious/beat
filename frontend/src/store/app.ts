// Utilities
import { defineStore } from 'pinia'
import { DashboardView } from '@/assets/enums'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentDashboardView: DashboardView.Organizations
  }),
  getters: {
    getCurrentDashboardView: (state) => state.currentDashboardView
  },
  actions: {
    setCurrentDashboardView(inView: DashboardView) {
      this.currentDashboardView = inView
    },
    nextDashboardView() {
      this.currentDashboardView++
      //TODO: Change this to Result once implemented
      if(this.currentDashboardView > DashboardView.Review)
        this.currentDashboardView = DashboardView.Review
    },
    previousDashboardView() {
      this.currentDashboardView--
      if(this.currentDashboardView < DashboardView.Organizations)
        this.currentDashboardView = DashboardView.Organizations
    }
  }
})
