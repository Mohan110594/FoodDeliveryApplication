# FoodDeliveryApplication
### Project Participants:
* Sankaranarayanan.
* Mohan Dwarampudi.
### Project Goals:
We intend to build a front end to accept user requests. REST API's will be used to transfer and retrieve requests/responses to/from the back end. The front end sends the user request to the Cloud functions which depending on the use case will either store/retrieve info from a cache or a database. A few Cloud Functions will need to communicate with each other instead of interacting with just a global resource. Pub-Sub will be used to manage subscriptions according to topics. In addition to this, we are planning on using Google Cloud Run to perform a serverless deployment of each service. Also, if time permits, we will do a comparison of a Kubernetes deployment and a serverless deployment to Cloud Run and try to distinguish between the use cases of each deployment.

### Project Components:
ReactJS- Frontend.
<br/>
Google Cloud Functions.
<br/>
Cloud SQL.
<br/>
Datastore/Redis.
<br/>
Docker - To build images to be deployed as a service.
<br/>
Kubernetes - To manage container orchestration.
<br/>
 

### Architecture Diagram:

<img src="goal.png" alt="Laptop creates server that creates appliance" style="width:450px;"> 

 
 
Description:
We have used ReactJS for the front end and containerized it and then use Cloud Run to run and deploy the front end on a fully managed serverless platform. We had generated Cloud Functions for Food Order, User Details to maintain the serverless architecture. We also had used Cloud SQL to store the User Details to make sure if it is a new customer or not and to store the User Order Details. To store the Food Order Details temporarily we use Redis Datastore. We are using Pub/Sub as a messaging service.
The Front end built will be displaying the Food Items and a Search bar to search the required Food items in the inventory. Whenever the user searches for a Food item using the search bar, we fetch the available Food details from the Edamam Website and display them on the front end.
When the user clicks on the add to cart button on the food item the event would trigger the Food Order Cloud Function which stores the Food Order details of the user temporarily in the Redis Datastore. When the user has confirmed his order, we send the order details from Redis Datastore to Cloud SQL.
We will be using Pub/Sub to send updates to the user on the status of the Food Preparation i.e. If the Food is still preparing or is it on the move.
