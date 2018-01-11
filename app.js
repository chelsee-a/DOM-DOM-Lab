// create a button

document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);
    let i = 1;


    button.addEventListener("click", function () {
        let blackSquare = document.createElement('div');
        let div = document.createElement('div');
        button.appendChild(blackSquare);
        document.body.appendChild(div);


        div.addEventListener('mouseenter', function () {
            div.innerText = div.id;

        })

        div.addEventListener('mouseleave', function () {
            div.innerText = '';
        })

        div.addEventListener("click", function () {
            let colors = ["red", "blue", "orange", "green"];

            //let boxcolor = Math.floor((Math.random() * 3));
            div.style.backgroundColor = colors[Math.floor((Math.random() * 4))];
        })

        div.ondblclick = function doubleclick() {
            let divId = Number(div.id);

            if (divId % 2 === 0) {
                let sibling = document.getElementById(divId + 1);
                document.body.removeChild(sibling);
            } else {
                let oddone = document.getElementById(divId - 1)
                document.body.removeChild(oddone);
                alert('No square!');
            }
        }
        div.id = i++;
        div.className = "box-style";
        div.style.backgroundColor = "black";
        div.style.width = "5em";
        div.style.height = "5em";
        div.style.margin = "2em";
        div.style.float = "left";
        div.style.color = "white";
        div.style.textAlign = "center";
        div.style.textJustify = "inter-word";
        div.style.lineHeight = "5em";
    })

})
