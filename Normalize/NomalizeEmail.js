const normalizeEmail = email => {
    if (email.indexOf("+") > 0) {
      email =
        email.substring(0, email.indexOf("+")) +
        email.substring(email.indexOf("@"), email.length);
    }
    return email.replace(/[\.]/i, "");
  };
  

  
  module.exports = { normalizeEmail };