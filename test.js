function wrapSpecialCharsInSpan(str) {
    // Function to wrap the match in a <span> element
    return `<p>${str}</p>`
}



function convertEmojiToNumbers(emoji) {
    // Check if the input is a single emoji
    console.log(emoji.length)
    if (emoji.length !== 1) {
        throw new Error('Input must be a single emoji');
    }

    // Get the code point of the emoji
    const codePoint = emoji.codePointAt(0);

    // Convert the code point to hexadecimal format
    return `0x${codePoint.toString(16).toUpperCase()}`;
}



const makeRobloxTopbarButton = {
    makeButton: function(name, img) {
        let state = 0;
        let ready = true;
        console.log('DONE LOADING!')
        if (ready == true) {
            console.log('ready')
            const button = document.createElement('button')
            const frame1 = document.createElement('div')
            const imageButton = document.createElement('img')
            const span = document.createElement('span')
            const con = document.body;


            frame1.style.backgroundColor = `rgba(0, 0, 0, 0.7)`;
            frame1.style.display = `inline-flex`;
            //frame1.style.height = `48px`;
            //frame1.style.width = `48px`;
            frame1.style.borderRadius = `32px`;
            frame1.style.padding = `10px`;
            frame1.style.boxSizing = `border-box`;
            frame1.style.alignItems = `center`;
            frame1.style.justifyContent = `center`;


            


            button.style.color = `white`;
            button.style.cursor = `pointer`;
            button.style.backgroundColor = `transparent`;
            button.style.height = `100%`;
            button.style.width = `100%`;
            button.style.whiteSpace = `nowrap`;
            button.style.fontSize = `16px`;
            button.style.border = `2px rgba(0, 0, 0, 0.7)`;
            button.style.display = `inline-flex`;
            button.style.borderStyle = `32px`;
            button.style.boxSizing = `border-box`;
            button.style.alignItems = `center`;
            button.style.justifyContent = `center`;
            button.style.textDecoration = `none`;
            
            
            


            imageButton.style.color = 'white';
            imageButton.style.backgroundColor = `transparent`;
            imageButton.style.height = `auto`;
            imageButton.style.width = `10%`;
            imageButton.style.marginRight = `8px`;
            imageButton.style.borderStyle = `32px`;
            imageButton.style.border = `2px rgba(0, 0, 0, 0.7)`;
            imageButton.style.display = `inline-flex`;
            imageButton.style.alignItems = `left`;



            if (name && typeof name === 'string') {
                console.log(name)
                console.log(String.fromCodePoint(0x1F354))
            }
            

            span.textContent = name || 'GG😀';


            if (img) {
                //imageButton.src = img;
                //button.appendChild(imageButton)
            }

            
            button.appendChild(span)
            frame1.appendChild(button)
            con.appendChild(frame1)
        }
    }
}

document.addEventListener('DOMContentLoaded', function(event) {
    makeRobloxTopbarButton.makeButton('🍔 GG')
})
