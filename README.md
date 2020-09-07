To start the front end environment please follow the following procedure

  NOTE: if you don't have docker installed please install docker in order to run application

  1) Open a new terminal and enter 'docker build -t sample:dev .'
  2) wait for set up to complete
  3) then run 'docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev'

  4)NOTE: if you are using git bash on windows you have to add 'winpty' to the front of the command
  5)Before opening the application please pull and start the backend server from the given github repo
  5)got to 'http://localhost:3001/' to start React application
