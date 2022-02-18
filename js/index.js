function change() {
    const button = document.getElementById("button");
    const text = document.getElementById("text");

    // Check if button clicked 11 times
    if (parseInt(button.name) === 11) {
        button.remove();
        return text.innerHTML = "LOL, no more buttons!, i won!";
    }
    const constants = {
        texts: [
            "you're still here though..",
            "well go away then",
            "you're gonna have to",
            "Imma make you care",
            "oh I will",
            "right now",
            "GO AWAY",
            "because I said to",
            "well I happen to be busy",
            "I will find you",
            "leave, now."
        ],
        responses: [
            "yeah, guess I am",
            "I don't want to",
            "I don't care",
            "try me",
            "when?",
            "still here",
            "why",
            "not alto convincing",
            "sure",
            "I'm right here",
            "go leave yourself"
        ]
    }
    // Get texts from constants
    const { texts, responses } = constants;
    text.innerHTML = texts[parseInt(button.name)];
    button.value = responses[parseInt(button.name)];
    // Add 1 to button value
    button.name = parseInt(button.name) + 1;
}