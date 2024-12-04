import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDetectiveOrganizationConfigurationArgs {
  auto_enable: boolean;
  graph_arn: string;
}

export class aws_detective_organization_configuration extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDetectiveOrganizationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_detective_organization_configuration");
  }
}
