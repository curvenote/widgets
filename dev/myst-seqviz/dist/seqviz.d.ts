declare const plugin: {
    name: string;
    directives: {
        name: string;
        doc: string;
        arg: {
            type: StringConstructor;
            doc: string;
        };
        body: {
            type: StringConstructor;
            doc: string;
        };
        options: {
            height: {
                type: StringConstructor;
                doc: string;
            };
            class: {
                type: StringConstructor;
                doc: string;
            };
            viewer: {
                type: StringConstructor;
                doc: string;
            };
            zoom: {
                type: ObjectConstructor;
                doc: string;
            };
            style: {
                type: ObjectConstructor;
                doc: string;
            };
        };
        run(data: any, _vfile: any, _opts: any): ({
            type: "block";
            children: ({
                type: "admonition";
                children: ({
                    type: "admonitionTitle";
                    children: {
                        type: "inlineCode";
                        children: any[];
                    }[];
                } | {
                    type: "paragraph";
                    children: ({
                        type: "text";
                        value: string;
                    } | {
                        type: "strong";
                        children: {
                            type: "text";
                            value: string;
                        }[];
                    } | ({
                        type: "link";
                        children: {
                            type: "text";
                            value: string;
                        }[];
                    } & {
                        url: string;
                    }))[];
                } | {
                    type: "paragraph";
                    children: ({
                        type: "text";
                        value: string;
                    } | {
                        type: "ul";
                        children: {
                            type: "listItem";
                            children: ({
                                type: "inlineCode";
                                value: string;
                            } | {
                                type: "text";
                                value: string;
                            })[];
                        }[];
                    })[];
                })[];
            } & {
                kind: string;
            })[];
        } & {
            kind: string;
            data: {
                import: string;
                fileOrAccession: any;
                body: any;
                class: any;
                height: any;
                viewer: any;
                zoom: any;
                style: any;
            };
        })[];
    }[];
    transforms: {
        name: string;
        doc: string;
        stage: string;
        plugin: (_: any, utils: any) => (node: any) => Promise<void>;
    }[];
};

export { plugin as default };
