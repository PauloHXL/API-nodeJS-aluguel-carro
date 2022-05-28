import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) { }
    execute({ name, description }: IRequest): void {

        const specificationAlreadyExists = this.specificationRepository.findByName(name)
        if (specificationAlreadyExists) {
            throw new Error("Especialização já existe!")

        }
        this.specificationRepository.create({ name, description })
    }
}



export { CreateSpecificationUseCase }