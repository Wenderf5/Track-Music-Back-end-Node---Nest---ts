import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: ["https://track-music-client.vercel.app", "http://localhost:5173"]
  };
  app.enableCors(corsOptions);
  await app.listen(8080, () => {
    console.log("Server running!");
  });
}
bootstrap();
