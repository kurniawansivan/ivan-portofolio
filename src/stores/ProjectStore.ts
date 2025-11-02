import { defineStore } from 'pinia'
import type { Project } from '@/types/Project'

// 1. Import our mock data. We'll load it into the store.
import { projects as mockProjects } from '@/data/projects'

// 2. Define the store
export const useProjectStore = defineStore('projects', {

    // 3. STATE: This is the actual data
    state: () => ({
        projects: mockProjects as Project[],
        // In a real app, this might start as []
        // and be filled by an API call in an 'action'
    }),

    // 4. GETTERS: These are like computed properties for the store
    getters: {
        // A getter that takes an argument (the ID)
        getProjectById: (state) => {
            return (id: number): Project | undefined => {
                return state.projects.find(p => p.id === id)
            }
        }
    },

    // 5. ACTIONS: These are functions that change the state
    // (We aren't adding actions yet, but this is where they would go)
    actions: {
        // async fetchProjects() {
        //   this.projects = await fetch('/api/projects').then(res => res.json())
        // }
    }
})