// Navigation utility to handle page navigation from components
export const navigateTo = (page, setCurrentPage) => {
  setCurrentPage(page)
  window.scrollTo(0, 0)
}
