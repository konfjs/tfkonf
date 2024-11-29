import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSchemasSchemaArgs {
  content: string;
  description?: string;
  name: string;
  registry_name: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
}
export class aws_schemas_schema extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly last_modified!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: string;
  readonly version_created_date!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSchemasSchemaArgs) {
    super(config, "resource", args, resourceName, "aws_schemas_schema");
  }
}