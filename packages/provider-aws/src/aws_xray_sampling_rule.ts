import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsXraySamplingRuleArgs {
  attributes?: { [key: string]: string };
  fixed_rate: number;
  host: string;
  http_method: string;
  priority: number;
  reservoir_size: number;
  resource_arn: string;
  rule_name?: string;
  service_name: string;
  service_type: string;
  tags?: { [key: string]: string };
  url_path: string;
  version: number;
}

export class aws_xray_sampling_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsXraySamplingRuleArgs) {
    super(config, "resource", args, resourceName, "aws_xray_sampling_rule");
  }
}
