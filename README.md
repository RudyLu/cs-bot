# cs-bot

## Prerequisites
1. node.js v12
2. yarn as the package manager
3. mongoDB

## File Structure
1. `cs-bot-api/` is the first service required to get intents and then pass to the 2nd service.

   Look into `messageApi.yaml` for API details.
2. `translation-api/` is the second service which would translate the intent to a message.

   Look into `translationApi.yaml` for API details.

## Build and Run

1. in `translation-api/`

```
# make sure you have mongoDB.
# modify the connection info in app.js.
yarn
PORT=3001 yarn start
```
   
2. `cs-bot-api/`.
```
yarn
yarn start
```

## Development
```
yarn devstart
```

### Test
```
yarn test
```

## Tech. Notes

In general, Leverage express generator as the boilerplate.

### cs-bot-api
- Use DI (Dependency Injection) in `cs-bot-api`'s `MessageController` so that we can switch to use other services. This is also helpful for testing (detailed below).
- The test is mainly on Controller which also demonstrates that it could be tested without depending on external services.

### translation-api
- Did not use DI that much as this service is highly related to DB persistence.
- Ideally, the model layer should be able to be injected as a dependency.
- The test is more like integration test that involves with DB.

## Future work
- Extract the hard-coded config as environment variables.
- Extract the model layer, and use DI as well.
- Leverage some IoC container, like [awilix](https://github.com/jeffijoe/awilix) to make the configuration of DI more manageable.
- Enhance the error handling and add more test cases.
- Dockerize these 2 services.
