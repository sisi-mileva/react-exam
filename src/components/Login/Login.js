import React, { Component } from 'react';
import Input from '../Input/Input';

export default class Login extends Component {
    state = {
        formData: {
            name: {
                label: 'Име',
                componentType: 'input',
                options: {
                    placeholder: 'Въведи име',
                    type: 'text'
                },
                constraints: {
                    required: true
                },
                value: '',
                isOK: false
            },
            password: {
                label: 'Парола',
                componentType: 'input',
                options: {
                    placeholder: 'Въведи парола',
                    type: 'text'
                },
                constraints: {
                    required: true
                },
                value: '',
                isOK: false
            }
        },
        users: [
            {
                name: 'user1',
                password: 'pass1'
            },
            {
                name: 'user2',
                password: 'pass2'
            },
            {
                name: 'user3',
                password: 'pass3'
            },
        ],
        currentUser: {
            id: '',
            name: '',
            password: ''
        }
    };

    validate(newField) {
        newField.isOK = true;

        if (newField.constraints.required) {
            newField.isOK = newField.isOK && newField.value.trim().length > 0;
        }

        if (newField.constraints.minValue) {
            newField.isOK = newField.isOK && (+newField.value > newField.constraints.minValue);
        }
    };

    isFormValid = () => {
        return Object.keys(this.state.formData)
            .every(key => this.state.formData[key].isOK);
    };

    checkLoginData = () => {

    };

    changeHandler = (key, event) => {
        const newFormData = { ...this.state.formData };
        const newField = { ...newFormData[key] };
        newField.value = event.target.value;
        newFormData[key] = newField;

        this.validate(newField);

        this.setState({
            formData: newFormData
        });
    };

    render() {
        return (
            <div className="login">
                {
                    Object.keys(this.state.formData).map((key) => {
                        return (
                            <Input
                                key={key}
                                changeHandler={(event) => this.changeHandler(key, event)}
                                {...this.state.formData[key]}
                            />
                        );
                    })
                }

                <button onClick={() => this.checkLoginData()}> Login </button>
            </ div>
        );
    }
}