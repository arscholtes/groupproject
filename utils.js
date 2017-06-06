function madlib(company, offering, audience, problem, secret) {
  let message = "My company, " + company;
  message += ", is developing " + offering;
  message += " to help " + audience;
  message += " solve the problem of " + problem;
  message += " with " + secret + ".";
  return message;
}
