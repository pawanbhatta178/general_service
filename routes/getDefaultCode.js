const { DefaultCode } = require("../entities/DefaultCodes");

const getTestSchemaInFormat = (defaultCodes) => {
  return defaultCodes.map((defaultCode) => {
    return {
      code: defaultCode.code,
      challengeId: defaultCode.challenge_id,
      language: defaultCode.language,
    };
  });
};

const getDefaultCode = async (req, res) => {
  const { challengeId } = req.body;
  const { language } = req.body;
  const defaultCode = await DefaultCode({}).findAllWith({
    challenge_id: challengeId,
    language: language,
  });
  defaultCodesDetails = getTestSchemaInFormat(defaultCode);
  res.send(defaultCodesDetails[0]);
};

module.exports = getDefaultCode;
