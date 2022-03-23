setTimeout(() => {
    const collab_socket = io.connect("http://192.168.1.184:54678", {
        transports: ['websocket']
    });
    
    socketListeners(); 
    
    let scrollTop = 0;

 function socketListeners() {
    collab_socket.on('connect', (e) => {
        console.log('connected', collab_socket.id);
    });

    collab_socket.on('connect_error', (e) => {
        console.log('connect_error', e);
    })

    collab_socket.on('scroll', (e) => {
        if (scrollTop !== e.position) {
            scrollTop = e.position;
            document.documentElement.scrollTop =
                e.position * document.documentElement.scrollHeight;
        }
    });

    collab_socket.on('click', (e) => {
        try {
            let nodes = document.getElementsByTagName(e.tagName);
            // console.log(nodes, e.index);
            nodes[e.index].click();
        } catch (e) {}
    });
}

window.onclick = (e) => {
    if (e.clientX !== 0 && e.clientY !== 0) {
        var clickedElement = e.target;
        tags = document.getElementsByTagName(clickedElement.tagName);
        for (let i = 0; i < tags.length; i++) {
            if (tags[i] == clickedElement) {
                collab_socket.emit('click', {
                    tagName: clickedElement.tagName,
                    index: i,
                });
                break;
            }
        }
    }
}

window.onscroll = (e) => {
    // console.log(e);
    let position = document.documentElement.scrollTop / document.documentElement.scrollHeight;
    if (scrollTop !== position) {
        collab_socket.emit('scroll', {
            position: position,
        });
        scrollTop = position;
    }
}
    
}, 1000);

