module.exports = 
class TokenGenerator {
    tokenRules = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=[]{}?/.,<>|!@#$%^&*()";


    generateToken() {
        const length = this.tokenRules.length;
        let newToken = [];
        for (let i = 0; i < 90; i++) {
            newToken.push(tokenRules[Math.floor(Math.random() * length)]);
        }

        return newToken.join(',');
    }
}