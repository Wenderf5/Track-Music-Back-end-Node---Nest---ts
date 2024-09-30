import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://track-music.vercel.app'
  });
  const PORT = 8080;
  await app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
}
bootstrap();