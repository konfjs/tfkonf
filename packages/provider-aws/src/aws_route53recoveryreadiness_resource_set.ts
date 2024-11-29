import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53recoveryreadinessResourceSetArgsresourcesDnsTargetResourceTargetResourceNlbResource {
  arn?: string;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsresourcesDnsTargetResourceTargetResourceR53Resource {
  domain_name?: string;
  record_set_id?: string;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsresourcesDnsTargetResourceTargetResource {
  nlb_resource: AwsRoute53recoveryreadinessResourceSetArgsresourcesDnsTargetResourceTargetResourceNlbResource;
  r53_resource: AwsRoute53recoveryreadinessResourceSetArgsresourcesDnsTargetResourceTargetResourceR53Resource;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsresourcesDnsTargetResource {
  domain_name: string;
  hosted_zone_arn?: string;
  record_set_id?: string;
  record_type?: string;
  target_resource: AwsRoute53recoveryreadinessResourceSetArgsresourcesDnsTargetResourceTargetResource;
}
export interface AwsRoute53recoveryreadinessResourceSetArgsresources {
  readiness_scopes?: string[];
  resource_arn?: string;
  dns_target_resource: AwsRoute53recoveryreadinessResourceSetArgsresourcesDnsTargetResource;
}
export interface AwsRoute53recoveryreadinessResourceSetArgstimeouts {
  delete?: string;
}
export interface AwsRoute53recoveryreadinessResourceSetArgs {
  resource_set_name: string;
  resource_set_type: string;
  tags?: {
    [key: string]: string;
  };
  resources: AwsRoute53recoveryreadinessResourceSetArgsresources;
  timeouts: AwsRoute53recoveryreadinessResourceSetArgstimeouts;
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