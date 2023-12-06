const input = require("input");
/**
    This async cInput is a valid sideway to node's readline module

    Example of how it works:

        let nome = "";

        async function setNome() {
            nome = await cInput("What's your name?");
        };

        // rest of the code
        (asynch () => {
            await setNome();
            console.log(nome);
        })();

    * @param {string} quest prompt to user
    * @returns {*} the user input value
*/
async function cInput(quest) {
    return await input.text(`${quest} >`);
}

module.exports = cInput;