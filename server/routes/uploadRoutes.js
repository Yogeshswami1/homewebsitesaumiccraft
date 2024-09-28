import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image', error });
  }
});

export default router;
