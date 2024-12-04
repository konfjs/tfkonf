import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessEndpointArgsLoadBalancerOptions {
  load_balancer_arn?: string;
  port?: number;
  protocol?: string;
  subnet_ids?: string[];
}

export interface AwsVerifiedaccessEndpointArgsNetworkInterfaceOptions {
  network_interface_id?: string;
  port?: number;
  protocol?: string;
}

export interface AwsVerifiedaccessEndpointArgsSseSpecification {
  customer_managed_key_enabled?: boolean;
  kms_key_arn?: string;
}

export interface AwsVerifiedaccessEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVerifiedaccessEndpointArgs {
  application_domain: string;
  attachment_type: string;
  description?: string;
  domain_certificate_arn: string;
  endpoint_domain_prefix: string;
  endpoint_type: string;
  policy_document?: string;
  security_group_ids?: string[];
  tags?: { [key: string]: string };
  verified_access_group_id: string;
  load_balancer_options: AwsVerifiedaccessEndpointArgsLoadBalancerOptions;
  network_interface_options: AwsVerifiedaccessEndpointArgsNetworkInterfaceOptions;
  sse_specification: AwsVerifiedaccessEndpointArgsSseSpecification;
  timeouts?: AwsVerifiedaccessEndpointArgsTimeouts;
}

export class aws_verifiedaccess_endpoint extends TerraformResource {
  readonly device_validation_domain!: string;
  readonly endpoint_domain!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly verified_access_instance_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedaccessEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedaccess_endpoint");
  }
}
