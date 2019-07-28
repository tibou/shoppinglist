import React from 'react';

import '../style.css'


class Article extends React.Component{

    state = {
        isInEditMode: false
    };

    // Gérer le changement de mode
    toggleEditMode = () => {
        this.setState({isInEditMode: !this.state.isInEditMode});
    }

    // Gérer le changement de la quantité
    handleQuantityEdit = (event, article) => {
        article.quantity = event.target.value;
        this.props.editArticle(article);
    }

    // Gérer le changement du nom
    handleNameEdit = (event, article) => {
        article.name = event.target.value;
        this.props.editArticle(article);
    }


    render() {
        return(
            <div>
                {/* Le bouton qui permet de changer de mode */}
                <button className="btn btn-warning edit" onClick={() => this.toggleEditMode()}>Modif</button>
                {
                    this.state.isInEditMode? 
                        <span>
                            <input type="number" value={this.props.data.quantity} 
                            onChange={(event) => this.handleQuantityEdit(event, this.props.data)} />
                            <input type="text" value={this.props.data.name} 
                            onChange={(event) => this.handleNameEdit(event, this.props.data)} />
                        </span>
                    :
                        <span>
                            {this.props.data.quantity} {this.props.data.name}
                        </span>
                }
            </div>

        );
    }
}

export default Article;