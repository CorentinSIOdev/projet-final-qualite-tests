function calculate(num1, num2, operation) {
    // Vérification des opérandes
    switch(operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/':
            if (num2 === 0) throw new Error("Division par zéro interdite."); // Gestion de l'exception division par zéro
            return num1 / num2;
        case '%': return num1 % num2;
        case '^': return Math.pow(num1, num2);
        default: throw new Error("Opération invalide."); // Gestion de l'exception opération invalide
    }
}
module.exports = { calculate };
