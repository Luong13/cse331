"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNumbers = void 0;
var list_1 = require("./list");
var query_1 = require("./query");
//import { getNumbers } from "./number_set";
var eval_1 = require("./eval");
/**
 * Handles request for /find, which retrieves all the numbers matching the
 * description given.
 */
function findNumbers(req, res) {
    var text = first(req.query.text);
    if (text === undefined) {
        res.status(500).send('required argument "text" missing');
        return;
    }
    var query = undefined;
    try {
        query = (0, query_1.parse)((0, list_1.explode_array)((0, query_1.tokenize)(text)));
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send('parse error: ' + err.message);
            return;
        }
        throw err;
    }
    var min = first(req.query.min);
    if (min === undefined) {
        res.status(500).send('required argument "min" missing');
        return;
    }
    var minVal = parseInt(min);
    if (isNaN(minVal)) {
        res.status(500).send('required argument "min" is not a valid number');
        return;
    }
    var max = first(req.query.max);
    if (max === undefined) {
        res.status(500).send('required argument "max" missing');
        return;
    }
    var maxVal = parseInt(max);
    if (isNaN(maxVal)) {
        res.status(500).send('required argument "max" is not a valid number');
        return;
    }
    // TODO (5f): once arbitrary ranges are supported, remove this if statement
    //            and switch to the ones below.
    if (minVal !== 1 || maxVal !== 100) {
        res.status(500).send('the only supported min-max range is 1-100');
        return;
    }
    //if (maxVal < minVal) {
    //  res.status(500).send(`min (${minVal}) should be smaller than max $(${maxVal})`);
    //  return;
    //} else if (maxVal - minVal > 1e6) {
    //  res.status(500).send(`min-max range must be smaller than 1m (not ${maxVal-minVal})`);
    //  return;
    //}
    var results = (0, eval_1.evaluate)(query, minVal, maxVal);
    // TODO: - (1e) change the following to use .getNumbers()
    //       - (5e): add range params minVal, maxVal to following .getNumbers() call
    res.json({ results: (0, list_1.compact_list)(results.getNumbers()) });
}
exports.findNumbers = findNumbers;
// Helper to return the (first) value of the parameter if any was given.
// (This is mildly annoying because the client can also give mutiple values,
// in which case, express puts them into an array.)
function first(param) {
    if (Array.isArray(param)) {
        return first(param[0]);
    }
    else if (typeof param === 'string') {
        return param;
    }
    else {
        return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrQkFBcUQ7QUFDckQsaUNBQWlEO0FBQ2pELDRDQUE0QztBQUM1QywrQkFBa0M7QUFHbEM7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLEdBQVksRUFBRSxHQUFhO0lBQ3JELElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUN0QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3pELE9BQU87S0FDUjtJQUVELElBQUksS0FBSyxHQUFvQixTQUFTLENBQUM7SUFDdkMsSUFBSTtRQUNGLEtBQUssR0FBRyxJQUFBLGFBQUssRUFBQyxJQUFBLG9CQUFhLEVBQUMsSUFBQSxnQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO1lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsT0FBTztTQUNSO1FBQ0QsTUFBTSxHQUFHLENBQUM7S0FDWDtJQUVELElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3hELE9BQU87S0FDUjtJQUVELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQ3RFLE9BQU87S0FDUjtJQUVELElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3hELE9BQU87S0FDUjtJQUVELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQ3RFLE9BQU87S0FDUjtJQUVELDJFQUEyRTtJQUMzRSwyQ0FBMkM7SUFDM0MsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNsRSxPQUFPO0tBQ1I7SUFDRCx3QkFBd0I7SUFDeEIsb0ZBQW9GO0lBQ3BGLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMseUZBQXlGO0lBQ3pGLFdBQVc7SUFDWCxHQUFHO0lBRUgsSUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFRLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCx5REFBeUQ7SUFDekQsZ0ZBQWdGO0lBQ2hGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBQSxtQkFBWSxFQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBNURELGtDQTREQztBQUdELHdFQUF3RTtBQUN4RSw0RUFBNEU7QUFDNUUsbURBQW1EO0FBQ25ELFNBQVMsS0FBSyxDQUFDLEtBQVU7SUFDdkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCO1NBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDcEMsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsT0FBTyxTQUFTLENBQUM7S0FDbEI7QUFDSCxDQUFDIn0=