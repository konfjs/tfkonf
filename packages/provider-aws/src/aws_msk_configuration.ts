import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsMskConfigurationArgs {
  description?: string;
  kafka_versions?: string[];
  name: string;
  server_properties: string;
}
export class aws_msk_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly latest_revision!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_msk_configuration");
  }
}