// Utilities
import { defineStore } from 'pinia'
import { DashboardView } from '@/assets/enums'
import { Org, UserAccount, Operation } from '@/assets/interfaces'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentDashboardView: DashboardView.Result,
    selectedOrganization: <Org>{}, //onmicrosoft domain
    selectedOperation: <Operation>{},
    selectedAccounts: <UserAccount[]>[],
    powershellOutput: <string[]>[],
    ticketNotes: <string[]>[],
    isPerformingOperation: false
  }),
  getters: {
    getCurrentDashboardView:    (state) => state.currentDashboardView,
    getSelectedOrganization:    (state) => state.selectedOrganization,
    getSelectedOperation:       (state) => state.selectedOperation,
    getSelectedAccounts:        (state) => state.selectedAccounts,
    getSelectedAccountAliases:  (state) => state.selectedAccounts.map((account) => account.alias),
    getPowershellOutput:        (state) => state.powershellOutput,
    getTicketNotes:             (state) => state.ticketNotes,
    getIsPerformingOperation:   (state) => state.isPerformingOperation
  },
  actions: {
    setCurrentDashboardView(inView: DashboardView) { this.currentDashboardView = inView },
    nextDashboardView() {
      this.currentDashboardView++
      if(this.currentDashboardView > DashboardView.Result)
        this.currentDashboardView = DashboardView.Result
    },
    previousDashboardView() {
      this.currentDashboardView--
      if(this.currentDashboardView < DashboardView.Organizations)
        this.currentDashboardView = DashboardView.Organizations
    },
    setSelectedOrganization(inOrgId: Org)           { this.selectedOrganization = inOrgId },
    setSelectedOperation(inOp: Operation)           { this.selectedOperation    = inOp },
    setSelectedAccounts(inAccounts: UserAccount[])  { this.selectedAccounts     = inAccounts },
    setPowershellOutput(inOutput: string[])         { this.powershellOutput     = inOutput },
    setTicketNotes(inNotes: string[])               { this.ticketNotes          = inNotes },
    setIsPerformingOperation(inBool: boolean)       { this.isPerformingOperation = inBool },

    performOperation(){
      this.setIsPerformingOperation(true)

      const fetchOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({operation: this.getSelectedOperation.name, accounts: this.getSelectedAccountAliases})
      }
  
      fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/api/operate/${this.getSelectedOrganization.domain}`, fetchOptions)
      .then(data => data.json())
      .then(result => {
        console.log(result)
      })
    }
  }
})
