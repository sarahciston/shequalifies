let withings = require("./_includes/js/withings.js")
let rescue = require("./_includes/js/rescueTime.js")

exports.fresh = () => {
  withings.refresh()
}

exports.load = () => {
  rescue.daily()
  withings.today()
  withings.weight()
  withings.sleep()
  
  // add code to parse new json remove slashes
}

