import React from 'react';

// Importer la feuille CSS style.css
import '../style.css';


class Form extends React.Component {

    // Pour garder les infos de l'article ajouté par l'utilisateur
    state = {
        name: '',
        quantity: 0
    }; 

    handleSubmit = (event) => {
        // Eviter que la page soit rafraîchie après la soumission du formulaire
        event.preventDefault();

        /* Envoyer l'article au composant parent App 
        à travers une propriété addArticle défini par le composant parent */
        this.props.addArticle(this.state);

        // Réinitialiser le formulaire après soumission
        this.setState({
            name: '',
            quantity: 0
        });
    }

    // Cette méthode permet d'afficher un rendu
    render (){
        return(
            <div>
                {/* Accéder une propriété transmise par le composant parent App */}
                <h3>{this.props.formTitle}</h3>

                {/* Dénifir le formulaire */}
                <form onSubmit={this.handleSubmit}>
                    <input type="number" className="quantity" placeholder ="quantité" 
                    value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})} />

                    <input type="text" placeholder="article" 
                    value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />

                    <button type="submit" className="btn btn-success">Ajouter</button>
                </form>
            </div>
        );
    }
}

export default Form;