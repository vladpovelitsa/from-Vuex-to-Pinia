import {defineStore} from "pinia";

export const useUserStore = defineStore('userStore', {
    state:() => ({
        user: "Vlad Povelytsia",
    }),
    getters: {
        userFirstName: (state) => state.user.split(' ')[0]
    }
})