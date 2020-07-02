/*
 * Copyright (c) 2016-2020 Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK.
 * 
 *   This work is licensed under the
 *       Creative Commons Attribution 4.0 International License.
 *   To view a copy of this license, visit
 *       <http://creativecommons.org/licenses/by/4.0>
 *   or send a letter to Creative Commons, PO Box 1866,
 *   Mountain View, CA 94042, USA.
 *
 */

import {Request} from "http";

let request = new Request({
	host: "httpbin.org",
	path: "/post",
	method: "POST",
	body: JSON.stringify({string: "test", number: 123}),
	response: String
});

request.callback = function(msg, value) {
	if (Request.responseComplete == msg) {
		value = JSON.parse(value);
		trace(`name: ${value.json.string}\n`);
		trace(`value: ${value.json.number}\n`);
	}
}
