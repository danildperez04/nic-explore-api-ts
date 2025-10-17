import { Department } from '../entities/department.entity';
import { dataSource } from '../config/database';
import { IRepository } from './IRepository';

const departmentRepository = dataSource.getRepository(Department);

export class DepartmentRepository implements IRepository<Department> {
  async findAll(): Promise<Department[]> {
    return departmentRepository.find({ relations: ['places'] });
  }

  async findOne(id: number): Promise<Department | null> {
    const department = await departmentRepository.findOneBy({ id });
    return department;
  }

  async create(data: Partial<Department>): Promise<Department> {
    const entity = departmentRepository.create(data as Department);
    return departmentRepository.save(entity);
  }

  async update(id: number, data: Partial<Department>): Promise<Department | null> {
    const existing = await departmentRepository.findOneBy({ id });
    if (!existing) return null;

    departmentRepository.merge(existing, data);
    return departmentRepository.save(existing);
  }

  async remove(id: number): Promise<boolean> {
    const existing = await departmentRepository.findOneBy({ id });
    if (!existing) return false;

    await departmentRepository.delete(id);
    return true;
  }
}

const defaultDepartmentRepository = new DepartmentRepository();
export default defaultDepartmentRepository;
