class Route {
  constructor(matchRule, HandlerCls) {
    this.matchRule = matchRule;
    this.HandlerCls = HandlerCls;
  }

  isMatching(messageData) {
    return this.matchRule(messageData);
  }

  getHandlerInstance(messageData, bot) {
    return new this.HandlerCls(messageData, bot);
  }
}


module.exports = Route;
