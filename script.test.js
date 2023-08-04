/** @jest-environment jsdom */

const { validarIdade } = require("./script.js")



test('verdadeira', function () {
    var resultado = validarIdade(19)
    expect(resultado).toBe(true);
})

test('falso', function () {
    var resultado = validarIdade(16)
    expect(resultado).toBe(false);
})
