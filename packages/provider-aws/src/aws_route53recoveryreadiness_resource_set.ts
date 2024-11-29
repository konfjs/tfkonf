import { TerraformConfig, TerraformResource } from "tfs";
export interface NlbResource {
  arn?: string;
}
export interface R53Resource {
  domain_name?: string;
  record_set_id?: string;
}
export interface TargetResource {
  nlb_resource: NlbResource;
  r53_resource: R53Resource;
}
export interface DnsTargetResource {
  domain_name: string;
  hosted_zone_arn?: string;
  record_set_id?: string;
  record_type?: string;
  target_resource: TargetResource;
}
export interface Resources {
  readiness_scopes?: string[];
  resource_arn?: string;
  dns_target_resource: DnsTargetResource;
}
export interface Timeouts {
  delete?: string;
}
export interface AwsRoute53recoveryreadinessResourceSetArgs {
  resource_set_name: string;
  resource_set_type: string;
  tags?: {
    [key: string]: string;
  };
  resources: Resources;
  timeouts: Timeouts;
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