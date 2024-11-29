import { TerraformConfig, TerraformResource } from "tfs";
export interface Grantee {
  email_address?: string;
  id?: string;
  type: string;
  uri?: string;
}
export interface Grant {
  permission: string;
  grantee: Grantee;
}
export interface Owner {
  id: string;
}
export interface AccessControlPolicy {
  grant: Grant;
  owner: Owner;
}
export interface AwsS3BucketAclArgs {
  acl?: string;
  bucket: string;
  expected_bucket_owner?: string;
  access_control_policy: AccessControlPolicy;
}
export class aws_s3_bucket_acl extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketAclArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_acl");
  }
}