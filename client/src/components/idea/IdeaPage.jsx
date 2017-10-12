import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const IdeaContainer = styled.div`
background-color: grey;
text-align: center;
`

const PostItContainer = styled.div`
display: flex;
justify-content: space-around;
background-color: white;

` 

const IdeaPostIt = styled.div`
background-color: yellow;
display: flex;
flex-direction: column;
margin: 50px;
max-width: 200px;
padding: 10px;
float: left;
`

class IdeaPage extends Component {
    state = {
        user: {
            userName: '',
            password: '',
            ideas: []
        }
    }

    async componentWillMount(){
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }


    render() {
        return (
            <IdeaContainer>
                <h1>{this.state.user.userName}'s Idea Board</h1>
                <PostItContainer>
                {this.state.user.ideas.map((idea) => {
                    return (
                        <IdeaPostIt
                        key={idea._id}>
                        <h3>{idea.title}</h3>
                        <p>{idea.description}</p>
                        <br/>
                        </IdeaPostIt>
                    )
                })}
                </PostItContainer>
            </IdeaContainer>
        );
    }
}

export default IdeaPage;