`nest new`                  create a new project
## 基础

### controller
controller: something that handle requests application
`nest generate controller hello`   create a controller hello
`nest g co hello --no-spec`        create a controller without spec file

`nest generate controller hello --dry-run` 不会创建任何文件

@Get
    @Query
    @Param
@Post
    @Body

    @Res

@Patch
@Delete

### service

spareate our business logic from our controllers. Service are where the meat of out business logic should be held.

`nest generate service coffees`
`nest g s coffees --no-spec --dry-run`


### module

`nest generate module`
`nest g mo`

### dto
data transfer object

`nest g class coffees/dto/create-coffee.dto --no-spec`
`nest g cl coffees/dto/create-coffee.dto --no-spec`

### 数据校验

`npm i class-validator class-transformer`

```javascript
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({
      whitelist: true, // 字段白名单自动过滤
      transform: true, // 请求参数转换为dto对象实例
      forbidNonWhitelisted: true, // 禁止传入多余字段
  }));
  await app.listen(3000);
}
bootstrap();
```

`npm i @nestjs/mapped-types`



## resfull api appliction

install Docker



