const Enum = require('enumify').Enum;

class RequestVerb extends Enum{};

RequestVerb.initEnum([
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE'
]);

module.exports = RequestVerb;