# todo-angular2-ngrx-mean
MEAN stack todo app based on ngrx concept.

## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+
* MongoDB is installed and running (see db setup for more info).

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `typescript` (`npm install --global typescript`)

## Running the app

### Client folder
```javascript
npm install
npm run server
```

### Server folder
```javascript
npm install
npm start
```

Go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) to view the app in your browser

## DB setup
Install MongoDb Community server from [here](https://www.mongodb.com/download-center?jmp=nav#community)

Check your MongoDb folder location on your system.

Run mongo db server:
`C:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath [PATH_TO_DB]`

Start shell client:
`C:\Program Files\MongoDB\Server\3.4\bin>mongo.exe`

In Mongo shell create categories db:
`use categories`

Create colection:
`db.createCollection('categories')`

For more commands see the docs.
