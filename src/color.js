export default {
    bind(el, bindings, vnode) {
        // el.style.color = 'green'
        const arg = bindings.arg

        el.style[arg] = bindings.value
    }
}