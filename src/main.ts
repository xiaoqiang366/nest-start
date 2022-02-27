import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // 白名单删除多余的字段
    transform: true, // 请求参数转换为dto对象实例
    forbidNonWhitelisted: true // 多余字段禁止传入
  }));
  await app.listen(3000, '0.0.0.0', async () => {
    console.log(`The server is running at ${await app.getUrl()}.`);
  });
}
bootstrap();
 