define(function() {
    return function getData(url, callback) {
        //---   make a request to database ---
        fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    console.log(
                        "Alarm:(! Error with connect. Status Code: " + response.status
                    );
                }
                response.json().then(data => {
                    let dataArray = [];
                    for (var key in data[0]) {
                        if (data[0].hasOwnProperty(key)) {
                            dataArray.push(data[0][key]);
                        }
                    }

                    // return callback for working with response database
                    return callback(dataArray);
                });
            })
            .catch(err => {
                console.log("Alarm( We are have no data! Please fix this ->", err);
            });
    };
});
