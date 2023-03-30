# Tour_Management
# Project Statement
Implement a "Tour Management" CRUD application where we can perform the following CRUD operations:
1. Create a new Tour
2. Display all Tours
3. Display a single Tour by TourId
4. Edit the Tour
5. Delete the Tour by using TourID

# Angular Application
Seperate Components have been created to perform CRUD tasks:
<br>
1. add-tour<br>
Allows users to add new tours to the system. It includes a form for inputting tour details and a submit button to save the tour to the database.<br>
2. list-tour<br>
This is the component for displaying a list of tours. It uses TourService to get a list of tours, and provides functions to delete and update tours. It also includes a search function to navigate to a single tour page using the tour ID.<br>
3. update-tour<br>
Allows the user to edit and update the details of a tour, with error handling for invalid date ranges<br>
4. view-specific tour<br>
This component handles the view of a specific tour, identified by the tourId parameter passed in the URL. It retrieves the data from the TourService and allows the user to update or delete the tour.
<br>

**Tour-Service Ts:** 
<br>
It communicates with a backend API to perform CRUD (Create, Read, Update, Delete) operations on a collection of Tour objects. It uses the HttpClient from the @angular/common/http package to make HTTP requests to the backend API using various RESTful endpoints to get, add, update, and delete Tour objects<br><br>
- The getTourList() method retrieves a list of tours from the backend server.<br>
- The addNewTour() method sends a POST request to the server to add a new tour.<br>
- The getTourById() method retrieves a single tour by ID from the server.<br>
- The updateTour() method sends a POST request to the server to update an existing tour.<br>
- The deleteTour() method sends a POST request to the server to delete a tour.<br>
- The getTourById_new() method retrieves a single tour by ID from the server (this method uses a different URL pattern than getTourById()).<br><br>
All of these methods use the HttpClient to communicate with the server over HTTP, and return Observable objects that can be subscribed to in order to receive the results of the HTTP requests.<br>
