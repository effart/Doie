import React, { Component } from 'react'
import { Grid, Header, Icon, Dropdown, Image, Modal, Input, Button } from "semantic-ui-react"
import firebase from "../../firebase"


class UserPanel extends Component {

    // TODO: there is  no need of to assign props to state
    state = {
        user: this.props.currentUser,
        modal:false
    }

    openModal =()=>this.setState({modal:true})
    closeModal =()=>this.setState({modal:false})

    dropdownOption = () => [
        {
            key: "user",
            text: <span>Signed in as <strong>{this.state.user.displayName}</strong></span>,
            disabled: true
        },
        {
            key: 'avatar',
            text: <span onClick={this.openModal}>avatar</span>
        },
        {
            key: 'signout',
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ]

    handleSignout = () => {
        console.log("handleSignout")
        firebase
            .auth()
            .signOut()
            .then((a) => console.log(a + 'signout'))
    }
    render() {
        const { user ,modal } = this.state
        const { primaryColor } =  this.props
        return (
            <Grid style={{ background: primaryColor }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
                        {/* App Header */}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>DevChat</Header.Content>
                        </Header>

                    {/* User DropDown */}
                    <Header inverted style={{ padding: "0.25em" }} as="h4" >
                        <Dropdown trigger={<span>
                            <Image src={user.photoURL} spaced='right' avatar />
                            {user.displayName}
                        </span>}
                            options={this.dropdownOption()} />
                    </Header>
                    </Grid.Row>
                        
                        {/* change User avatar Modal */}
                        <Modal basic open={modal} onClose={this.closeModal}>
                        <Modal.Header>Change Avatar</Modal.Header>
                            <Modal.Content>
                                <Input
                                    fluid
                                    type='file'
                                    label='New Avatar'
                                    name='previewImage'
                                />
                                <Grid centered stackable columns={2}>
                                    <Grid.Row centered>
                                        <Grid.Column className="ui center aligned grid">
                                {/* Image Preview */}
                                        </Grid.Column>
                                        <Grid.Column>
                                            {/* Cropped image Preview */}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='green' inverted>
                                    <Icon name='save'/> Change Avatar
                                </Button>
                                <Button color='green' inverted>
                                    <Icon name='image'/> Preview
                                </Button>
                                <Button color='red' inverted  onClick={this.closeModal}>
                                    <Icon name='remove'/> Cancel
                                </Button>
                            </Modal.Actions>
                        </Modal>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel