import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    findByName(name: string): Specification
    list(): Specification[]
    create({ name, description }: ICreateSpecificationDTO): void
}

export { ICreateSpecificationDTO, ISpecificationRepository }