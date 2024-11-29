import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsShieldDrtAccessLogBucketAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsShieldDrtAccessLogBucketAssociationArgs {
  log_bucket: string;
  role_arn_association_id: string;
  timeouts?: AwsShieldDrtAccessLogBucketAssociationArgsTimeouts;
}
export class aws_shield_drt_access_log_bucket_association extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldDrtAccessLogBucketAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_shield_drt_access_log_bucket_association");
  }
}