import { Place } from '../entities/place.entity';
import { placeRepository } from '../repositories';
import { IService } from './IService';
import { BadRequestException, NotFoundException } from '../common/exceptions/httpException';
import { CreatePlaceDto, UpdatePlaceDto } from '../dtos/place.dto';
import landmarkDetection from '../utils/landmarkDetection';
import { uploadService } from '.';

export class PlaceService implements IService<Place> {
  constructor(private repository = placeRepository) { }

  async findAll(): Promise<Place[]> {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<Place | null> {
    const place = await this.repository.findOne(id);
    if (!place) throw new NotFoundException('Place not found');
    return place;
  }

  async create(data: CreatePlaceDto, file?: Express.Multer.File | undefined): Promise<Place> {
    let place;

    if (!file) {
      place = await this.repository.create(data);

      return place;
    }

    const image = await uploadService.upload(file);

    place = await this.repository.create({ ...data, imagePath: image.url });

    return place;
  }

  async update(id: number, data: UpdatePlaceDto): Promise<Place | null> {
    const updated = await this.repository.update(id, data);
    if (!updated) throw new NotFoundException('Place not found');
    return updated;
  }

  async remove(id: number): Promise<void> {
    const removed = await this.repository.remove(id);
    if (!removed) throw new NotFoundException('Place not found');
  }

  async detectLandmark(file: Express.Multer.File | undefined) {
    if (!file) throw new BadRequestException('File not provided');

    await uploadService.upload(file);

    const result = await landmarkDetection(file);

    return result;
  }
}

const defaultPlaceService = new PlaceService();
export default defaultPlaceService;
