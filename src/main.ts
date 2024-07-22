import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const CorsOptions: CorsOptions =  {
    origin: ["https://track-music-client.vercel.app", "http://localhost:5173"]
  }
  app.enableCors(CorsOptions);
  await app.listen(8080, ()=>{
    console.log("Server running!")
  });
}
bootstrap();
