import React,{ Component } from "react";
import Chat from './Chat';
import {connect} from 'react-redux';

// import dieticanSelectors from "../dieticians/selectors";
// import patientSelectors from "../patients/selectors";

class ChatPage extends Component{
    render(){
        return(
            <div>
                {console.log(this.props.match.params.userName)}
                <Chat userName = {this.props.match.params.userName}/>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);