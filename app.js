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

  app.use((err, req, res, next) => {
    
    if (err?.details && err.details.body) {
      const messages = err.details.body.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));
  
      return res.status(400).json({
        message:"Validation Error",
        errors: messages,
      });
    }
    console.error('Unhandled error:', err);
    return res.status(500).json({
      message: 'Internal Server Error',
      details: err?.message || 'Unknown error',
    });
  });
  


  
export default app;