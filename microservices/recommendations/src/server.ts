const express = require('express')
const cors = require('cors')
const recommendationsRoutes = require('./routes/recommendationsRoutes');


const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Register the routes
app.use('/api', recommendationsRoutes);


//port
const PORT = process.env.PORT || 9191

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})