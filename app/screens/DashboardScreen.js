import React, { Component } from 'react';
import { Text } from '../components';
import { Block } from '../components';

export default class DashboardScreen extends Component {

    render() {
        return (
            <Block>
                <Block center bottom flex={0.12}>
                    <Text h2 center bold>Dashboard</Text>
                </Block>
            </Block>
        )

    }
}