const { db } = require("./db");

class default_codes {
  //schema must match table name in database
  constructor({ challenge_id, language, code }) {
    this.code = code;
    this.challenge_id = challenge_id;
    this.language = language;
  }
}

const DefaultCode = ({ challenge_id, language, code }) => {
  const default_code = new default_codes({
    challenge_id,
    code,
    language,
  });

  return {
    ...db(default_code),
  };
};

module.exports = { DefaultCode };
