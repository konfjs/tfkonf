export interface HCLNode {
    toHCL(level: number): string;
}

export class BlockNode implements HCLNode {
    readonly children: HCLNode[] = [];

    constructor(
        readonly key: string,
        attributes: { [key: string]: any },
    ) {
        this.parseAttributesAndBlocks(attributes);
    }

    private parseAttributesAndBlocks(attributes: { [key: string]: any }): void {
        for (const [key, value] of Object.entries(attributes)) {
            if (this.isBlock(value)) {
                this.children.push(new BlockNode(key, value));
            } else {
                this.children.push(new AttributeNode(key, value));
            }
        }
    }

    /**
     * TODO: How to distinguish between HCL block and objects?
     * They are both defined as objects in TypeScript.
     *
     * Example:
     * gcfs_config {
     *   enabled = true
     * }
     *
     * vs
     *
     * labels = {
     *  foo = "bar"
     * }
     */
    private isBlock(value: unknown): boolean {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }

    toHCL(level: number): string {
        const indent = '  '.repeat(level);
        const childrenHCL = this.children.map((child) => child.toHCL(level + 1)).join('\n');
        return `${indent}${this.key} {\n${childrenHCL}\n${indent}}`;
    }
}

export class AttributeNode implements HCLNode {
    constructor(
        readonly key: string,
        readonly value: any,
    ) {}

    toHCL(level: number): string {
        const indent = '  '.repeat(level);
        const formattedValue =
            typeof this.value === 'string' ? JSON.stringify(this.value) : this.value;
        return `${indent}${this.key} = ${formattedValue}`;
    }
}
