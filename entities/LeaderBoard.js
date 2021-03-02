const { db } = require("./db");

const LeaderBoard = (props = {}) => {
  const { forChallenge, basedOn } = props;
  const defaultBasedOn = basedOn ?? "word_count";
  return {
    get: async () => {
      const query = `SELECT
      u.country,
      u.username,
      ss.submission_id,
      s.challenge_id,
      s.time_taken,
      s.word_count,
      RANK () OVER ( 
          PARTITION BY s.challenge_id
          ORDER BY (s.${defaultBasedOn} ) asc
      ) rank 
  FROM
      successful_submissions ss, submissions s, users u
      where 
      ss.submission_id=s.id and 
      s.user_id=u.id and 
      ss.challenge_id=${forChallenge};
      `;
      return db().performQuery(query);
    },
  };
};

LeaderBoard({ forChallenge: "1", basedOn: "time_taken" })
  .get()
  .then((data) => console.log(data));

module.exports = { LeaderBoard };
