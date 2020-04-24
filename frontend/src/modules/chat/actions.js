const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getMessages (chatDto) {
    return request ({
        url: "http://localhost:8080/chat/history",
        method: 'POST',
        payload: JSON.stringify(chatDto)
    });
}

export function startChat (chatDto) {
    console.log(chatDto)
    return request ({
        url: "http://localhost:8080/chat/start",
        method: 'POST',
        body: JSON.stringify(chatDto)
    });
}

export function getCurrentUserInfo (userDto) {
    console.log(userDto);
    return request ({
        url: "http://localhost:8080/users/getInfo",
        method: 'POST',
        body: JSON.stringify(userDto)
    });
}

export function getUserChats (userToken){
    console.log(userToken);
    return request ({
        url: "http://localhost:8080/chat/active?token="+userToken,
        method: 'GET'
    });
}