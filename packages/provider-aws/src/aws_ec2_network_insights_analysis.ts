import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2NetworkInsightsAnalysisArgs {
  filter_in_arns?: string[];
  network_insights_path_id: string;
  tags?: { [key: string]: string };
  wait_for_completion?: boolean;
}

export class aws_ec2_network_insights_analysis extends TerraformResource {
  readonly alternate_path_hints!: any[];
  readonly arn!: string;
  readonly explanations!: any[];
  readonly forward_path_components!: any[];
  readonly id?: string;
  readonly path_found!: boolean;
  readonly return_path_components!: any[];
  readonly start_date!: string;
  readonly status!: string;
  readonly status_message!: string;
  readonly tags_all?: { [key: string]: string };
  readonly warning_message!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2NetworkInsightsAnalysisArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_network_insights_analysis");
  }
}
