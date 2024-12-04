import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueSchemaArgs {
  compatibility: string;
  data_format: string;
  description?: string;
  schema_definition: string;
  schema_name: string;
  tags?: { [key: string]: string };
}

export class aws_glue_schema extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly latest_schema_version!: number;
  readonly next_schema_version!: number;
  readonly registry_arn?: string;
  readonly registry_name!: string;
  readonly schema_checkpoint!: number;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueSchemaArgs) {
    super(config, "resource", args, resourceName, "aws_glue_schema");
  }
}
