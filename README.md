# Allforlife
Allforlife is a marketplace that gathers people how seek help with mental health problems and practitioners how can provide help.

###### Technical Specifications
Technologies: REACT, NODE, EXPRESS, AXIOS, JWT, POSTGRESS. SOCKET... 

###### Functional Requirements
    - Development focuses on a single page application (SPA) , built using React.
    - Data is persisted by the API server using a PostgreSQL database.
    - The client application communicates with an API server over HTTP, using the JSON format.

###### Behavioural Requirements
    - The customer can login or register if he/she does not have an account.
    - The customer can be redirected to a dashboard where he can Add a post or see proposals.
    - The customer add a post by filling all the informations about his propblem giving a description, symptomes, preferences, budget, availability ...
    - The customer see all the details of proposals sended by providers and choose the best one. 
    - The customer can chat with provider before closing the deal and negociate budget ...
    - The customer can accepte the deal . then he will be redirect to the main web site allforlife to process the payment.
    - The provider can login or register if he/she does not have an account.
    - The provider can navigate through all the job postings .
    - The provider can apply for a job and filling a form.
    - The provider receive notifications if the customer choose his proposal.
    - The provider can chat with the customer.

## Final Product

- Landing Page :

!["Screenshot of landing Page"](https://github.com/fatimaEllabbar/allforlife/blob/master/client-side/public/docs/landing1.gif)


- Customer Dashboard :
!["Screenshot of Customer Dashboard"](https://github.com/fatimaEllabbar/allforlife/blob/master/client-side/public/docs/customerDashboard.gif)

- Customer Job post :
!["Screenshot of Customer Job Post"](https://github.com/fatimaEllabbar/allforlife/blob/master/client-side/public/docs/postAd.gif)

- Provider Dashboard :
!["Screenshot of Provider Dashboard"](https://github.com/fatimaEllabbar/allforlife/blob/master/client-side/public/docs/ProviderDashbord.gif)

- Provider Proposal Ad :
!["Screenshot of Provider Proposal Ad"](https://github.com/fatimaEllabbar/allforlife/blob/master/client-side/public/docs/ProposalAd.gif)


- Customer see Proposals :
!["Screenshot of  customer see Proposals "](https://github.com/fatimaEllabbar/allforlife/blob/master/client-side/public/docs/seetheProposal.gif)

- Customer and Provider Chat room :seetheProposal
!["Screenshot of  Customer and Provider Chat room "](https://github.com/fatimaEllabbar/allforlife/blob/master/client-side/public/docs/chat.gif)









## Setup

Install dependencies with `npm install`.

## Create Database allforlife

## Running server

```sh
cd server
nodemon run
```
## Running client

```sh
cd client-side
npm start
```

