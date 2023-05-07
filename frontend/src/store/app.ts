// Utilities
import { defineStore } from 'pinia'
import { DashboardView } from '@/assets/enums'
import { Org, UserAccount } from '@/assets/interfaces'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentDashboardView: DashboardView.Organizations,
    selectedOrganization: <Org>{}, //onmicrosoft domain
    selectedOperation: '',
    selectedAccounts: <UserAccount[]>[]
  }),
  getters: {
    getCurrentDashboardView:  (state) => state.currentDashboardView,
    getSelectedOrganization:  (state) => state.selectedOrganization,
    getSelectedOperation:     (state) => state.selectedOperation,
    getSelectedAccounts:      (state) => state.selectedAccounts
  },
  actions: {
    setCurrentDashboardView(inView: DashboardView) { this.currentDashboardView = inView },
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
    },
    setSelectedOrganization(inOrgId: Org)           { this.selectedOrganization = inOrgId },
    setSelectedOperation(inOp: string)              { this.selectedOperation = inOp },
    setSelectedAccounts(inAccounts: UserAccount[])  { this.selectedAccounts = inAccounts }
  }
})
