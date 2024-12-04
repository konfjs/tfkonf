import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2NetworkInsightsPathArgs {
  destination?: string;
  destination_ip?: string;
  destination_port?: number;
  protocol: string;
  source: string;
  source_ip?: string;
  tags?: { [key: string]: string };
}

export class aws_ec2_network_insights_path extends TerraformResource {
  readonly arn!: string;
  readonly destination_arn!: string;
  readonly id?: string;
  readonly source_arn!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2NetworkInsightsPathArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_network_insights_path");
  }
}
