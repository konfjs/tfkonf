import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketAclArgsAccessControlPolicygrantgrantee {
  email_address?: string;
  id?: string;
  type: string;
  uri?: string;
}
export interface AwsS3BucketAclArgsAccessControlPolicygrant {
  permission: string;
  grantee: AwsS3BucketAclArgsAccessControlPolicygrantgrantee;
}
export interface AwsS3BucketAclArgsAccessControlPolicyowner {
  id: string;
}
export interface AwsS3BucketAclArgsAccessControlPolicy {
  grant: AwsS3BucketAclArgsAccessControlPolicygrant;
  owner: AwsS3BucketAclArgsAccessControlPolicyowner;
}
export interface AwsS3BucketAclArgs {
  acl?: string;
  bucket: string;
  expected_bucket_owner?: string;
  access_control_policy: AwsS3BucketAclArgsAccessControlPolicy;
}
export class aws_s3_bucket_acl extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketAclArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_acl");
  }
}