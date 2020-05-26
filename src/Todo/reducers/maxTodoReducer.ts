import { BaseAction } from "../actions/action.type";
import { EXTEND_MAX } from "../actions";

export default function (state: number = 10, action: BaseAction): number {
    switch (action.type) {
        case EXTEND_MAX: return state + 1;
        default: return state;
    }
}