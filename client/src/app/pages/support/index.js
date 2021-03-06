import React from 'react';
import { 
    withStyles,
} from '@material-ui/core';

import { PageContainer, UnderDevelopment } from '../../../components';
import styles from './styles';

class Support extends React.Component {
    state = {
        loading: false,
    };

    componentDidMount() {
        window.location = "https://reactdj.zulipchat.com/";
    }

    render() {
        const { loading } = this.state;

        return (
            <PageContainer loading={loading}>
                <UnderDevelopment />
            </PageContainer>
        )
    }
}

export default withStyles(styles)(Support);
