## Cloud test assigment

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

