import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isLoading: true,
    isNavScrolled: false,
    isMobileMenuOpen: false,
    activeModal: null as string | null,
  }),
  actions: {
    setNavScrolled(val: boolean) {
      this.isNavScrolled = val
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    openModal(id: string) {
      this.activeModal = id
    },
    closeModal() {
      this.activeModal = null
    },
    finishLoading() {
      this.isLoading = false
    },
  },
})
