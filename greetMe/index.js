const moment = require('moment');

const greeting = {
  en: 'hello',
  hi: 'namaste',
  sp: 'hola',
  jp: 'konichiwa',
  cn: 'nihao',
};

exports.handler = async (event) => {
  let name = event.pathParameters.name;
  let { lang, ...info } = event.queryStringParameters || {};
  let message = `${greeting[lang] ? greeting[lang] : greeting['en']} ${name}`;
  let response = {
    message,
    info,
    timestamp: moment().unix(),
  };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
