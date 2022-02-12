export const findByTestAttr = (wrapper, selector)=>{
    return wrapper.find(`[data-test="${selector}"]`);
};
