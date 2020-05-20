import * as React from 'react';

function withContext<TContext>(Component, Context: React.Context<TContext>, contextName: string) {
    class ContextWrapper extends React.Component {
        static contextType = Context;

        render() {            
            const contextProps = {
                [contextName]: {...this.context}
            }

            return (
                <React.Fragment>
                     <Component {...this.props} {...contextProps} />
                </React.Fragment>
            )
        }
    }

    return ContextWrapper;
}

export default withContext;