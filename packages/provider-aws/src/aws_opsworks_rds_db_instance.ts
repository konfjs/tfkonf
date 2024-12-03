import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOpsworksRdsDbInstanceArgs {
  db_password: string;
  db_user: string;
  rds_db_instance_arn: string;
  stack_id: string;
}
export class aws_opsworks_rds_db_instance extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpsworksRdsDbInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_opsworks_rds_db_instance");
  }
}