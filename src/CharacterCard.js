import React from 'react';
import { format } from 'url';
 
class CharacterCard extends React.Component {
 
    state = {
        active: false
    }
 
    activate = () => {
        this.setState({
            active:true
        });
        if (this.state.active === false)
        this.props.activationHandler(this.props.value);
    }
