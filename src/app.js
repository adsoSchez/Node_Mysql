import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import proveedoresRoutes from './routes/proveedores.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use('/api', employeesRoutes)
app.use('/api', proveedoresRoutes)
app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'enpoint not found again'
    })
})

export default app