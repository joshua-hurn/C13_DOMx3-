document.addEventListener("DOMContentLoaded", function () {
    let numOfSquares = 0;
    // const arrOfColors = ["red", "green", "yellow", "brown", "orange", "pink", "magenta", "turquoise", "lime", "teal"];

    const addSquareButton = document.createElement("button");
    addSquareButton.textContent = "Add Square";
    addSquareButton.addEventListener("click", function () {
        const newSquare = document.createElement("div");
        newSquare.className = "square";
        numOfSquares++;
        newSquare.setAttribute("id", numOfSquares);
        const numOfSquaresSpan = document.createElement("span");
        numOfSquaresSpan.textContent = numOfSquares;
        numOfSquaresSpan.className = "hide-span";

        newSquare.appendChild(numOfSquaresSpan);

        newSquare.addEventListener("mouseenter", function () {
            numOfSquaresSpan.className = "show-span";
        });

        newSquare.addEventListener("mouseleave", function () {
            numOfSquaresSpan.className = "hide-span";
        });

        newSquare.addEventListener("click", function () {
            // const randomNum = Math.floor(Math.random() * arrOfColors.length);
            newSquare.style.backgroundColor = random_hex_color_code();
        });

        newSquare.addEventListener("dblclick", function () {
            if (newSquare.id % 2 == 0) {
                if (newSquare.nextSibling) {
                    squareContainer.removeChild(newSquare.nextSibling);
                } else {
                    alert("no square");
                }
            } else {
                if (newSquare.previousSibling) {
                    squareContainer.removeChild(newSquare.previousSibling)
                } else {
                    alert("no square");
                }
            }
        });

        squareContainer.appendChild(newSquare);
    });

    document.body.appendChild(addSquareButton);

    const squareContainer = document.createElement("div");
    squareContainer.id = "square-container";
    document.body.appendChild(squareContainer);
});

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};