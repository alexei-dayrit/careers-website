# careers-website

## Getting Started

1. Clone the repository.

```shell
  git clone https://github.com/alexei-dayrit/careers-website.git
  cd careers-website
```
2. Install all dependencies with NPM

```shell
  npm install
```

3. Make a copy of the provided ```.env.example``` into your own ```.env``` file. In the .env file, change database URL: ```postgres://dev:dev@localhost/careers```

  ```shell
    cp .env.example .env
  ```

6. Start a PostgreSQL service

```shell
  sudo service postgresql start
```

7. Create provided dummy database with PostgreSQL.

```shell
  createdb careers
```

8. Import database schema.

```shell
  npm run db:import
```

9. View database. I used ```pgweb``` GUI tool for PostgreSQL. Can also be seen at ```http://localhost:8081``` in your browser once it's running.

```shell
  pgweb --db=foodies
```

10. Run NPM build to create main.js file

```shell
  npm run build
```

11. Start the project with **dev** script (for auto reload) and visit application at ```http://localhost:3000``` in your browser

```shell
  npm run dev
```
