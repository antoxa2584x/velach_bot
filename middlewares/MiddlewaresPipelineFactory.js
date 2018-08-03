const MiddlewaresPipeline = require('./MiddlewaresPipeline');


class MiddlewaresPipelineFactory {
  constructor(middlewareClasses = [], bot) {
    this.middlewareClasses = middlewareClasses;
    this.bot = bot;
  }

  getInstance() {
    const middlewares = this.middlewareClasses.map(
      MiddlewareClass => new MiddlewareClass(this.bot),
    );

    return new MiddlewaresPipeline(middlewares);
  }
}


module.exports = MiddlewaresPipelineFactory;
