interface Model {
    get(name: string): string | undefined;
}
declare function render({ model, el }: {
    model: Model;
    el: HTMLElement;
}): Promise<() => void>;
declare const _default: {
    render: typeof render;
};

export { _default as default };
