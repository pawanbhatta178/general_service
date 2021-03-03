const { LeaderBoard } = require("../entities/LeaderBoard");
const getTestSchemaInFormat = (rankings) => {
  return rankings.map((ranking = {}) => {
    return {
      country: ranking.country,
      username: ranking.username,
      submissionId: ranking.submission_id,
      challengeId: ranking.challenge_id,
      timeTaken: ranking.time_taken,
      rank: ranking.rank,
      wordCount: ranking.word_count,
    };
  });
};

const getLeaderBoard = async (req, res) => {
  const { challengeId, basedOn } = req.body;
  const rankings = await LeaderBoard({
    forChallenge: challengeId,
    basedOn: basedOn,
  }).get();
  rankingDetails = getTestSchemaInFormat(rankings);
  res.send(rankingDetails);
};

module.exports = getLeaderBoard;
