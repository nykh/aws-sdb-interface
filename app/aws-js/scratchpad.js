function generateSignedURL(actionName, params, accessKeyId, secretKey, endpoint, version) {
    var host = endpoint.replace(/.*:\/\//, "");
    var payload = null;
    var displayUri = endpoint;

    params.Action = actionName;
    params.Version = version;
    var signer = new AWSV2Signer(accessKeyId, secretKey);
    params = signer.sign(params, new Date(), {
        "verb": "GET",
        "host": host,
        "uriPath": "/"
    });

    var encodedParams = [];
    for (var key in params) {
        if (params[key] !== null) {
            encodedParams.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
        } else {
            encodedParams.push(encodeURIComponent(key));
        }
    }

    payload = encodedParams.join("&");
    displayUri += "?" + payload;

    return displayUri;

}
