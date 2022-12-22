import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { IDataServicesCrud, PublicationEntity } from 'src/core';
import { CreatePublicationDTO, UpdatePublicationDTO } from 'src/core/dto';
import { PublicationFactoryService } from './publication-factory.service';

@Injectable()
export class PublicationUseCase {
  constructor(
    private dataServiceCrud: IDataServicesCrud,
    private publicationFactory: PublicationFactoryService,
  ) {}

  getAllPublications(): Promise<PublicationEntity[]> {
    return this.dataServiceCrud.publications.getAll();
  }

  getPublicationById(id: any): Promise<PublicationEntity> {
    return this.dataServiceCrud.publications.get(id);
  }

  createPublication(createPublication: CreatePublicationDTO): Promise<PublicationEntity> {
    const publication = this.publicationFactory.createNewPublication(createPublication);
    return this.dataServiceCrud.publications.create(publication);
  }

  updatepublication(publicationId: string, updatepublication: UpdatePublicationDTO): Promise<PublicationEntity>{
    const publication = this.publicationFactory.updatePublication(updatepublication)
    return this.dataServiceCrud.publications.update(publicationId, publication)
  }
}