import useTodos from "../Todo/hooks/useTodos"
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer"
const renderUseTodoHook = () => renderHook(() => useTodos());

describe("useTodo", () => {
    test("has empty todos ", () => {
        const [todos] = renderUseTodoHook().result.current;
        expect(todos).toHaveLength(0);
    });

    test('has newly added todos', async () => {
        const hook = renderUseTodoHook();
        const [todos, add] = hook.result.current;
        const newTodo = 'value';

        act(() => {
            add(newTodo)
        });

        const [updated] = hook.result.current;

        expect(updated).toHaveLength(1);
        expect(updated[0].todo).toEqual(newTodo);
        expect(updated[0].flagComplete).toBeFalsy();
    });
})