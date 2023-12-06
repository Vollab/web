export const UseApplication = () => {
  const confirmApplication = (id: string) => {
    console.log(id)
  }

  const cancelApplication = (id: string) => {
    console.log(id)
  }

  return { confirmApplication, cancelApplication }
}
