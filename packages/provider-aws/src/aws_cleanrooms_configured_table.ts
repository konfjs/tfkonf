import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCleanroomsConfiguredTableArgsTableReference {
  database_name: string;
  table_name: string;
}
export interface AwsCleanroomsConfiguredTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCleanroomsConfiguredTableArgs {
  allowed_columns: string[];
  analysis_method: string;
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  table_reference: AwsCleanroomsConfiguredTableArgsTableReference;
  timeouts?: AwsCleanroomsConfiguredTableArgsTimeouts;
}
export class aws_cleanrooms_configured_table extends TerraformResource {
  readonly arn!: string;
  readonly create_time!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCleanroomsConfiguredTableArgs) {
    super(config, "resource", args, resourceName, "aws_cleanrooms_configured_table");
  }
}