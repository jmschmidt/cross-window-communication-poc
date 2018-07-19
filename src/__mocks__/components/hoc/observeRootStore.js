/**
 * This mock addresses errors like this that may pop up during testing:
 *
 * "Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer`
 * and might lead to unexpected results. Manually implementing `sCU` should not beneeded when
 * using mobx-react."
 *
 * Despite importing and testing the unwrapped components, this error persisted until we
 * simplified the HOC to just return the unwrapped component.
 */
export default (component) => component;
