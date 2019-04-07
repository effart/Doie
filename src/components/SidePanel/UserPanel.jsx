import React, { Component } from 'react'
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react"
import firebase from "../../firebase"


class UserPanel extends Component {

// TODO: there is  no need of to assign props to state
    state={
        user:this.props.currentUser
    }

    dropdownOption = () => [
        {
            key: "user",
            text: <span>Signed in as <strong>{this.state.user.displayName}</strong></span>,
            disabled: true
        },
        {
            key: 'avatar',
            text: <span>avatar</span>
        },
        {
            key: 'signout',
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ]

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then((a) => console.log(a + 'signout'))
    }
    render() {
        console.log(this.props.currentUser)
        return (
            <Grid style={{ background: "#4c3c4c" }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
                        {/* App Header */}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>DevChat</Header.Content>
                        </Header>
                    </Grid.Row>

                    {/* User DropDown */}
                    <Header inverted style={{ padding: "0.25em" }} as="h4" >
                        <Dropdown trigger={<span>{this.state.user.displayName}</span>}
                            options={this.dropdownOption()} />
                    </Header>

                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel