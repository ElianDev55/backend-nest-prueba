import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

// Cargar variables de entorno
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  // Permitir acceso total a la API desde cualquier origen y sin restricciones
  app.enableCors({
    origin: true,
    methods: '*',
    allowedHeaders: '*',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Restaurant API')
    .setDescription('API for the restaurant')
    .setVersion('1.0')
    .addTag('restaurant')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
