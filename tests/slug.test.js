//Questa è la destructuring assignment in JavaScript. Sta estraendo due funzioni (test ed expect) dal modulo @jest/globals.
const { test, expect } = require('@jest/globals');

//importo gli slugs dei posts
const posts = require('../db/posts.js');

//funzione per creare lo slug
const createSlug = (titolo, posts) => {
    if(typeof titolo !== 'string') {
        throw new Error('il titolo passato non è una stringa');
    }
    const baseSlug = titolo.replaceAll(' ', '-').toLowerCase().replaceAll('/', '');
    const slugs = posts.map(p => p.slug);
    let slug = baseSlug;
    let counter = 1;
    while(slugs.includes(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
    return slug;
};

//createSlug dovrebbe ritornare una stringa 
test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof (createSlug('ciao', posts))).toBe('string');
})

//createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    expect(createSlug("QUESTA E UNA STRINGA", posts)).toBe('questa-e-una-stringa');
})

//createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {

    expect( createSlug('ciao sono felice', posts)).toBe('ciao-sono-felice');
})

//createSlug dovrebbe incrementare di 1 lo slug quando esiste già 
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    expect(createSlug("torta paesana", posts)).toBe("torta-paesana-1");
})

//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(() => createSlug(false, posts)).toThrow('il titolo passato non è una stringa');
    expect(() => createSlug('', posts)).toThrow('nessun titolo è stato passato');
})

//createSlug dovrebbe lanciare un errore se manca l'array dei post 