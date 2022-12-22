import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { CreatePublicationDTO, UpdatePublicationDTO } from 'src/core/dto';
import { PublicationUseCase } from 'src/use-cases/publications/publication.user-case';

@Controller('publications')
export class PublicationController {
  constructor(private publicationUseCase: PublicationUseCase) {}

  @Get()
  async getAll() {
    return this.publicationUseCase.getAllPublications();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.publicationUseCase.getPublicationById(id);
  }

  @Post()
  create(@Body() publication: CreatePublicationDTO) {
    return this.publicationUseCase.createPublication(publication);
  }

  @Put(':id')
  update(@Param('id') publicationId: string, @Body() publication: UpdatePublicationDTO) {
    return this.publicationUseCase.updatepublication(publicationId, publication);
  }
}
