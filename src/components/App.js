// Importer React
import React from 'react';

// Importer les composants
import Form from './Form';
import ItemList from './ItemList';
// Importer la méthode connect depuis react-redux
import {connect} from 'react-redux';

class App extends React.Component {

    // Pour garder la liste des articles
    state = {
        articles: []
    }

    /*
    // Cette fonction permet d'ajouter un arcticle à la liste des articles
    addArticle = (article) => {
        // Prendre les anciens articles
        let oldArticles = this.state.articles;

        // Définir un Id pour l'article à ajouter
        article.id = this.state.articles.length + 1;

        // Définir un nouveau tableau contenant les anciens articles et le nouvel article
        let newArticles = [...oldArticles, article]

        // Mettre le nouveau tableau dans le state
        this.setState({
            articles: newArticles
        });
    } */

    /*
    addArticle = (article) => {
        this.props.dispatch({type: 'ADD_ARTICLE', payload: article});
    }
    */

    /*
    addArticle = (article) => {
        this.props.addArticle(article);
    }

    */

    // Cette fonction permet d'afficher un rendu
    render (){
        return (
            <div>
                <h3>Liste de courses!!!</h3>

                {/* Le composant formulaire pour ajouter un nouvel article */}
                <Form formTitle="Ajouter un nouvel article" addArticle={this.props.addArticle}/>

                {/* Le composant ItemList et on lui envoie la liste des articles pour affichage */}
                {/* Le store de redux maintenant disponible comme props */}
                <ItemList articles={this.props.articles} editArticle={this.props.editArticle}/>
            </div>
        );
    }
}// end class

// Pour créer une action ADD
const addArticleActionCreator = (article) => {
    return {
        type: 'ADD_ARTICLE',
        payload: article
    }
};

// Pour créer une action EDIT
const editArticleCreator = (article) => {
    return {
        type: 'EDIT_ARTICLE',
        payload: article
    }
};

// Fonction qui expose les actions sous forme de props à notre app
const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (article) => {
            dispatch(addArticleActionCreator(article));
        },

        editArticle: (article) =>{
            dispatch(editArticleCreator(article));
        }
    }
}

// Fonction qui expose le store redux sous forme de props à notre app
const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

//export default App;
// Réaliser la connection de App au store de Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);