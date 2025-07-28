import create from 'zustand'

export type Step = {
  id: number
  action: string
  details: string
  timestamp: number
}

interface State {
  steps: Step[]
  addStep: (step: Step) => void
  clearSteps: () => void
}

export const useStore = create<State>((set) => ({
  steps: [],
  addStep: (step) => set((state) => ({ steps: [...state.steps, step] })),
  clearSteps: () => set({ steps: [] }),
}))
