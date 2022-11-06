## Cloud test assigment

### Warm up task

#### 1. Опишите самую интересную задачу в программировании, которую вам приходилось решать?  
Одна из самых интересных задач, которые мне приходилось решать - это разработка библиотеки. Интерес состоял в сложности интеграции библиотеки в проект. Пришлось полностью перенастраивать `gulp` и `webpack`, чтобы собирать библиотеку, перекопать всю документацию для интеграции библиотеки в проект, залезть в самый страшный легаси и коммуницировать с другими разработчиками, чтобы ингегрировать библиотеку в проект. После оказалось, что я пытался собрать бандлы библиотеки в винде и не понимал почему их нет в wsl, просто потому что даже не подумал что библиотека в винде, а не в wsl. 

#### 2. Расскажите о своем самом большом факапе? Что вы предприняли для решения проблемы?
При работе с протоколом `SMTP` (простой протокол передачи почты), я случайно отправил письмо всем Пользователям, которые подписаны на рассылку с содержанием `test test test`. Я сразу же предупредил своего менеджера и произошедшем, быстро написал письмо с извенениями и объяснением ситуации вместе с менеджером. Ситуация превратилась в мем, я убедился в работоспособности своего кода и убедился в том, что стоит писать код сразу через `TDD`. 

#### 3. Каковы ваши ожидания от участия в буткемпе?
Возможность поработать в команде с профессионалами, увидеть новые для себя `best practices` и при возможности поделиться своим опытом с другими участниками.

Тестовое задание выполнено, все crud работют, версионирование настроено, реализованы `docker-files`. Не удалось полностью реализовать `CI/CD`, персистентность не настроена, не реализованы тесты. Но в целом, задание выполнено.

### Description

This is a simple application, that will allow you to dynamically manage the configuration of applications.

### Stack

- Typescript
- TypeORM
- Postgres
- node.js
- Docker

### How to run

#### Using npm

- Clone the repository(ssh-command) `git clone git@github.com:Uzhastin-Nikita/cloud-test-assignment.git`

- Go to the project directory `cd cloud-test-assignment`

- Install dependencies `npm install`

- Create .env file in the root directory and fill it with the following variables by `template.env` file.

- Run `npm run start` to start the application in development mode.

#### Using docker

- Check if you have docker installed `docker -v`

- Start docker daemon `sudo service docker start`

- Start docker compose `docker-compose up`

- Start docker file `docker build -t cloud-test-assignment .`

