import ReversedTextRoutes from './apiServices/reversedText/routes/reversed-text.routes'

export default (app) => {
  app.use('/', ReversedTextRoutes)
}
