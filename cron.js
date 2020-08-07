let withings = require("./_includes/js/withings.js")
let rescue = require("./_includes/js/rescueTime.js")

rescue.daily()
withings.refresh()
withings.today()
withings.weight()
withings.sleep()