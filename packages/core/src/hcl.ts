export interface HCLNode {
    toHCL(level: number): string;
}

export class BlockNode implements HCLNode {
    readonly children: HCLNode[] = [];

    constructor(
        readonly blockName: string,
        args: { [key: string]: any },
        meta?: any,
    ) {
        this.parseAttributesAndBlocks(args, meta);
    }

    private parseAttributesAndBlocks(args: { [key: string]: any }, meta?: any): void {
        for (const [key, value] of Object.entries(args)) {
            /**
             * If the attribute is explicitly marked as a block
             */
            if (meta?.[key]?.isBlock) {
                this.children.push(new BlockNode(key, value, meta[key]));
                /**
                 * Or if the attribute is an object and doesn't have isBlock in the meta object
                 */
            } else if (
                this.isBlock(value) &&
                (!meta || !meta[key] || !Reflect.has(meta[key], 'isBlock'))
            ) {
                this.children.push(new BlockNode(key, value));
            } else {
                this.children.push(new AttributeNode(key, value));
            }
        }
    }

    /**
     * If the value is supposed to be a terraform object,
     * then it has to be epxlicitly marked as a block in the meta object.
     * Otherwise, it will be treated as a block.
     */
    private isBlock(value: unknown): boolean {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }

    toHCL(level: number): string {
        const indent = '  '.repeat(level);
        if (this.children.length === 0) {
            return `${indent}${this.blockName} {}`;
        }
        const childrenHCL = this.children.map((child) => child.toHCL(level + 1)).join('\n');
        return `${indent}${this.blockName} {\n${childrenHCL}\n${indent}}`;
    }
}

function attributeToHCL(value: any): string {
    if (typeof value === 'object' && value !== null) {
        for (const [key, val] of Object.entries(value)) {
            return `{\n${key} = ${attributeToHCL(val)}\n}`;
        }
    }
    /**
     * Check if the value is a reference to another resource
     */
    if (typeof value === 'string') {
        const isResourceReference =
            /^([a-zA-Z_][a-zA-Z0-9_-]*)\.([a-zA-Z_][a-zA-Z0-9_-]*)\.([a-zA-Z_][a-zA-Z0-9_-]*)$/;
        if (isResourceReference.test(value)) {
            return value;
        }
        const isLocalOrVariableReference = /^(local|var)\.[a-zA-Z_][a-zA-Z0-9_-]*$/;
        if (isLocalOrVariableReference.test(value)) {
            return value;
        }
    }
    return JSON.stringify(value);
}

export class AttributeNode implements HCLNode {
    constructor(
        readonly key: string,
        readonly value: any,
    ) {}

    toHCL(level: number): string {
        const indent = '  '.repeat(level);
        return `${indent}${this.key} = ${attributeToHCL(this.value)}`;
    }
}
