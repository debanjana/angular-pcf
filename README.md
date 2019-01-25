**Angular-PCF-Demo**
--------------------------------------------------------------------------------

Angular-PCF-Demo is a project to demonstrate Angular features and utilize Gitlab's pipeline along with Pivotal Cloud Founday  to Build , Test and Deploy an
Angular project.


The Angular Feature that has been demonstrated and tested here is Dependency Injection. 


To Build and Run the project follow the simple steps mentioned below 

`
git clone https://gitlab.com/debanjana.maitra/angular-pcf-demo.git

`

Once the project is on your local system , do the following to run the application 

`
npm install 

npm start

`

Run the following command to run tests

` 

ng test

`

**Pipeline**
---------------------------------------------------------------------------------

Gitlab's pipeline has been uitlized to run Build , Test and Deploy Jobs in 3 stages. 

The pipeline utilizes Individual Runner that is hosted on Pivotal Cloud Foundry. 

If the above statement is confusing I have a whole documentation that can help you understand and work on it step by step 

[Configure CI for a Node/Java project in Cloud Foundry using Gitlab Runner](https://medium.com/@debanjanamaitra/configure-ci-for-a-node-java-project-in-pivotal-cloud-foundry-using-gitlab-runner-56c37f3a9aa6)








