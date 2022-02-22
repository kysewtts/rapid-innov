# Rapid Innovation

This repository covers all the source code as part of the Rapid Innovation Assignment.

# TechStack Used

- NodeJS and the web framework ExpressJS
- Postgres as database

## Steps to start the server

1. Clone the repository
2. `cd rapid-innov`
3. `npm i`
4. `nodemon index.js`

- The above steps will get the server up and running

## API endpoints

- GET - /admin/{fname}/{lname}/{sport} ----->> Allows admin to search players across all the teams with given fname, lname and sport which they play.
- GET - /admin/ ----->> Allows admin to get a list of all the players.
- GET - /coach/{coachId}/{fname}/{lname}/{sport} ----->> Allows a coach to search for players which he trained with their fname, lname and sport.
- GET - /coach/{coachId} ----->> Allows a coach to view list of all players whom he coached irrespective of their sport.
- POST - /coach/{coachId} ----->> Allows a coach to save a player which he trained into the database.

```

```
