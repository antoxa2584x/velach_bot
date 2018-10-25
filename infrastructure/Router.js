class Router {
  constructor(routes = []) {
    this.routes = routes;
  }

  getMatchingRoutes(messageData) {
    return this.routes.filter(route => route.isMatching(messageData));
  }
}


module.exports = Router;
