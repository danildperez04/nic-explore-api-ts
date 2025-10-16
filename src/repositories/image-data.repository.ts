import { dataSource } from '../config/database';
import { ImageMetaData } from '../entities/image-metadata.entity';

const imageMetaDataRepository = dataSource.getRepository(ImageMetaData);

export class ImageMetaDataRepository {
  constructor(private repository = imageMetaDataRepository) { }

  async create(imageMetaData: Partial<ImageMetaData>): Promise<ImageMetaData> {
    const image = this.repository.create(imageMetaData);
    return this.repository.save(image);
  }

}

const defaultUserRepository = new ImageMetaDataRepository();
export default defaultUserRepository;