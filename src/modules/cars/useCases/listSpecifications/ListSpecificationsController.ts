import { Request, Response } from "express"
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase"

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) { }
    handle(request: Request, response: Response): Response {
        const listAll = this.listSpecificationUseCase.execute()
        return response.status(200).json(listAll)
    }
}

export { ListSpecificationController }