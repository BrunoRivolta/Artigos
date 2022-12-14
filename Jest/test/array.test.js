import verificaArrayVazia from '../array'

describe('Testando arrays', () => {
    it('Testando se uma array esta vazia', () => {
        const arrayVazia = []
        const esperado = true
        const retorno = verificaArrayVazia(arrayVazia)

        expect(retorno).toBe(esperado)
    }) 

    it('Testando se uma array esta cheia', () => {
        const array = ['ola', 'mundo']
        const esperado = false
        const retorno = verificaArrayVazia(array)

        expect(retorno).toBe(esperado)
    }) 
    
})