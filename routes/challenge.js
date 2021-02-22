const { cannotFindError } = require("../constants/Errors");
const { Challenge } = require("../entities/Challenge");

const getTestSchemaInFormat = (challenge) => {
  return {
    id: challenge.id,
    difficulty: challenge.difficulty,
    questionPrompt: challenge.question_prompt,
    sampleInput: challenge.sample_input,
    sampleOutput: challenge.sample_output,
    title: challenge.title,
  };
};

const challenge = async (req, res) => {
  console.log(req.user);
  const { id } = req.body;
  const challenge = await Challenge({}).findOneWith({
    id,
  });
  if (challenge.length === 0) {
    return res.json(cannotFindError);
  }
  challengeDetails = getTestSchemaInFormat(challenge[0]);
  res.send(challengeDetails);
};

module.exports = challenge;
