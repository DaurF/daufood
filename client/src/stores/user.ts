import {computed, ref} from 'vue';
import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userId = ref(null)
  const username = ref(null)
  const email = ref(null)

  function setUser(data) {
    userId.value = data.userId
    username.value = data.username
    email.value = data.email
  }

  function unsetUser() {
    userId.value = null
    username.value = null
    email.value = null
  }

  const loggedIn = computed(() => userId.value && username.value && email.value)

  return {userId, username, email, setUser, loggedIn, unsetUser}
})
