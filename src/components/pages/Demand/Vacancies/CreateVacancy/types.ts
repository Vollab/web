export interface IFormData {
  name: string
  city: string
  state: string
  work_mode: string
  description: string
}

export interface ICreateVacancyProps {
  closeModal: () => void
}
