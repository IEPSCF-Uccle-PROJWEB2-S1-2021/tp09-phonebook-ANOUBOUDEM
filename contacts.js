const express = require('express');
const router = new express.Router();

class Contact
{
  constructor(lastName, firstName, birthDate, phoneNumber, emailAddress)
  {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
  }
}

const contacts =
[
  new Contact('Yohan', 'Ruch', '1974-07-19', '003246122304', 'yo@yahoo.fr'),
  new Contact('Guy', 'Ruch', '1982-04-14', '003246122304', 'guy@yahoo.fr'),
  new Contact('Guirette', 'Ruch', '1988-03-11', '003246122304', 'guirette@yahoo.fr'),
  new Contact('Bob', 'Ruch', '1988-03-11', '003246122304', 'bob@yahoo.fr'),
  new Contact('Didier', 'Ruch', '1988-03-11', '003246122304', 'didier@yahoo.fr'),
  new Contact('Ulrich', 'Ruch', '11988-03-11', '003246122304', 'ulrich@yahoo.fr'),
];

router.get('/', (req, res, next) =>
{
  res.render('contactList', { title: 'Contact list', contacts });
});

router.get('/new', (req, res, next) =>
{
  res.render('contactForm', { title: 'New Contact' });
});

router.post('/new', (req, res, next) =>
{
  const contact = new Contact(req.body.lastName, req.body.firstName, req.body.birthDate, req.body.phoneNumber, req.body.emailAddress);
  contact.push(contact);
  res.redirect('/contacts');
});

module.exports = router;


