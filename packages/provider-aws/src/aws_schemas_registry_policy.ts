import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSchemasRegistryPolicyArgs {
  policy: string;
  registry_name: string;
}

export class aws_schemas_registry_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSchemasRegistryPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_schemas_registry_policy");
  }
}
