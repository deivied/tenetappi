import { Injectable } from '@nestjs/common';
import { PublicationEntity } from 'src/core';
import { CreatePublicationDTO, UpdatePublicationDTO } from 'src/core/dto';

@Injectable()
export class PublicationFactoryService {
  createNewPublication(publication: CreatePublicationDTO) {
    const newPublication = new PublicationEntity();
    newPublication.label = publication.label;
    newPublication.description = publication.description;
    newPublication.content = publication.content;
    newPublication.author = publication.author;
    newPublication.createdAt = new Date();
    newPublication.updatedAt = new Date();

    return newPublication;
  }

  updatePublication(publication: UpdatePublicationDTO) {
    const updatePublication = new PublicationEntity();
    updatePublication.label = publication.label;
    updatePublication.description = publication.description;
    updatePublication.updatedAt = new Date();
    return updatePublication;
  }
}
