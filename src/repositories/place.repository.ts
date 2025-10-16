import { Place } from '../entities/place.entity';
import { dataSource } from '../config/database';
import { IRepository } from './IRepository';

const placeRepo = dataSource.getRepository(Place);

export class PlaceRepository implements IRepository<Place> {
  constructor(private repository = placeRepo) {}

  async findAll(): Promise<Place[]> {
    return this.repository.find({ relations: ['department', 'placeType'] });
  }

  async findOne(id: number): Promise<Place | null> {
    const place = await this.repository.findOne({ where: { id }, relations: ['department', 'placeType'] });
    return place ?? null;
  }

  async create(data: Partial<Place>): Promise<Place> {
    const entity = this.repository.create(data as Place);
    return this.repository.save(entity);
  }

  async update(id: number, data: Partial<Place>): Promise<Place | null> {
    const existing = await this.repository.findOneBy({ id });
    if (!existing) return null;

    this.repository.merge(existing, data);
    return this.repository.save(existing);
  }

  async remove(id: number): Promise<boolean> {
    const existing = await this.repository.findOneBy({ id });
    if (!existing) return false;

    await this.repository.delete(id);
    return true;
  }
}

const defaultPlaceRepository = new PlaceRepository();
export default defaultPlaceRepository;
