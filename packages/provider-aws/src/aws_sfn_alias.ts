import { TerraformConfig, TerraformResource } from "tfs";
export interface RoutingConfiguration {
  state_machine_version_arn: string;
  weight: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSfnAliasArgs {
  description?: string;
  name: string;
  routing_configuration: RoutingConfiguration;
  timeouts: Timeouts;
}
export class aws_sfn_alias extends TerraformResource {
  readonly arn!: string;
  readonly creation_date!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSfnAliasArgs) {
    super(config, "resource", args, resourceName, "aws_sfn_alias");
  }
}