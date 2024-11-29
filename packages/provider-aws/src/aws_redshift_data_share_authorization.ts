import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRedshiftDataShareAuthorizationArgs {
  allow_writes?: boolean;
  consumer_identifier: string;
  data_share_arn: string;
}
export class aws_redshift_data_share_authorization extends TerraformResource {
  readonly id!: string;
  readonly managed_by!: string;
  readonly producer_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftDataShareAuthorizationArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_data_share_authorization");
  }
}