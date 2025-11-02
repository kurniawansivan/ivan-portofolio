import { defineStore } from 'pinia'
import type { Article } from '@/types/Article'
import { articles as mockArticles } from '@/data/articles'
export const useArticleStore = defineStore('articles', {

    state: () => ({
        articles: mockArticles as Article[]
    }),
    getters: {
        getArticleById: (state) => {
            return (id: number): Article | undefined => {
                return state.articles.find(articles => articles.id === id)
            }
        }
    },
    actions: {
    }
})