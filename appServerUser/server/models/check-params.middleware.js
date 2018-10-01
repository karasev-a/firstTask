const joi = require('joi');
const RequestVerb = require('../../enums/request-verb-enum');

module.exports = class CheckParamsMiddleware {
  static getCollectionName(req) {
    switch (req.method) {
      case RequestVerb.GET.name:
        return 'query';
      case RequestVerb.POST.name:
      case RequestVerb.PATCH.name:
      case RequestVerb.PUT.name:
      case RequestVerb.GET.name:
        return 'body';
    }
  }

  static validateParamsJoi(schema){
    return (req, res, next) => {
      let collectionName = CheckParamsMiddleware.getCollectionName(req);
      let result = joi.validate(req[collectionName], schema);
      if(!result.error){
        next();
      } else {
        res.status(400).send(result.error);
      }
    }
  }

  static validateSequelizeEntity(entity){
    return async (req, res, next) => {
      let collectionName = CheckParamsMiddleware.getCollectionName(req);
      let model = entity.build(req[collectionName]);
      try {
        await model.validate();
        next();
      } catch (error) {
        res.status(400).send(error);
      }
    }
  }
}