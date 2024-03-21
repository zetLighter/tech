import {Injectable} from '@nestjs/common'

@Injectable()
export class AppService {
  getMethod() {
    return 1 + 1
  }
}

