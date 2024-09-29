import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  teste(): string {
    return 'teste';
  }
}
