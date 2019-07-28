// Importer React
import React from 'react';

// Importer les composants
import Form from './Form';
import ItemList from './ItemList';

class App extends React.Component {

    // Pour garder la liste des articles
    state = {
        articles: []
    }

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
    }

    // Cette fonction permet d'afficher un rendu
    render (){
        return (
            <div>
                <h3>Liste de courses!!!</h3>

                {/* Le composant formulaire pour ajouter un nouvel article */}
                <Form formTitle="Ajouter un nouvel article" addArticle={this.addArticle}/>

                {/* Le composant ItemList et on lui envoie la liste des articles pour affichage */}
                <ItemList articles={this.state.articles}/>
            </div>
        );
    }
}

export default App;