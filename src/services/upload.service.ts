import { BadRequestException } from '../common/exceptions/httpException';
import { imageMetaDataRepository } from '../repositories';

export class UploadService {
  constructor(private imageMetaDataRepo = imageMetaDataRepository) { }

  async upload(file: Express.Multer.File | undefined) {
    if (!file) throw new BadRequestException('Error uploading file');

    const image = await this.imageMetaDataRepo.create({
      url: `/uploads/${file.filename}`,
      mimetype: file.mimetype,
      size: file.size
    });

    return image;
  }
}

const defaultUploadService = new UploadService();
export default defaultUploadService;