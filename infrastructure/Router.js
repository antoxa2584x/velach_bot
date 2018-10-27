class Router {
  constructor(routes) {
    this.routes = routes;
  }

  routeMessage(messageData) {
    const matchingRoutes = this.routes.filter(route => route.isMatching(messageData));
    return Promise.all(matchingRoutes.map(route => route.processMessage(messageData)));
  }
}


module.exports = Router;
