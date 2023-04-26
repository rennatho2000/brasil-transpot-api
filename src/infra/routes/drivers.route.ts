import express, { request, response, Router } from 'express'

const driverRoute = Router()

driverRoute.get('/drivers/:id', (request, response) => {
  return response.send('ola nlw 5')
})

export { driverRoute }
