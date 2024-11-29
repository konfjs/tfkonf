import { TerraformConfig } from './config.js';
import { TerraformResource } from './resource.js';

interface TerraformArgs {
    [key: string]: any;
    backend: any;
}

export class Terraform extends TerraformResource {
    constructor(config: TerraformConfig, args: TerraformArgs) {
        super(config, 'resource', args, 'terraform', 'terraform');
    }
}

interface TerraformModuleArgs {
    source: string;
    [key: string]: any;
}

export class Module extends TerraformResource {
    constructor(config: TerraformConfig, name: string, args: TerraformModuleArgs) {
        super(config, 'module', args, name);
    }
}

interface ImportArgs {
    to: string;
    id: string;
}

export class Import extends TerraformResource {
    constructor(config: TerraformConfig, args: ImportArgs) {
        super(config, 'import', args);
    }
}

interface MovedArgs {
    from: string;
    to: string;
}

export class Moved extends TerraformResource {
    constructor(config: TerraformConfig, args: MovedArgs) {
        super(config, 'moved', args);
    }
}

interface CheckArgs {
    assert: {
        condition: boolean;
        message: string;
    };
    data: TerraformResource;
}

export class Check extends TerraformResource {
    constructor(config: TerraformConfig, args: CheckArgs) {
        super(config, 'check', args);
    }
}
