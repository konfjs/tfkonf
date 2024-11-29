import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketAclArgsAccessControlPolicyGrantGrantee {
  email_address?: string;
  id?: string;
  type: string;
  uri?: string;
}
export interface AwsS3BucketAclArgsAccessControlPolicyGrant {
  permission: string;
  grantee: AwsS3BucketAclArgsAccessControlPolicyGrantGrantee;
}
export interface AwsS3BucketAclArgsAccessControlPolicyOwner {
  id: string;
}
export interface AwsS3BucketAclArgsAccessControlPolicy {
  grant: AwsS3BucketAclArgsAccessControlPolicyGrant;
  owner: AwsS3BucketAclArgsAccessControlPolicyOwner;
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