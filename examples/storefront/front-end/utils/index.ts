/**
 * @description Helper to get navigation list from path
 * @param path string
 * @returns array of navigation items
 */
export const getNavigationList = (path: string) => {
  if (!path || path === '/') return []

  const paths = path.split('/').filter(Boolean)
  let currentPath = ''

  return paths.map((p) => {
    currentPath += `/${p}`
    return {
      name: p,
      href: currentPath,
    }
  })
}
