import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://daufood.vercel.app/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
})
