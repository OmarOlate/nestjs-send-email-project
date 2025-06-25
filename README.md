<h1>nestjs-send-email-project<h1>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
</p>

## Description

[Nest](https://github.com/nestjs/nest) Base repository for send email. Repository for dynamic email sending, responsible for internally managing the SMTP connection, sanitizing the email body, email queuing, among others.

This project is responsible for managing the sending of emails, without any configuration by the user, only receiving the parameters from the email server.

> [!NOTE]
> You can configure the SMTP connection using an environment variable, or explicitly in the project.


## Project setup

```bash
$ npm install
```

## Deploy redis
Deploy redis docker container
```bash
docker run -d --name redis-server -p 6379:6379 redis:7
```
Start redis docker container
```bash
docker start redis-server
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=OmarOlate&repo=nestjs-send-email-project&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515)





## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
