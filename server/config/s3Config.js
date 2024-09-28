// import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import { S3Client } from '@aws-sdk/client-s3'; // AWS SDK v3 S3 client


dotenv.config();

// Create an S3 client using the AWS SDK v3
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//     region: process.env.AWS_REGION
// });

export default s3;
