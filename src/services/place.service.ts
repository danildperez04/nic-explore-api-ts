import { Place } from '../entities/place.entity';
import { placeRepository } from '../repositories';
import { IService } from './IService';
import { NotFoundException } from '../common/exceptions/httpException';
import { CreatePlaceDto, UpdatePlaceDto } from '../dtos/place.dto';

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

  async create(data: CreatePlaceDto): Promise<Place> {
    const place = await this.repository.create(data);
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
}

const defaultPlaceService = new PlaceService();
export default defaultPlaceService;
