# Preview

## http://retoplatzi.com

> Click the link to visit the preview
> [retoplatzi.com](http://retoplatzi.com "Visitar retoplatzi.com") > ![Preview](readmeAssets/shot.png)

## Functions implemented for the challenge

###### You can see the preview at https://retoplatzi.com The application has been deployed on AWS EC2 with Nginx and has been configured for observability using New Relic.

The application must have a restaurant that offers food from your country. On this occasion, we added Tomate Taqueria, a famous pastor and arrachera tacos restaurant from Guadalajara, Jalisco.

We launched an exception, to disable payments with American Express cards

![Preview](readmeAssets/amex_alert.png)

# New Relic

Different New Relic tools were implemented to monitor the application, APDEX and a dashboard with different requests to obtain detailed information in depth, using the desktop interface and the mobile application.

![Preview](readmeAssets/nrshot.png)

## New relic alerts Alerts

In addition, alert systems were activated to test the functionality of the policies that allow us to configure new Relic configured to the mobile application and to Gmail, generating automatic alerts.

### Gmail

![Preview](readmeAssets/gmail_alert.png)

## Mobile

![Preview](readmeAssets/nrmobile_01.png)
![Preview](readmeAssets/nrmobile_02.png)

# Bonus tasks

1. A business called "Rita's Empanadas" was added in honor of the story that Rita shares with us about the extra tasks of the challenge.

2. For extra activity number two, we added the business called "Literary Cafeteria" where each dish and drink refers to different Spanish-speaking authors.

3. A test integration of payments with the Stripe and Mercado Pago APIs has been added. Please do not use real information to perform the tests. Below you will find information on test cards with which you can simulate a payment.

## Test Card Information

#### Stripe

- Option 1

  - Card type: VISA
  - number: 4242424242424242
  - CVC: Any 3 digits
  - Exp: Any future date.

- Option 2

  - Card type: Master Card
  - number: 4000056655665556
  - CVC: Any 3 digits
  - Exp: Any future date.

#### Mercado pago

![Preview](readmeAssets/stripe.png)

# To start the app locally

## Prerequisites

- Node.js (version 14.x higher)
- npm (version 8.x or higher)

## Installation

Clone the repository to your local machine and navigate to the project directory:

```bash
npm istall

npm run start
```
