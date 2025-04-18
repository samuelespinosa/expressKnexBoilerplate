import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './src/routes/index.js';


const app = express();


app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);

//error handling middleware
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.details[0].message });
    }
    res.status(500).json({ message: 'Server error' });
});

export default app;