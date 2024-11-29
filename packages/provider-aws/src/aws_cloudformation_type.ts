import { TerraformConfig, TerraformResource } from "tfs";
export interface LoggingConfig {
  log_group_name: string;
  log_role_arn: string;
}
export interface AwsCloudformationTypeArgs {
  execution_role_arn?: string;
  schema_handler_package: string;
  type_name: string;
  logging_config: LoggingConfig;
}
export class aws_cloudformation_type extends TerraformResource {
  readonly arn!: string;
  readonly default_version_id!: string;
  readonly deprecated_status!: string;
  readonly description!: string;
  readonly documentation_url!: string;
  readonly id?: string;
  readonly is_default_version!: boolean;
  readonly provisioning_type!: string;
  readonly schema!: string;
  readonly source_url!: string;
  readonly type?: string;
  readonly type_arn!: string;
  readonly version_id!: string;
  readonly visibility!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudformationTypeArgs) {
    super(config, "resource", args, resourceName, "aws_cloudformation_type");
  }
}