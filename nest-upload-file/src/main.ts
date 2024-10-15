import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule, {
    cors: true,
  });
  // 创建静态资源
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
