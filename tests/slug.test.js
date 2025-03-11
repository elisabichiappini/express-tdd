//Questa è la destructuring assignment in JavaScript. Sta estraendo due funzioni (test ed expect) dal modulo @jest/globals.
const { test, expect } = require('@jest/globals');

//funzione per creare lo slug

const createSlug = (slug) => {
    if(typeof slug !== 'string') {
        throw new Error('il slug passato non è una stringa');
    }
    const baseSlug = slug.toLowerCase();
    return baseSlug;
    // .replaceAll(' ', '-')

    // .replaceAll('/', '');

}

//createSlug dovrebbe ritornare una stringa 
test('createSlug dovrebbe ritornare una stringa', () => {
    const slug = createSlug('ciao');
    console.log(slug);
    expect(typeof slug).toBe('string');
})

//createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const slug = createSlug('CIAO');
    expect(slug).toBe('ciao')
})

//createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    const slug = createSlug('ciao sono felice');
    expect(slug).toBe('ciao-sono-felice');
})

//createSlug dovrebbe incrementare di 1 lo slug quando esiste già 

//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato

//createSlug dovrebbe lanciare un errore se manca l'array dei post 