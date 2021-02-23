const { db } = require("./db");

class submissions {
  //schema must match table name in database
  constructor({
    user_id,
    challenge_id,
    language,
    error,
    test_result,
    time_taken,
    submitted_at,
    code,
    word_count,
  }) {
    this.user_id = user_id;
    this.challenge_id = challenge_id;
    this.language = language;
    this.error = error;
    this.test_result = test_result;
    this.time_taken = time_taken;
    this.submitted_at = submitted_at;
    this.code = code;
    this.word_count = word_count;
  }
}

const Submission = ({
  user_id,
  challenge_id,
  language,
  error,
  test_result,
  time_taken,
  submitted_at,
  code,
  word_count,
}) => {
  const submission = new submissions({
    user_id,
    challenge_id,
    language,
    error,
    test_result,
    time_taken,
    submitted_at,
    code,
    word_count,
  });

  return {
    ...db(submission),
  };
};

module.exports = { Submission };
