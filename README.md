# phase-4

This is our phase 4 final project. It is a financial literacy and stock exchange website that centralizes knowledge of the market for all, no matter the experience level.

## Backend SetUp

To get the server side running run the command `pipenv shell`, make sure you `cd` into the `server` directory. Start the backend server using the `python app.py` or `python3 app.py` from the server directory, to  get new info into the database try `flask db migrate` then `flask db upgrade head`, in order to get the new info integrated to the desired table.

### Seed provided to get some provisional data for testing purposes

Getting seeds, in order to get the seeds file working run the command `python seed.py` or `python3 seed.py` from the server directory.

## Frontend SetUp

In order to get the client side working use the `npm start --prefix client/phase-4-project` command in a different terminal, from the main project directory, to start the react app, make sure your server is running to get te data for your react app.

To create the frontend routes use react router.
If you are trying to get any data from the server to render it in the client side you can use either loaders or the `useEffect` hook, you might need to do asynchronous functions for both of the methods.

### No data displaying on the frontend

If the website shows no error and at the same time you are not getting the decided data, try going to the `URL` for the backend (in this case we are just changing the `port` number).

The project fronted base `URL` is `http://localhost:3000`, to connect to the backend base `URL` use `http://localhost:5000`.

Once you do the `port` change you will have the server data/response displaying, to see more detailed data try navigating trough the different routes. You can reach to the backend routes by looking the `app.py` file (path to file `./phase-4/server/app.py`).

Still getting nothing to the client side, try looking at your asynchronous functions (fetch requests/loaders) and make sure the connection is written to thee proper route, check your `proxy` in the `package.json` file.
