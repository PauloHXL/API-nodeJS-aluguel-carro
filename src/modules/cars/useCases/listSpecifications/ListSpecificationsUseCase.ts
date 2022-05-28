import { Specification } from "../../model/Specification"
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository"




class ListSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) { }
    execute(): Specification[] {
        const specification = this.specificationRepository.list()
        return specification
    }
}



export { ListSpecificationUseCase }