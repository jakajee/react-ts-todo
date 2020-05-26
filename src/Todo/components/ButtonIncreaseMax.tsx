import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { BaseAction } from '../actions/action.type';

type ButtonIncreaseMaxProps = {
    extendMaxTodo: () => BaseAction
}

const ButtonIncreaseMax: React.FC<ButtonIncreaseMaxProps> = (props: ButtonIncreaseMaxProps) => {
    return (
        <button type="button" onClick={() => props.extendMaxTodo()}>
            Increase Max
        </button>
    )
}

export default connect(null, { ...actions })(ButtonIncreaseMax);
