import React from 'react';

import Article from './Article'

const ItemList = (props) => {
    return (
        <div>
            <h3>Votre liste de courses</h3>
            <div>
                {/** Parcourir le tableau à l'aide de la méthode map et afficher les données */}
                {props.articles.map(article => <Article data={article} key={article.id} editArticle={props.editArticle}/> )}
            </div>
        </div>
    );
}

export default ItemList;