const { Submission } = require("../entities/Submission");

const getTestSchemaInFormat = (submissions) => {
  return submissions.map((submission) => {
    return {
      submissionId: submission.id,
      challengeId: submission.challenge_id,
      language: submission.language,
      error: submission.error,
      testResult: submission.test_result,
      timeTaken: submission.time_taken,
      submittedAt: submission.submitted_at,
      code: submission.code,
      wordCount: submission.word_count,
    };
  });
};

const getAllSubmissions = async (req, res) => {
  const { id: userId } = req.user;
  const { questionId } = req.body;
  const submissions = await Submission({}).findAllWith({
    challenge_id: questionId,
    user_id: userId,
  });
  submissionDetails = getTestSchemaInFormat(submissions);
  res.send(submissionDetails);
};

module.exports = getAllSubmissions;
