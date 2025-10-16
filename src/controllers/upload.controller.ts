import { Request, Response } from 'express';
import { uploadService } from '../services';

export class UploadController {
  constructor(private service = uploadService) { }
  upload = async (req: Request, res: Response) => {
    const file = req['file'];

    const image = await this.service.upload(file);

    res.json(image);
  };
}

const defaultUploadController = new UploadController();
export default defaultUploadController;