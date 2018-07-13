# FE Challenge
Code Ocean Frontend Developer Challenge

## General
In this challenge you will create a react & redux app with a virtualized infinite scroll list.

## Task 1 - Basic
1. Install redux, and create the needed redux reducers/actions/etc... to paginate the server and load data.
2. Implement an infinite scroll virtualized list component that will load data from the server via redux.
3. Display a list of **users** using the component. A user's row should include the firstName, lastName, and catchPhrase fields.

**Note:** You can use external libraries such as [react-virtualized] (https://github.com/bvaughn/react-virtualized) for virtualization and infinite scroll.

## Task 2 - Advanced
* Add a second list of **reviewers** to the app reusing the component and reducer you've created in **Task 1**.
* Both lists should appear side by side, and load data from their respective api endpoints.

## Finishing the challenge
* Zip the challenge's folder (without the **node_modules** folder).
* Send the zip file to [mordy@codeocean.com](mailto:mordy@codeocean.com).

## Technical Info

#### How to start
1. Clone this repository.
2. Install the dependencies.
3. Run `npm start` to start the app on port `3000`, and the server on port `3001`.

#### API
* Users are available on `localhost:3001/users`
* Reviewers are available on `localhost:3001/reviewers`
* This demo uses a basic [json-server] (https://github.com/typicode/json-server#paginate)

#### Requirements
1. Smooth scrolling
2. Scalable (support extremely high amount of users)

Good Luck!