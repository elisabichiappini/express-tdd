//destructuring test e expect
const { test, expect } = require('@jest/globals');

//importa posts
const posts = require('../db/posts.js');

//funzione per creare lo slug

const createSlug = (slug) => {
    if(typeof slug !== 'string') {
        throw new error('il slug passato non è una stringa');
    }
    const baseSlug = slug
    .replaceAll(' ', '-')
    .toLowerCase()
    .replaceAll('/', '');

    return baseSlug;
}

//createSlug dovrebbe ritornare una stringa 
test('createSlug dovrebbe ritornare una stringa', () => {
    const slug = createSlug(90);
    expect(typeof slug).toBe('string');
})

//createSlug dovrebbe ritornare una stringa in lowercase

//createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -

//createSlug dovrebbe incrementare di 1 lo slug quando esiste già 

//createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato

//createSlug dovrebbe lanciare un errore se manca l'array dei post 