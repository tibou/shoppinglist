// Importer React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// Importer les méthodes depuis redux
import {createStore, combineReducers} from 'redux';
// Importer le Provider qui permet de connecter React à Redux
import {Provider} from 'react-redux';

// Importer le composant principal à afficher
import App from './components/App';

// Créer un reducer pour gérer les articles
const articlesReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_ARTICLE':
            console.log('ADD_ARTICLE');
            console.log('action', action);
            action.payload.id = Date.now();
            const newSate = [...state, action.payload];
            return newSate;
        case 'EDIT_ARTICLE':
            console.log('EDIT_ARTICLE');
            const articleId = action.payload.id;
            return state.map(article => {
                if(articleId !== article.id){
                    return article;
                }
                return action.payload;
            })
        default:
            return state;
    }
};

// Créer un store
const store = createStore(combineReducers({articles: articlesReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Exposer le store par le window pour y accéder par la console
window.store = store;

// Afficher le composant principal
// Avec le Provider, cela permet de faire la connection React Redux
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));