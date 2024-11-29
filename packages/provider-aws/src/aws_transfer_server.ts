import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsTransferServerArgsEndpointDetails {
  address_allocation_ids?: string[];
  subnet_ids?: string[];
  vpc_id?: string;
}
export interface AwsTransferServerArgsProtocolDetails {}
export interface AwsTransferServerArgsS3StorageOptions {}
export interface AwsTransferServerArgsWorkflowDetailsOnPartialUpload {
  execution_role: string;
  workflow_id: string;
}
export interface AwsTransferServerArgsWorkflowDetailsOnUpload {
  execution_role: string;
  workflow_id: string;
}
export interface AwsTransferServerArgsWorkflowDetails {
  on_partial_upload: AwsTransferServerArgsWorkflowDetailsOnPartialUpload;
  on_upload: AwsTransferServerArgsWorkflowDetailsOnUpload;
}
export interface AwsTransferServerArgs {
  certificate?: string;
  directory_id?: string;
  domain?: string;
  endpoint_type?: string;
  force_destroy?: boolean;
  function?: string;
  host_key?: string;
  identity_provider_type?: string;
  invocation_role?: string;
  logging_role?: string;
  post_authentication_login_banner?: string;
  pre_authentication_login_banner?: string;
  security_policy_name?: string;
  structured_log_destinations?: string[];
  tags?: {
    [key: string]: string;
  };
  url?: string;
  endpoint_details: AwsTransferServerArgsEndpointDetails;
  protocol_details: AwsTransferServerArgsProtocolDetails;
  s3_storage_options: AwsTransferServerArgsS3StorageOptions;
  workflow_details: AwsTransferServerArgsWorkflowDetails;
}
export class aws_transfer_server extends TerraformResource {
  readonly arn!: string;
  readonly endpoint!: string;
  readonly host_key_fingerprint!: string;
  readonly id?: string;
  readonly protocols?: string[];
  readonly sftp_authentication_methods?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferServerArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_server");
  }
}