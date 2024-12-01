export interface HCLNode {
    toHCL(level: number): string;
}

export class BlockNode implements HCLNode {
    readonly children: HCLNode[] = [];

    constructor(
        readonly key: string,
        args: { [key: string]: any },
        meta: any,
    ) {
        this.parseAttributesAndBlocks(args, meta);
    }

    private parseAttributesAndBlocks(args: { [key: string]: any }, meta: any): void {
        for (const [key, value] of Object.entries(args)) {
            if (meta[key].isBlock) {
                this.children.push(new BlockNode(key, value, meta[key]));
            } else {
                this.children.push(new AttributeNode(key, value));
            }
        }
    }

    // private isBlock(value: unknown): boolean {
    //     return typeof value === 'object' && value !== null && !Array.isArray(value);
    // }

    toHCL(level: number): string {
        const indent = '  '.repeat(level);
        const childrenHCL = this.children.map((child) => child.toHCL(level + 1)).join('\n');
        return `${indent}${this.key} {\n${childrenHCL}\n${indent}}`;
    }
}

function attributeToHCL(obj: any): string {
    if (typeof obj === 'object') {
        for (const [key, value] of Object.entries(obj)) {
            return `{\n${key} = ${JSON.stringify(value)}\n}`;
        }
    }
    return JSON.stringify(obj);
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
