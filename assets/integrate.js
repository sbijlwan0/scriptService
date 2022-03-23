window.onload = () => {
    let socketScript = document.createElement('script');
    socketScript.src = 'http://192.168.1.184:5000/assets/socket.js';
    document.body.appendChild(socketScript);
    let script = document.createElement('script');
    script.src = "http://localhost:5000/assets/script.js";
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "http://localhost:5000/assets/style.css";

    let data= "<button type='button' class='btn btn-primary talkBtn' data-toggle='modal' data-target='#myModal'>Talk To Us</button><div class='modal' id='myModal'> <div class='modal-dialog'> <div class='modal-content'> <div class='modal-header'> <h4 class='modal-title'>Modal Heading</h4> <button type='button' class='close' data-dismiss='modal'>&times;</button> </div> <div class='modal-body'> Modal body.. </div> <div class='modal-footer'> <button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button> </div> </div> </div> </div>";
    let div = document.createElement('div');
    div.innerHTML = data;
    document.body.appendChild(div);
    document.body.appendChild(link);
    document.body.appendChild(script);


}