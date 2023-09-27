# phase-4
This is our phase 4 final project. It is a financial literacy and stock exchange website that centralizes knowledge of the market for all, no matter the experience level.

## Backend SetUp

To get the server side running run the command `pipenv shell`, make sure you `cd` into the `server` directory. Start the backend server using the `python app.py` or `python3 app.py`, to  get new info into the database try `flask db migrate` then `flask db upgrade head`, in order to get the new info integrated to the desired table.

### Seed provided to get some provisional data for testing purposes

Getting seeds, in order to get the seeds file working run the command `python seed.py` or `python3 seed.py`.

## Frontend SetUp

In order to get the client side working use the `npm start --prefix client` command in a different terminal, to start the react app, make sure your server is running to get te data for your react app.