

module.exports = function (config) {
  // if(config.common) require('./common')(config)
  if(config.backend) require('./backend')(config)
  if(config.engine) require('./engine')(config)
}