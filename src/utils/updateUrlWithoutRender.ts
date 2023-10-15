export const updateUrlWithoutRender = (newUrl: string) => {
  window.history.replaceState(
    { ...window.history.state, as: newUrl, url: newUrl },
    '',
    newUrl
  )
}
