
export default function processOpnFrmData(event) {
    event.preventDefault();

    const _firstName = document.getElementById("feedback-firstname").value.trim();
    const _email = document.getElementById("feedback-email").value.trim();
    const _message = document.getElementById("feedback-msg").value.trim();
    const _gender = (document.getElementById('feedback-male').checked) ? document.getElementById('feedback-male').value : document.getElementById('feedback-female').value;
    const _photo = document.getElementById("feedback-photo").value;
    const _WillReturn = document.getElementById("feedback-willReturnElm").checked;

    const newOpinion =
    {
        name: _firstName,
        email: _email,
        comment: _message,
        gender: _gender,
        PIC: _photo,
        willReturn: _WillReturn,
        created: new Date()
    };


    let opinions = [];

    if (localStorage.myTreesComments) {
        opinions = JSON.parse(localStorage.myTreesComments);
    }

    opinions.push(newOpinion);
    localStorage.myTreesComments = JSON.stringify(opinions);


    //5. Go to the opinions
    window.location.hash = "#opinions";

}
