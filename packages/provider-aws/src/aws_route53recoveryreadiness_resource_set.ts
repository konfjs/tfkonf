import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRoute53recoveryreadinessResourceSetArgsResourcesDnsTargetResourceTargetResourceNlbResource {
  arn?: string;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsResourcesDnsTargetResourceTargetResourceR53Resource {
  domain_name?: string;
  record_set_id?: string;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsResourcesDnsTargetResourceTargetResource {
  nlb_resource: AwsRoute53recoveryreadinessResourceSetArgsResourcesDnsTargetResourceTargetResourceNlbResource;
  r53_resource: AwsRoute53recoveryreadinessResourceSetArgsResourcesDnsTargetResourceTargetResourceR53Resource;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsResourcesDnsTargetResource {
  domain_name: string;
  hosted_zone_arn?: string;
  record_set_id?: string;
  record_type?: string;
  target_resource: AwsRoute53recoveryreadinessResourceSetArgsResourcesDnsTargetResourceTargetResource;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsResources {
  readiness_scopes?: string[];
  resource_arn?: string;
  dns_target_resource: AwsRoute53recoveryreadinessResourceSetArgsResourcesDnsTargetResource;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsTimeouts {
  delete?: string;
}
export interface AwsRoute53recoveryreadinessResourceSetArgs {
  resource_set_name: string;
  resource_set_type: string;
  tags?: {
    [key: string]: string;
  };
  resources: AwsRoute53recoveryreadinessResourceSetArgsResources;
  timeouts: AwsRoute53recoveryreadinessResourceSetArgsTimeouts;
}
export class aws_route53recoveryreadiness_resource_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53recoveryreadinessResourceSetArgs) {
    super(config, "resource", args, resourceName, "aws_route53recoveryreadiness_resource_set");
  }
}