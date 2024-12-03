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
             * All nested blocks must be explicitly marked as blocks in the meta object.
             */
            if (meta?.[key]?.isBlock) {
                this.children.push(new BlockNode(key, value, meta[key]));
            } else {
                this.children.push(new AttributeNode(key, value));
            }
        }
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
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const entries = Object.entries(value).map(
            ([key, val]) => `${key} = ${attributeToHCL(val)}`,
        );
        return `{\n${entries.join('\n')}\n}`;
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
