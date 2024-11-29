import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSchemasRegistryArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_schemas_registry extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSchemasRegistryArgs) {
    super(config, "resource", args, resourceName, "aws_schemas_registry");
  }
}