export default (app) => {  
  app.use('/', (req, res) => {
    res.json({message: "Welcome to toolbox."})
  });
}