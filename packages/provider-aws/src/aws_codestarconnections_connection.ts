import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodestarconnectionsConnectionArgs {
  host_arn?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_codestarconnections_connection extends TerraformResource {
  readonly arn!: string;
  readonly connection_status!: string;
  readonly id?: string;
  readonly provider_type?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsCodestarconnectionsConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_codestarconnections_connection");
  }
}
