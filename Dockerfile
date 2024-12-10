FROM node:19.2-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies

#Copy package.json 
COPY package.json ./  

# Install app dependencies
RUN npm install 

# Copy app.js
COPY app.js ./



#Execute commando to start application
CMD [ "node", "app.js" ]


# Build image use the following command
#docker build -t cron-ticker node-app .
# Run the image using the following command
#docker container run cron-ticker