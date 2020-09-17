# CreditCardChecker
Mini program to find invalid credit cards from a list and determine which company issued such cards.

We have an initial list of valid, invalid and unknown types of cards.

The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid.
The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
idInvalidCardCompanies() returns an array of companies that have mailed out cards with invalid numbers, with no duplicates.
