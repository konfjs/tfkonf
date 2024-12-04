import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDetectiveGraphArgs {
  tags?: { [key: string]: string };
}

export class aws_detective_graph extends TerraformResource {
  readonly created_time!: string;
  readonly graph_arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsDetectiveGraphArgs) {
    super(config, "resource", args, resourceName, "aws_detective_graph");
  }
}
