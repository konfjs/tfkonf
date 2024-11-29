import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecuritylakeSubscriberArgssourceAwsLogSourceResource {
  source_name: string;
}
export interface AwsSecuritylakeSubscriberArgssourceCustomLogSourceResource {
  source_name: string;
}
export interface AwsSecuritylakeSubscriberArgssource {
  aws_log_source_resource: AwsSecuritylakeSubscriberArgssourceAwsLogSourceResource;
  custom_log_source_resource: AwsSecuritylakeSubscriberArgssourceCustomLogSourceResource;
}
export interface AwsSecuritylakeSubscriberArgsSubscriberIdentity {
  external_id: string;
  principal: string;
}
export interface AwsSecuritylakeSubscriberArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSecuritylakeSubscriberArgs {
  subscriber_description?: string;
  subscriber_name?: string;
  tags?: {
    [key: string]: string;
  };
  source: AwsSecuritylakeSubscriberArgssource;
  subscriber_identity: AwsSecuritylakeSubscriberArgsSubscriberIdentity;
  timeouts: AwsSecuritylakeSubscriberArgstimeouts;
}
export class aws_securitylake_subscriber extends TerraformResource {
  readonly access_type?: string;
  readonly arn!: string;
  readonly id!: string;
  readonly resource_share_arn!: string;
  readonly resource_share_name!: string;
  readonly role_arn!: string;
  readonly s3_bucket_arn!: string;
  readonly subscriber_endpoint!: string;
  readonly subscriber_status!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecuritylakeSubscriberArgs) {
    super(config, "resource", args, resourceName, "aws_securitylake_subscriber");
  }
}