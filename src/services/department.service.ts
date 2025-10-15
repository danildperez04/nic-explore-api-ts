import { Department } from '../entities/department.entity';
import { departmentRepository } from '../repositories';
import { IService } from './IService';
import { NotFoundException } from '../common/exceptions/httpException';

export class DepartmentService implements IService<Department> {
  async findAll(): Promise<Department[]> {
    const deps = await departmentRepository.findAll();
    if (!deps || deps.length === 0) throw new NotFoundException('No departments found');
    return deps;
  }

  async findOne(id: number): Promise<Department | null> {
    const dep = await departmentRepository.findOne(id);
    if (!dep) throw new NotFoundException('Department not found');
    return dep;
  }

  async create(data: Partial<Department>): Promise<Department> {
    return departmentRepository.create(data);
  }

  async update(id: number, data: Partial<Department>): Promise<Department | null> {
    const updated = await departmentRepository.update(id, data);
    if (!updated) throw new NotFoundException('Department not found');
    return updated;
  }

  async remove(id: number): Promise<void> {
    const removed = await departmentRepository.remove(id);
    if (!removed) throw new NotFoundException('Department not found');
  }
}

const defaultDepartmentService = new DepartmentService();
export default defaultDepartmentService;
